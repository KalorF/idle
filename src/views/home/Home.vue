<template>
  <div class="homePage">
    <HomeHeader />
    <!-- 一级选项 -->
    <div class="selBar">
      <div class="barItem" @click="$router.push('/goodsList')">
        <img src="@/assets/phone.png">
        <div>手机</div>
      </div>
      <div class="barItem">
        <img src="@/assets/cmp.png">
        <div>电脑</div>
      </div>
      <div class="barItem">
        <img src="@/assets/book.png">
        <div>图书</div>
      </div>
      <div class="barItem">
        <img src="@/assets/clothes.png">
        <div>服装</div>
      </div>
      <div class="barItem" @click="$router.push('/sort')">
        <img src="@/assets/type.png">
        <div>分类</div>
      </div>
    </div>
    <!-- 二级选项 -->
    <div class="secondBar">
      <div class="one"></div>
      <div class="two"></div>
    </div>
    <!-- 商品列表 -->
    <GoodsList class="homeGoods" />
  </div>
</template>

<script>
import HomeHeader from './HomeHeader'
import GoodsList from '@/components/GoodsList'
export default {
  components: { HomeHeader, GoodsList }
}
</script>

<style lang="scss" scoped>
.homePage {
  padding-bottom: 66px;
  position: absolute;
  overflow-y: scroll;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.homePage::-webkit-scrollbar {
  width: 0px;
  display: none;
}
.selBar {
  height: 80px;
  // background: #ffffff;
  position: relative;
  top: 88px;
  display: flex;
  width: 94%;
  margin-left: 3%;
  justify-content: space-around;
  .barItem {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
      width: 30px;
      height: 30px;
    }
    div {
      margin-top: 2px;
      color: #666666;
    }
  }
}
.secondBar {
  margin-top: 88px;
  position: relative;
  height: 70px;
  display: flex;
  width: 94%;
  margin-left: 3%;
  border-radius: 10px;
  overflow: hidden;
  .one {
    height: 100%;
    width: 50%;
    background: #feffff;
  }
  .two {
    height: 100%;
    width: 50%;
    background: #feffff;
  }
}
.homeGoods {
  margin-top: 13px;
}
</style>
