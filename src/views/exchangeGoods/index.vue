<template>
  <PageTran>
    <div class="exchangeGoodsPage">
      <Back title="兑换商品" @back="$router.go(-1)" />
      <div class="coinBox">
        <svg class="icon iconSize" aria-hidden="true">
        <use xlink:href="#icon-zhongjinshu"></use>
        </svg>
        <span>拥有闲置币：</span>
        <span>{{ spareMoney }}</span>
      </div>
      <div class="exchangeBox">
        <div class="item" v-for="(item, index) in goodsList" :key="index">
          <img :src="item.pics[0]" alt="">
          <div class="msgAndCtrl">
            <div class="title">{{ item.title }}</div>
            <div class="cost">{{ item.cost }}闲置币</div>
            <button class="btn" @click="handleExchange(item)">兑换</button>
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

export default {
  components: { PageTran, Back },

  data () {
    return {
      goodsList: [],
      spareMoney: 0
    }
  },

  activated () {
    this.getData()
    this.getUserInfo()
  },

  methods: {
    getData () {
      requestApi({
        name: 'getForgoods',
        data: { status: '1' }
      }).then(res => {
        this.goodsList = res.data
      })
    },

    handleExchange (item) {
      if (this.spareMoney < item.cost) {
        this.$toast('闲置币不足，无法兑换')
      } else {
        this.$router.push({ path: '/exchange', query: { id: item._id, cost: item.cost } })
      }
    },

    getUserInfo () {
      const data = { userId: localStorage.getItem('userInfo') }
      requestApi({
        name: 'getUserInfo',
        data
      }).then(res => {
        this.spareMoney = res.data.spareMoney
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.exchangeGoodsPage {
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
.exchangeGoodsPage::-webkit-scrollbar {
  width: 0px;
  display: none;
}
.coinBox {
  position: relative;
  margin-top: 45px;
  height: 60px;
  background: #feffff;
  border-top: 1px solid #f6f6f6;
  display: flex;
  align-items: center;
  padding: 0px 15px;
  // border-radius: 0 0 20% 20%;
  .iconSize {
    font-size: 30px;
  }
  span:nth-child(2) {
    margin-left: 5px;
  }
  span:nth-child(3) {
    color:#cc8e35;
    font-size: 16px;
  }
}
.exchangeBox {
  margin-top: 8px;
  .item {
    width: 94%;
    margin-left: 3%;
    box-sizing: border-box;
    background: #feffff;
    height: 130px;
    border-radius: 7px;
    display: flex;
    padding: 15px 15px;
    margin-bottom: 10px;
    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 7px;
    }
    .msgAndCtrl {
      width: 70%;
      padding-left: 10px;
      color: #555555;
      position: relative;
      .title {
        font-size: 15px;
      }
      .cost {
        margin-top: 25px;
        color: #ccae62;
        font-size: 13px;
      }
      .btn {
        position: absolute;
        right: 0;
        bottom: 0px;
        background: #cc8e35;
        color: #feffff;
        outline: none;
        border: 0;
        height: 25px;
        line-height: 25px;
        border-radius: 10px;
        width: 80px;
      }
    }
  }
}
</style>
