<template>
  <PageTran>
    <div class="myBuyGoodsPage">
      <Back title="我购买的" @back="$router.replace('/mine')" />
      <div class="tab">
        <div class="tabItem" @click="change(index, item.status)" :class="{active: activeIndex === index}" v-for="(item, index) in tabList" :key="index">{{ item.text }}</div>
      </div>
      <order :orderList="orderList" :status="status" />
      <!-- <waitCmt v-if="activeIndex === 0" :orderList="orderList" /> -->
      <!-- <waitTake v-if="activeIndex === 1" />
      <hadTake v-if="activeIndex === 2" /> -->
    </div>
  </PageTran>
</template>

<script>
import PageTran from '@/components/PageTran.vue'
import Back from '@/components/Back.vue'
import requestApi from '@/request/request'
// import waitTake from './waitTake'
// import hadTake from './hadTake'
import order from './order'
export default {
  components: { PageTran, Back, order },
  data () {
    return {
      activeIndex: 0,
      tabList: [{ status: 0, text: '待沟通' }, { status: 1, text: '待收货' }, { status: 2, text: '已收货' }, { status: -1, text: '已被购买' }],
      orderList: [],
      status: 0
    }
  },

  activated () {
    this.getData()
  },

  methods: {
    change (index, status) {
      this.getData(status)
      this.status = status
      this.activeIndex = index
    },

    getData (status = 0) {
      let data = { isReceive: status, buyer: localStorage.getItem('userInfo') }
      requestApi({
        name: 'myOrder',
        data
      }).then(res => {
        this.orderList = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.myBuyGoodsPage {
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
.myBuyGoodsPage::-webkit-scrollbar {
  width: 0px;
  display: none;
}
.tab {
  position: fixed;
  margin-top: 45px;
  border-top: 1px solid #f6f6ff;
  z-index: 3;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #feffff;
  font-size: 16px;
  .tabItem {
    color: #888888;
    &.active {
      color: #444444;
      border-bottom: 3px solid #1ED597;
    }
  }
}
</style>
