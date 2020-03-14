<template>
  <div class="hadBuyPage">
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
          <div class="buyerItem">
            <div class="state">购买者</div>
            <img v-if="item.buyer.avatars === ''" src="@/assets/header.png" alt="">
            <img v-else :src="item.buyer.avatars" alt="">
            <div class="buyer">{{ item.buyer.username }}</div>
          </div>
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
import { ImagePreview } from 'vant'

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
      let data = { seller: localStorage.getItem('userInfo'), status: 1 }
      requestApi({
        name: 'viewMygoods',
        data
      }).then(res => {
        this.goodsList = res.data
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.hadBuyPage {
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
          color: #cc8e35;
          margin-right: auto;
        }
      }
      .buyerItem:last-child {
        border-bottom: 0;
      }
    }
  }
}
</style>
