<template>
  <PageTran>
    <div class="goodsListPage">
      <div class="header">
        <img @click="$router.go(-1)" class="back" src="@/assets/back.png" alt="返回">
        <input class="searchInput" readonly @click="$router.replace('/search')" type="text" placeholder="搜素商品">
      </div>
      <div class="sort">
        <div class="sortItem" @click="change(item, index)" :class="{active: activeIndex === index}" v-for="(item, index) in sortList" :key="index">{{ item }}</div>
      </div>
      <div class="goodsBox">
        <div class="goodsItem" v-for="(item, index) in goodsList" :key="index" @click="$router.push({ path: '/goodsDetail', query: {id: item._id} })">
          <img class="goodsPic" :src="item.goodsPics[0]" alt="">
          <div class="goodsMsg">
            <div class="title">{{ item.desc }}</div>
            <div class="price"><span>¥</span><span>{{ item.price }}</span></div>
            <div class="publishUser">
              <img v-if="item.seller.avatars === ''" src="@/assets/header.png" alt="">
              <img v-else :src="item.seller.avatars" alt="发布者">
              <span>{{ item.seller.username }}</span>
            </div>
          </div>
        </div>
        <div class="nodata" v-if="!goodsList.length">
          无相关商品
        </div>
      </div>
    </div>
  </PageTran>
</template>

<script>
import PageTran from '@/components/PageTran.vue'
import requestApi from '@/request/request'

export default {
  components: { PageTran },
  data () {
    return {
      sortList: ['最新发布', '价格高到低', '价格低到高'],
      activeIndex: 0,
      goodsList: []
    }
  },

  beforeRouteEnter (to, from, next) {
    const fromRouter = from.name
    next(vm => {
      if (fromRouter === 'index') {
        vm.getOneData()
      } else {
        vm.getData()
      }
    })
  },

  activated () {
  },

  beforeRouteLeave (to, from, next) {
    this.$destroy()
    next()
  },

  methods: {
    change (item, index) {
      this.activeIndex = index
      if (item === '最新发布') {
        this.$route.query.keyword ? this.getData() : this.getOneData()
      } else if (item === '价格高到低') {
        let data = JSON.parse(JSON.stringify(this.goodsList))
        this.goodsList = data.sort((a, b) => { return b.price - a.price })
      } else if (item === '价格低到高') {
        let data = JSON.parse(JSON.stringify(this.goodsList))
        this.goodsList = data.sort((a, b) => { return a.price - b.price })
      }
    },

    getOneData () {
      const data = { city: window.city, name: this.$route.query.name }
      requestApi({
        name: 'getoodsByOneType',
        data
      }).then(res => {
        this.goodsList = res.data
      })
    },

    getData () {
      const data = { city: window.city, keyword: this.$route.query.keyword }
      requestApi({
        name: 'getGoodsListBykeyword',
        data
      }).then(res => {
        this.goodsList = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.goodsListPage {
  position: absolute;
  overflow-y: scroll;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: #f6f6f6;
  width: 100%;
  padding-bottom: 10px;
}
.goodsListPage::-webkit-scrollbar {
  width: 0px;
  display: none;
}
.header {
  position: fixed;
  width: 100%;
  z-index: 3;
  display: flex;
  height: 50px;
  align-items: center;
  background: #feffff;
  padding: 0 10px;
  .back {
    width: 23px;
  }
  .searchInput {
    width: 78%;
    margin-left: 10px;
    background: #f3f3f3;
    border-radius: 7px;
    padding: 0 10px;
    border: 0;
    height: 34px;
  }
}
.sort {
  display: flex;
  justify-content: space-around;
  height: 45px;
  align-items: center;
  margin-top: 50px;
  background: #feffff;
  position: fixed;
  z-index: 3;
  width: 100%;
  .sortItem {
    color: #bbbbbb;
    font-size: 15px;
    &.active {
      color: #444444;
    }
  }
}
.goodsBox {
  position: relative;
  margin-top: 97px;
  .nodata {
    text-align: center;
    color: #777777;
    padding-top: 10px;
  }
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
}
</style>
