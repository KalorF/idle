<template>
  <PageTran>
    <div class="pgoodsPage">
      <Back title="发布闲置" @back="$router.go(-1)" />
      <div class="publishBox">
        <div class="content">
          <van-field
            v-model="content"
            rows="3"
            autosize
            type="textarea"
            placeholder="输入闲置品描述"
          />
        </div>
        <span @click="handlePicker" class="type" :class="{active: typeVal}">{{ typeVal ? typeVal : '商品类别' }}</span>
        <div class="picBox">
          <div class="imgbox" v-for="(item, index) in imgList" :key="index">
            <svg class="icon closeIcon" aria-hidden="true" @click="delImg(index)">
              <use xlink:href="#icon-guanbi"></use>
            </svg>
            <img class="uploadImg" :src="item" alt="上传的图片">
          </div>
          <div class="add" v-if="!imgList.length || imgList.length !== 6">
            <img class="addimg" src="@/assets/add.png" alt="">
            <input class="fileup" type="file" accept="image/*" @change="upload">
          </div>
        </div>
        <van-field
          v-model="price"
          type="tel"
          maxlength="11"
          label="商品价格"
          clearable
          placeholder="输入商品价格"
        />
        <div class="ctrl">
          <button type="button" class="btn" @click="publish">发布</button>
        </div>
      </div>

      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @cancel="showPicker = false"
          @confirm="onConfirm"
        />
      </van-popup>
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
      imgList: [],
      typeVal: '',
      showPicker: false,
      price: '',
      columns: [],
      typeList: {}
    }
  },

  activated () {
    this.getTypeList()
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
    // 删除上传的图片
    delImg (index) {
      this.imgList.splice(index, 1)
    },
    // 点击确认选择按钮
    onConfirm (value) {
      this.typeVal = value[1]
      this.showPicker = false
    },
    // 选择类别
    handlePicker () {
      const typeList = this.typeList
      this.columns = [{
        values: Object.keys(typeList),
        className: 'column1'
      },
      {
        values: typeList[Object.keys(typeList)[0]],
        className: 'column2'
      }]
      this.showPicker = true
    },

    // 发布商品
    publish () {
      if (this.content === '') {
        this.$toast('请输入商品描述')
      } else if (this.typeVal === '') {
        this.$toast('请选择商品类型')
      } else if (!this.imgList.length) {
        this.$toast('请上传商品图片')
      } else if (this.price === '') {
        this.$toast('请输入价格')
      } else {
        this.publishApi()
      }
    },

    publishApi () {
      let seller = localStorage.getItem('userInfo')
      let city = window.city
      const data = { desc: this.content, price: this.price, typeName: this.typeVal, goodsPics: this.imgList, seller, city }
      requestApi({
        name: 'publishGoods',
        data
      }).then(res => {
        this.$toast('发布成功')
        setTimeout(() => {
          this.$router.replace('/index')
        }, 500)
      })
    },

    // 获取商品类型
    async getTypeList () {
      const { data } = await requestApi({ name: 'typeList' })
      let newdata = {}
      data.forEach(item => {
        if (item.children) {
          newdata[item.name] = []
          item.children.forEach(ite => {
            newdata[item.name].push(ite.name)
          })
        }
      })
      this.typeList = newdata
    }
  }
}
</script>

<style lang="scss" scoped>
.pgoodsPage {
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
.pgoodsPage::-webkit-scrollbar {
  width: 0px;
  display: none;
}
.type {
  background: #f1f1f1;
  color: #666666;
  margin-left: 10px;
  padding: 7px;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
}
.type.active {
  background: #ccae62;
  color: #feffff;
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
