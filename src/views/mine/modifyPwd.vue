<template>
  <PageTran>
    <div class="exchangePage">
      <Back title="修改密码" @back="$router.go(-1)" />
      <div class="msgBox">
          <van-field
            v-model="originPwd"
            clearable
            type="password"
            label="原始密码"
            placeholder="输入原始密码"
          />
          <van-field
            v-model="newPwd"
            type="password"
            label="新密码"
            placeholder="输入新密码"
          />
          <van-field
            v-model="againPwd"
            type="password"
            label="确认密码"
            placeholder="再次确认密码"
          />
      </div>
      <div class="ctrl">
        <button class="btn" @click="confirm">确认修改</button>
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
      originPwd: '',
      newPwd: '',
      againPwd: ''
    }
  },

  methods: {
    confirm () {
      if (this.originPwd === '') {
        this.$toast('请输入原密码')
      } else if (this.newPwd === '') {
        this.$toast('请输入新密码')
      } else if (this.againPwd === '') {
        this.$toast('请输入新密码')
      } else if (this.newPwd !== this.againPwd) {
        this.$toast('设置的密码不一致，请从新输入')
      } else {
        this.modifyApi()
      }
    },

    modifyApi () {
      const data = { userId: localStorage.getItem('userInfo'), originPwd: this.originPwd, newPwd: this.newPwd }
      requestApi({
        name: 'modifyPwd',
        data
      }).then(res => {
        if (res.code === 200) {
          localStorage.removeItem('userInfo')
          this.$router.replace('/login')
          this.$toast('修改成功, 请重新登陆')
        } else {
          this.$toast(`${res.msg}`)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.exchangePage {
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
.exchangePage::-webkit-scrollbar {
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
