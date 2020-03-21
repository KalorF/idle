<template>
  <PageTran>
    <div class="setMsgPage">
      <Back title="个人设置" @back="$router.go(-1)" />
      <div class="msgBox">
        <div class="hederImgItem">
          <div>头像</div>
          <div class="header">
            <input class="fileInput" type="file" accept="image/*" @change="upload">
            <img v-if="userInfo.avatars === ''" class="pic" src="@/assets/header.png" alt="">
            <img v-else class="pic" :src="userInfo.avatars" alt="">
          </div>
          <img class="forward" src="@/assets/forward.png" alt="">
        </div>
        <div class="item" @click="setItem('name')">
          <div>呢称</div>
          <div class="text">{{ userInfo.username }}</div>
          <img class="forward" src="@/assets/forward.png" alt="">
        </div>
        <div class="item" @click="$toast('手机号无法修改哦')">
          <div>手机号码</div>
          <div class="text">{{ userInfo.phone }}</div>
          <img class="forward" src="@/assets/forward.png" alt="">
        </div>
        <div class="item" @click="setItem('wechat')">
          <div>微信</div>
          <div class="text">{{ userInfo.wechat }}</div>
          <img class="forward" src="@/assets/forward.png" alt="">
        </div>
        <div class="item" @click="$router.push('/modifyPwd')">
          <div>修改密码</div>
          <div class="text"></div>
          <img class="forward" src="@/assets/forward.png" alt="">
        </div>
      </div>
      <div class="ctrl">
        <button class="btn" @click="loginOut">退出登陆</button>
      </div>
      <van-dialog v-model="showDialog" :title="dialogTitle" @confirm="handleConfirm" @cancel="dialogVal = '', dialogTitle = ''" confirmButtonText="确认修改" cancelButtonText="取消修改" show-cancel-button>
        <van-field v-model="dialogVal" placeholder="请输入修改内容" :label="lable" />
      </van-dialog>
    </div>
  </PageTran>
</template>

<script>
import PageTran from '@/components/PageTran.vue'
import Back from '@/components/Back.vue'
import { Dialog } from 'vant'
import requestApi from '@/request/request'
import axios from 'axios'

export default {
  components: { PageTran, Back, [Dialog.Component.name]: Dialog.Component },

  data () {
    return {
      userInfo: '',
      dialogTitle: '',
      lable: '呢称',
      dialogVal: '',
      showDialog: false
    }
  },

  activated () {
    this.getUserInfo()
  },

  methods: {
    getUserInfo () {
      const data = { userId: localStorage.getItem('userInfo') }
      requestApi({
        name: 'getUserInfo',
        data
      }).then(res => {
        this.userInfo = res.data
      })
    },

    upload (e) {
      const file = e.target.files[0]
      let forms = new FormData()
      forms.append('file', file)
      axios.post(`${process.env.NODE_ENV === 'development' ? '/api' : process.env.VUE_APP_BASE_API}/user/uploadPics`, forms, {
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then(res => {
        this.modifyApi(res.data.data.url)
      })
    },

    setItem (type) {
      if (type === 'name') {
        this.lable = '呢称'
        this.dialogTitle = '修改呢称'
        this.dialogVal = this.userInfo.username
      } else {
        this.lable = '微信'
        this.dialogVal = this.userInfo.wechat
        this.dialogTitle = '修改微信'
      }
      this.showDialog = true
    },

    handleConfirm () {
      this.dialogVal === '' ? this.$toast('请输入要修改的内容') : this.modifyApi()
    },

    modifyApi (avatars = '') {
      let data = {}
      if (this.dialogTitle === '修改呢称') {
        data = { userId: localStorage.getItem('userInfo'), username: this.dialogVal }
      } else if (this.dialogTitle === '修改微信') {
        data = { userId: localStorage.getItem('userInfo'), wechat: this.dialogVal }
      } else {
        data = { userId: localStorage.getItem('userInfo'), avatars }
      }
      requestApi({
        name: 'modifyUserInfo',
        data
      }).then(res => {
        if (res.code === 200) {
          this.$toast('修改成功')
          this.showDialog = false
          this.dialogTitle = ''
          this.getUserInfo()
        }
      })
    },

    loginOut () {
      localStorage.removeItem('userInfo')
      this.$router.replace('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.setMsgPage {
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
.setMsgPage::-webkit-scrollbar {
  width: 0px;
  display: none;
}
.msgBox {
  position: relative;
  margin-top: 60px;
  background: #feffff;
  width: 94%;
  margin-left: 3%;
  box-sizing: border-box;
  color: #555555;
  padding: 5px 5px 20px 10px;
  border-radius: 7px;
  .hederImgItem {
    display: flex;
    height: 80px;
    align-items: center;
    border-bottom: 1px solid #f5f7fa;
    padding-bottom: 5px;
    .header {
      margin-left: auto;
      position: relative;
      .fileInput {
        position: absolute;
        height: 100%;
        width: 100%;
        opacity: 0;
      }
      .pic {
        width: 70px;
        height: 70px;
        border-radius: 7px;
        object-fit: cover;
      }
    }
    .forward {
      width: 20px;
      margin-left: 5px;
      height: 20px;
    }
  }
  .item {
    display: flex;
    height: 40px;
    align-items: center;
    border-bottom: 1px solid #f5f7fa;
    color: #555555;
    .text {
      margin-left: auto;
      color: #666666;
    }
    .forward {
      width: 20px;
      margin-left: 5px;
      height: 20px;
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
    background: #05c46b;
    color: #feffff;
    outline: none;
    border: 0;
    height: 42px;
    line-height: 42px;
    font-size: 16px;
    border-radius: 10px;
    width: 90%;
  }
}
</style>
