<template>
  <PageTran>
    <div class="exchangePage">
      <Back title="收货信息" @back="$router.go(-1)" />
      <div class="msgBox">
          <van-field
            v-model="name"
            clearable
            label="收货人"
            placeholder="输入收货人姓名"
          />
          <van-field
            v-model="phone"
            type="tel"
            maxlength="11"
            label="手机号码"
            placeholder="输入收货人手机号码"
          />
          <van-field
            v-model="address"
            rows="3"
            autosize
            label="收货地址"
            type="textarea"
            placeholder="输入收货地址"
          />
      </div>
      <div class="ctrl">
        <button class="btn" @click="handleExchange">确认兑换</button>
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
      name: '',
      phone: '',
      address: ''
    }
  },

  beforeRouteLeave (to, from, next) {
    this.$destroy()
    next()
  },

  methods: {
    handleExchange () {
      if (this.name === '') {
        this.$toast('请输入收货人姓名')
      } else if (this.phone === '') {
        this.$toast('请输入手机号码')
      } else if (this.address === '') {
        this.$toast('请输入收获地址')
      } else {
        this.exchangeApi()
      }
    },

    exchangeApi () {
      const data = {
        forgoodsId: this.$route.query.id,
        cost: this.$route.query.cost,
        userId: localStorage.getItem('userInfo'),
        phone: this.phone,
        goodsAre: this.name,
        address: this.address
      }
      requestApi({
        name: 'addForgoosOrder',
        data
      }).then(res => {
        if (res.code === 200) {
          this.$toast('兑换成功，平台马上会送到你手上哦～')
          setTimeout(() => {
            this.$router.replace('/exchangeGoods')
          }, 500)
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
    background: #cc8e35;
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
