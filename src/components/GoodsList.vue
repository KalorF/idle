<template>
  <div class="goodsList">
    <div class="goodContent">
      <div class="goodsItem" @click="$router.push({path: '/goodsDetail', query: { id: item._id }})" v-for="(item, index) in goodsList" :key="index">
        <img :src="item.goodsPics[0]" alt="">
        <div class="title">{{ item.desc }}</div>
        <div class="cost"><span>¥</span><span>{{ item.price }}</span></div>
        <div class="seller">
          <img v-if="item.seller.avatars !== ''" :src="item.seller.avatars" alt="">
          <img v-else src="@/assets/header.png" alt="">
          <span>{{ item.seller.username }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import requestApi from '@/request/request'

export default {
  data () {
    return {
      goodsList: []
    }
  },
  activated () {
    this.getGoodsList()
  },
  methods: {
    getGoodsList () {
      requestApi({
        name: 'getHomeGoodsList',
        data: { city: window.returnCitySN.cname.slice(-3) }
      }).then(res => {
        this.goodsList = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.goodsList {
  width: 94%;
  margin-left: 3%;
  position: relative;
  .goodContent {
    display: flex;
    flex-wrap: wrap;
    .goodsItem {
      height: 270px;
      width: 49%;
      border-radius: 8px;
      overflow: hidden;
      background: #ffffff;
      margin-bottom: 10px;
      display: flex;
      position: relative;
      flex-direction: column;
      img {
        width: 100%;
        height: 170px;
        object-fit: cover;
      }
      .title {
        color: #444444;
        font-weight: bold;
        padding: 3px 8px;
        max-height: 40px;
        min-height: 23px;
        overflow: hidden;
      }
      .cost {
        color: #e74c3c;
        padding-left: 8px;
        span:nth-child(1) {
          font-size: 12px;
          margin-right: 3px;
        }
        span:nth-child(2) {
          font-size: 20px;
        }
      }
      .seller {
        position: absolute;
        bottom: 3px;
        display: flex;
        align-items: center;
        padding-left: 7px;
        img {
          width: 20px;
          height: 20px;
        }
        span {
          margin-left: 5px;
          color: #777777;
        }
      }
    }
    .goodsItem:nth-of-type(odd){
      margin-right: 2%;
    }
  }
}
</style>
