<template>
  <PageTran>
    <div class="goodsDetailPage">
      <Back title="商品详情" @back="$router.go(-1)" />
      <div class="detailContent">
        <!-- 发布者信息 -->
        <div class="puberMsg">
          <img v-if="goodsData.seller && goodsData.seller.avatars !== ''" :src="goodsData.seller.avatars" alt="">
          <img v-if="goodsData.seller && goodsData.seller.avatars === ''" src="@/assets/header.png">
          <div class="other">
            <span v-if="goodsData.seller">{{ goodsData.seller.username }}</span>
            <div>发布时间：{{ goodsData.createTime | formatDate }}</div>
          </div>
        </div>
        <!-- 商品信息 -->
        <div class="goodsMsg">
          <div class="price"><span>¥</span><span>{{ goodsData.price }}</span></div>
          <div class="describe">{{ goodsData.desc }}</div>
          <div class="picBox">
            <img v-for="(item, index) in goodsData.goodsPics" :key="index" :src="item" alt="">
          </div>
        </div>
      </div>
      <!-- 底部按钮 -->
      <div class="footerCtrl">
        <div class="price">价格：<span>¥{{ goodsData.price }}</span></div>
        <button v-if="goodsData.seller && goodsData.seller._id === mine" class="btn">我发布的</button>
        <button v-else class="btn" @click="tobuy">我想要</button>
      </div>
    </div>
  </PageTran>
</template>

<script>
import PageTran from '@/components/PageTran.vue'
import Back from '@/components/Back.vue'
import requestApi from '@/request/request'
import { formatDate } from '@/common/date.js'

export default {
  components: { PageTran, Back },

  data () {
    return {
      goodsData: {},
      mine: localStorage.getItem('userInfo')
    }
  },

  activated () {
    this.getData()
  },

  filters: {
    formatDate (time) {
      var date = new Date(parseInt(time))
      return formatDate(date, 'MM-dd hh:mm')
    }
  },

  methods: {
    tobuy () {
      let data = { goodsId: this.goodsData._id, buyerId: localStorage.getItem('userInfo') }
      requestApi({
        name: 'createOrder',
        data
      }).then(res => {
        if (res.code === 204) {
          this.$toast('你已购买过此商品，无需重新购买')
        } else {
          this.$router.push({ name: 'buyGoodsMsg', params: { data: this.goodsData } })
        }
      })
    },

    // 获取数据
    getData () {
      const { id } = this.$route.query
      const data = { id }
      requestApi({
        name: 'goodsDetail',
        data
      }).then(res => {
        this.goodsData = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.goodsDetailPage {
  position: absolute;
  overflow-y: scroll;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: #f6f6f6;
  width: 100%;
  padding-bottom: 66px;
}
.goodsDetailPage::-webkit-scrollbar {
  width: 0px;
  display: none;
}
.detailContent {
  position: relative;
  margin-top: 45px;
  background: #feffff;
  padding: 13px;
  .puberMsg {
    height: 42px;
    display: flex;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      object-fit: cover;
    }
    .other {
      margin-left: 15px;
      span {
        font-size: 15px;
        color: #555555;
      }
      div {
        font-size: 12px;
        color: #aaaaaa;
      }
    }
  }
  .goodsMsg {
    position: relative;
    margin-top: 13px;
    .price {
      color: #e74c3c;
      font-weight: bold;
      span:nth-child(1) {
        font-size: 12px;
      }
      span:nth-child(2) {
        font-size: 16px;
      }
    }
    .describe {
      color: #444444;
      font-size: 18px;
      margin-top: 5px;
    }
    .picBox {
      width: 100%;
      display: flex;
      overflow: hidden;
      flex-direction: column;
      padding-top: 10px;
      img {
        margin-bottom: 10px;
      }
    }
  }
}
.footerCtrl {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: #feffff;
  display: flex;
  padding: 0 13px;
  align-items: center;
  .price {
    color: #444444;
    span {
      color: #e74c3c;
      font-size: 16px;
    }
  }
  .btn {
    margin-left: auto;
    margin-right: 30px;
    background: #2ed573;
    color: #feffff;
    outline: none;
    border: 0;
    height: 34px;
    line-height: 34px;
    border-radius: 10px;
    width: 80px;
  }
}
</style>
