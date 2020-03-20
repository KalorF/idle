<template>
  <div class="waitTakePage">
    <div v-if="orderList.length">
    <div class="goodsBox" v-for="(item, index) in orderList" :key="index">
      <div class="goodsItem">
        <img class="goodsPic" :src="item.goods.goodsPics[0]" alt="">
        <div class="goodsMsg">
          <div class="title">{{ item.goods.desc }}</div>
          <div class="price"><span>¥</span><span>{{ item.goods.price }}</span></div>
          <div class="publishUser">
            <img v-if="item.goods.seller.avatars === ''" src="@/assets/header.png" alt="">
            <img v-else :src="item.goods.seller.avatars" alt="发布者">
            <span>{{ item.goods.seller.username }}</span>
          </div>
        </div>
      </div>
      <div class="contact">
        <div class="tip">--- 用以下方式与买家取得联系 ---</div>
        <div class="way">
          <div class="phone">
            <svg class="icon iconSize" aria-hidden="true">
              <use xlink:href="#icon-dianhua"></use>
            </svg>
            手机：{{ item.goods.seller.phone }}
          </div>
          <div class="wechat">
            <svg class="icon iconSize" aria-hidden="true">
              <use xlink:href="#icon-weixin"></use>
            </svg>
            微信：{{ item.goods.seller.wechat }}
          </div>
        </div>
        <div class="ctrl2">
          <div v-if="status === 0">状态：待沟通</div>
          <div v-if="status === 1">状态：待收货</div>
          <div v-if="status === 2">状态：已收货</div>
          <div v-if="status === -1">状态：已被购买</div>
          <button v-if="status === 1" @click="confirm(item._id)" class="btn2">确认收货</button>
        </div>
      </div>
    </div>
    </div>
    <div v-else class="nolist">
      无相关订单信息
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant'
import requestApi from '@/request/request'

export default {
  props: ['orderList', 'status'],

  methods: {
    confirm (id) {
      Dialog.confirm({
        title: '提示',
        message: '是否确认收货？'
      }).then(() => {
        this.confirmApi(id)
      }).catch(() => {
      })
    },

    confirmApi (id) {
      requestApi({
        name: 'confirmGoods',
        data: { OrderId: id, userId: localStorage.getItem('userInfo') }
      }).then(res => {
        if (res.code === 200) {
          this.$toast.success('成功确认收货')
          this.$parent.$parent.getData(this.status)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.waitTakePage {
  position: relative;
  margin-top: 110px;
}
.nolist {
  text-align: center;
  color: #777777;
  padding-top: 10px;
}
.goodsBox {
  position: relative;
  width: 94%;
  margin-left: 3%;
  border-radius: 7px;
  overflow: hidden;
  box-sizing: border-box;
  margin-bottom: 10px;
  .goodsItem {
    background: #feffff;
    padding: 8px 10px;
    display: flex;
    margin-bottom: 1px;
    .goodsPic {
      width: 80px;
      height: 80px;
      object-fit: cover;
      margin-top: 6px;
      border-radius: 8px;
    }
    .goodsMsg {
      display: flex;
      flex-direction: column;
      margin-left: 16px;
      .title {
        margin-top: 1px;
        color: #555555;
        font-size: 16px;
        margin-bottom: 5px;
      }
      .price {
        margin-top: auto;
        color: #e74c3c;
        span:nth-child(1) {
          font-size: 8px;
        }
        span:nth-child(2) {
          font-size: 16px;
        }
      }
      .publishUser {
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
