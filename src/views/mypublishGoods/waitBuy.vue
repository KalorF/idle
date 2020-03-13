<template>
  <div class="waitBuyPage">
    <div class="goodsBox">
      <div class="goodsItem" v-for="(item, index) in goodsList" :key="index">
        <div class="goodsMsg">
          <div class="titleAndprice">
            <p class="p1">{{ item.desc }}</p>
            <p class="p2"><span>¥</span><span>{{ item.price }}</span></p>
          </div>
          <div class="imgbox" @click="viewImg(item.goodsPics)">
            <img :src="item.goodsPics[0]" alt="">
            <div class="number">{{ item.goodsPics.length }}张</div>
          </div>
        </div>
        <div class="buyerbox">
          <div class="buyerItem" v-for="(ite, index) in item.buyers" :key="index">
            <img v-if="ite.buyer.avatars !== ''" :src="ite.buyer.avatars" alt="">
            <img v-else src="@/assets/header.png" alt="">
            <div class="buyer">{{ ite.buyer.username }}</div>
            <div class="state">待沟通</div>
            <button class="btn" @click="sellto(item._id, ite.buyer._id, ite.buyer.username)" >卖给</button>
          </div>
        </div>
        <div class="delctrl">
          <button class="btn">取消发布</button>
        </div>
      </div>
    </div>

    <div v-if="!goodsList.length" class="nogoods">
      无相关闲置品信息
    </div>
  </div>
</template>

<script>
import requestApi from '@/request/request'
import { ImagePreview, Dialog } from 'vant'

export default {
  data () {
    return {
      goodsList: []
    }
  },

  beforeRouteLeave (to, from, next) {
    this.$destroy()
  },

  mounted () {
    this.getData()
  },

  methods: {
    viewImg (imgs) {
      ImagePreview(imgs)
    },
    getData () {
      let data = { seller: localStorage.getItem('userInfo'), status: 0 }
      requestApi({
        name: 'viewMygoods',
        data
      }).then(res => {
        this.goodsList = res.data
      })
    },

    sellto (goodsId, buyer, name) {
      Dialog.confirm({
        title: '提示',
        message: `是否卖给${name}？`
      }).then(() => {
        this.sellToSbApi(goodsId, buyer)
      }).catch(() => {
      })
    },

    sellToSbApi (goodsId, buyer) {
      const data = { buyer, goodsId }
      requestApi({
        name: 'sellToSb',
        data
      }).then(res => {
        if (res.code === 200) {
          this.getData()
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.waitBuyPage {
  position: relative;
  margin-top: 105px;
}
.nogoods {
  text-align: center;
  color: #777777;
  padding-top: 10px;
}
.goodsBox {
  position: static;
  .goodsItem {
    background: #feffff;
    padding: 10px 15px;
    width: 94%;
    margin-left: 3%;
    box-sizing: border-box;
    border-radius: 7px;
    margin-bottom: 10px;
    .goodsMsg {
      display: flex;
      height: 100px;
      .titleAndprice {
        width: 70%;
        color: #444444;
        .p1 {
          font-size: 15px;
        }
        .p2 {
          color: #e74c3c;
        }
      }
      .imgbox {
        width: 100px;
        height: 100px;
        position: relative;
        border-radius: 5px;
        overflow: hidden;
        img {
          height: 100px;
          width: 100px;
          object-fit: cover;
        }
        .number {
          position: absolute;
          bottom: 0;
          right: 0;
          color: #f5f7fa;
          height: 20px;
          background: rgba(0,0,0,.7);
          padding: 2px 8px;
          font-size: 12px;
        }
      }
    }
    .buyerbox {
      border-top: 1px solid #f5f7fa;
      margin-top: 5px;
      .buyerItem {
        height: 45px;
        display: flex;
        align-items: center;
        color: #444444;
        border-bottom: 1px solid #f5f7fa;
        img {
          height: 30px;
          width: 30px;
          border-radius: 50%;
          object-fit: cover;
        }
        .buyer {
          margin-left: 10px;
        }
        .state {
          color: #666666;
          margin-left: auto;
        }
        .btn {
          background: #ccae62;
          color: #feffff;
          outline: none;
          border: 0;
          height: 25px;
          line-height: 25px;
          border-radius: 5px;
          width: 50px;
          font-size: 13px;
          margin-left: 10px;
        }
      }
      .buyerItem:last-child {
        border-bottom: 0;
      }
    }
    .delctrl {
      position: relative;
      height: 50px;
      display: flex;
      align-items: center;
      border-top: 1px solid #f5f7fa;
      .btn {
        margin-left: auto;
        background: #e55039;
        color: #feffff;
        outline: none;
        border: 0;
        height: 32px;
        line-height: 32px;
        border-radius: 10px;
        width: 100px;
      }
    }
  }
}
</style>
