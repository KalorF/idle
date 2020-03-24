<template>
  <PageTran>
    <div class="mygoodsPage">
      <Back title="商品信息" @back="$router.go(-1)" />
      <div class="goodsBox">
        <div class="goodsItem">
          <div class="goodsMsg">
            <div class="titleAndprice">
              <p class="p1">{{ goodsData.desc }}</p>
              <p class="p2"><span>¥</span><span>{{ goodsData.price }}</span></p>
            </div>
            <div class="imgbox">
              <img v-if="goodsData.goodsPics" @click="viewImgs(goodsData.goodsPics, 0)" :src="goodsData.goodsPics[0]" alt="">
              <div v-if="goodsData.goodsPics" class="number">{{ goodsData.goodsPics.length }}张</div>
            </div>
          </div>
          <div class="buyerbox">
            <div class="buyerItem" v-for="(item, index) in goodsData.buyers" :key="index">
              <img v-if="item.buyer.avatars === ''" src="@/assets/header.png" alt="">
              <img v-else :src="item.buyer.avatars" alt="">
              <div class="buyer">{{ item.buyer.username }}</div>
              <div class="state">待沟通</div>
            </div>
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
import { ImagePreview } from 'vant'

export default {
  components: { PageTran, Back },

  data () {
    return {
      goodsData: {}
    }
  },

  activated () {
    this.getData()
  },

  methods: {
    viewImgs (imgs, index) {
      ImagePreview({
        images: imgs,
        startPosition: index
      })
    },
    getData () {
      requestApi({
        name: 'viewGoodsById',
        data: { id: this.$route.query.id }
      }).then(res => {
        this.goodsData = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
 .mygoodsPage{
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
.mygoodsPage::-webkit-scrollbar {
  width: 0px;
  display: none;
}
.goodsBox {
  position: relative;
  margin-top: 46px;
  .goodsItem {
    background: #feffff;
    padding: 10px 15px;
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
      }
      .buyerItem:last-child {
        border-bottom: 0;
      }
    }
  }
}
</style>
