<template>
  <PageTran>
    <div class="registryPage">
      <Back title="账号注册" @back="$router.go(-1)" />
      <div class="msgBox">
          <van-field
            v-model="username"
            clearable
            label="用户名称"
            placeholder="请输入用户名称"
          />
          <van-field
            v-model="phone"
            type="tel"
            maxlength="11"
            label="手机号码"
            clearable
            placeholder="请输入手机号码"
          />
          <van-field
            v-model="wechat"
            label="微信号"
            clearable
            placeholder="请输入微信号"
          />
          <van-field
            v-model="pwd"
            label="密码"
            type="password"
            clearable
            placeholder="请输入密码"
          />
          <van-field
            v-model="agnPwd"
            label="确认密码"
            clearable
            type="password"
            placeholder="请再次输入密码"
          />
      </div>
      <div class="ctrl">
        <button class="btn" @click="registry">确认注册</button>
      </div>
    </div>
  </PageTran>
</template>

<script>
import PageTran from '@/components/PageTran.vue'
import Back from '@/components/Back.vue'
import requestApi from '@/request/request'

export default {
  components: { PageTran, Back },
  data () {
    return {
      username: '',
      phone: '',
      wechat: '',
      pwd: '',
      agnPwd: ''
    }
  },

  methods: {
    // 点击注册按钮
    registry () {
      let len = Object.keys(this.$data).length
      Object.keys(this.$data).forEach(item => {
        if (this.$data[item] === '') {
          len--
        }
      })
      if (len !== 5) {
        this.$toast('请将信息填写完整')
      } else if (this.pwd !== this.agnPwd) {
        this.$toast('密码不一致，请重新输入')
      } else {
        this.registryApi()
      }
    },
    registryApi () {
      let data = { username: this.username, phone: this.phone, password: this.agnPwd, wechat: this.wechat }
      requestApi({
        name: 'signup',
        headerType: 'json',
        data
      }).then(res => {
        if (res.code === 200) {
          Object.keys(this.$data).forEach(item => {
            this.$data[item] = ''
          })
          this.$toast('注册成功, 返回登陆页面进行登陆吧')
        } else {
          this.$toast(`${res.msg}`)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.registryPage {
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
.registryPage::-webkit-scrollbar {
  width: 0px;
  display: none;
}
.msgBox {
  background: #feffff;
  width: 94%;
  margin-left: 3%;
  margin-top: 60px;
  border-radius: 7px;
  overflow: hidden;
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
    height: 45px;
    line-height: 45px;
    font-size: 16px;
    border-radius: 10px;
    width: 90%;
  }
}
</style>
