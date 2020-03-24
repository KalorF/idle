<template>
  <PageTran>
    <div class="pdynamicPage">
      <Back title="发布动态" @back="$router.go(-1)" />
      <div class="publishBox">
        <div class="content">
          <van-field
            v-model="content"
            rows="3"
            autosize
            type="textarea"
            placeholder="输入动态内容✏️"
          />
        </div>
        <div class="picBox">
          <div class="imgbox" v-for="(item, index) in imgList" :key="index">
            <svg class="icon closeIcon" aria-hidden="true" @click="delImg(index)">
              <use xlink:href="#icon-guanbi"></use>
            </svg>
            <img class="uploadImg" :src="item" alt="上传的图片">
          </div>
          <div class="add" v-if="!imgList.length || imgList.length !== 9">
            <img class="addimg" src="@/assets/add.png" alt="">
            <input class="fileup" type="file" accept="image/*" @change="upload">
          </div>
        </div>
        <div class="ctrl">
          <button type="button" class="btn" @click="pubDynamic">发布</button>
        </div>
      </div>
    </div>
  </PageTran>
</template>

<script>
import PageTran from '@/components/PageTran.vue'
import Back from '@/components/Back.vue'
import requestApi from '@/request/request'
import axios from 'axios'

export default {
  components: { PageTran, Back },

  data () {
    return {
      content: '',
      imgList: []
    }
  },

  beforeRouteLeave (to, from, next) {
    this.$destroy()
    next()
  },

  methods: {
    // 上传图片
    upload (e) {
      const file = e.target.files[0]
      let forms = new FormData()
      forms.append('file', file)
      axios.post(`${process.env.NODE_ENV === 'development' ? '/api' : process.env.VUE_APP_BASE_API}/user/uploadPics`, forms, {
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then(res => {
        this.imgList.push(res.data.data.url)
      })
    },
    getObjectURL (file) {
      var url = null
      if (window.createObjectURL !== undefined) {
        url = window.createObjectURL(file)
      } else if (window.URL !== undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file)
      } else if (window.webkitURL !== undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file)
      }
      return url
    },

    pubDynamic () {
      if (!this.imgList.length && this.content === '') {
        this.$toast('请输入动态信息')
      } else {
        this.pubApi()
      }
    },
    pubApi () {
      let data = { publisher: localStorage.getItem('userInfo'), pics: this.imgList, content: this.content, city: window.city }
      requestApi({
        name: 'publishDynamic',
        data
      }).then(res => {
        if (res.code === 200) {
          this.$toast('发表成功')
          setTimeout(() => {
            this.$router.replace('/dynamic')
          }, 500)
        }
      })
    },
    // 删除图片
    delImg (index) {
      this.imgList.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.pdynamicPage {
  position: absolute;
  overflow-y: scroll;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: #f6f6f6;
  width: 100%;
}
.pdynamicPage::-webkit-scrollbar {
  width: 0px;
  display: none;
}
.publishBox {
  margin-top: 45px;
  background: #feffff;
  padding: 10px;
}
.picBox {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  .add {
    height: 100px;
    width: 100px;
    background: #f1f1f1;
    position: relative;
    overflow: hidden;
    .addimg {
      height: 100%;
      width: 100%;
      object-fit: cover;
      position: relative;
    }
    .fileup {
      position: absolute;
      height: 100%;
      opacity: 0;
      top: 0;
      left: 0;
    }
  }
  .imgbox {
    position: relative;
    margin-right: 8px;
    margin-bottom: 8px;
    height: 100px;
    width: 100px;
    .closeIcon {
      position: absolute;
      right: 0;
      top: 0;
      font-size: 22px;
      color: #ff7675;
    }
    .uploadImg {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}
.ctrl {
  margin-top: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  .btn {
    background: #ccae62;
    color: #feffff;
    outline: none;
    border: 0;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    border-radius: 10px;
    width: 94%;
  }
}
</style>
