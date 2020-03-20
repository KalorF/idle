<template>
  <PageTran>
    <div class="buyGoodsMsg">
      <Back title="商品" @back="$router.go(-1)" />
      <div class="goodsBox">
        <div class="goodsItem">
          <img class="goodsPic" :src="msg.goodsPics[0]" alt="">
          <div class="goodsMsg">
            <div class="title">{{ msg.desc }}</div>
            <div class="price"><span>¥</span><span>{{ msg.price }}</span></div>
            <div class="publishUser">
              <img v-if="msg.seller && msg.seller.avatars === ''" src="@/assets/header.png" alt="">
              <img v-else :src="msg.seller.avatars" alt="发布者">
              <span>{{ msg.seller.username }}</span>
            </div>
          </div>
        </div>
        <div class="ctrl" v-if="!isShowContact">
          <button class="btn" @click="confirmBuy" >确认购买</button>
        </div>
        <div class="contact" v-if="isShowContact">
          <div class="tip">--- 用以下方式与买家取得联系 ---</div>
          <div class="way">
            <div class="phone">
              <svg class="icon iconSize" aria-hidden="true">
                <use xlink:href="#icon-dianhua"></use>
              </svg>
              手机：{{ msg.seller.phone }}
            </div>
            <div class="wechat">
              <svg class="icon iconSize" aria-hidden="true">
                <use xlink:href="#icon-weixin"></use>
              </svg>
              微信：{{ msg.seller.wechat }}
            </div>
          </div>
          <div class="ctrl2">
            <div>状态：待沟通</div>
            <button class="btn2" @click="$router.replace('/myBuyGoods')">查看订单 ></button>
          </div>
        </div>
      </div>
    </div>
  </PageTran>
</template>

<script>
import PageTran from '@/components/PageTran.vue'
import Back from '@/components/Back.vue'
import requestApi from '@/request/request'
import { Dialog } from 'vant'
export default {
  components: { PageTran, Back },
  data () {
    return {
      isShowContact: false,
      msg: this.$route.params.data
    }
  },

  beforeRouteLeave (to, from, next) {
    this.$destroy()
    next()
  },

  methods: {
    confirmBuy () {
      Dialog.confirm({
        title: '提示',
        message: '是否确认购买此商品？'
      }).then(() => {
        this.buyApi()
      }).catch(() => {
        this.isShowContact = false
      })
    },

    buyApi () {
      let data = { goodsId: this.msg._id, buyerId: localStorage.getItem('userInfo'), status: '1' }
      requestApi({
        name: 'createOrder',
        data
      }).then(res => {
        if (res.code === 200) {
          this.$toast('购买成功, 尽快与商家取得联系吧!')
          this.$router.replace('/myBuyGoods')
          this.isShowContact = true
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.buyGoodsMsg {
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
.buyGoodsMsg::-webkit-scrollbar {
  width: 0px;
  display: none;
}
.goodsBox {
  position: relative;
  background: #feffff;
  height: 120px;
  margin-top: 48px;
  .goodsItem {
    height: 140px;
    background: #feffff;
    padding: 8px 10px;
    display: flex;
    margin-bottom: 1px;
    .goodsPic {
      width: 130px;
      height: 130px;
      object-fit: cover;
      margin-top: 6px;
      border-radius: 8px;
    }
    .goodsMsg {
      position: relative;
      margin-left: 16px;
      .title {
        margin-top: 1px;
        color: #555555;
        font-size: 16px;
      }
      .price {
        position: absolute;
        bottom: 35px;
        color: #e74c3c;
        span:nth-child(1) {
          font-size: 8px;
        }
        span:nth-child(2) {
          font-size: 16px;
        }
      }
      .publishUser {
        position: absolute;
        bottom: 7px;
        width: 160px;
        display: flex;
        align-items: center;
        img {
          width: 20px;
          height: 20px;
          object-fit: cover;
          border-radius: 50%;
        }
        span {
          color: #666666;
          font-size: 12px;
          margin-left: 5px;
        }
      }
    }
  }
  .ctrl {
    display: flex;
    background: #feffff;
    height: 50px;
    align-items: center;
    .btn {
      margin-left: auto;
      margin-right: 10px;
      background: #2ed573;
      color: #feffff;
      outline: none;
      border: 0;
      height: 34px;
      line-height: 34px;
      border-radius: 10px;
      width: 100px;
    }
  }
  .contact {
    position: relative;
    background: #feffff;
    padding-top: 10px;
    .tip {
      text-align: center;
      color: #777777;
    }
    .way {
      display: flex;
      margin-top: 10px;
      justify-content: space-around;
      flex-wrap: wrap;
      color: #555555;
      border-bottom: 1px solid #f5f7fa;
      padding-bottom: 10px;
    }
    .ctrl2 {
      display: flex;
      height: 50px;
      align-items: center;
      div {
        color: #555555;
        padding-left: 10px;
      }
      .btn2 {
        margin-left: auto;
        margin-right: 10px;
        background: #2ed573;
        color: #feffff;
        outline: none;
        border: 0;
        height: 34px;
        line-height: 34px;
        border-radius: 10px;
        width: 100px;
      }
    }
  }
}
</style>
