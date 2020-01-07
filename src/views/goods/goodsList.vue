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
        <div class="goodsItem" v-for="i in 10" :key="i" @click="$router.push('/goodsDetail')">
          <img class="goodsPic" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2978542106,579749062&fm=26&gp=0.jpg" alt="">
          <div class="goodsMsg">
            <div class="title">牛子上衣</div>
            <div class="price"><span>¥</span><span>123</span></div>
            <div class="publishUser">
              <img src="http://img2.imgtn.bdimg.com/it/u=1918146356,491392782&fm=11&gp=0.jpg" alt="发布者">
              <span>发布者1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageTran>
</template>

<script>
import PageTran from '@/components/PageTran.vue'
export default {
  components: { PageTran },
  data () {
    return {
      sortList: ['最新发布', '价格高到低', '价格低到高'],
      activeIndex: 0
    }
  },
  methods: {
    change (item, index) {
      this.activeIndex = index
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
