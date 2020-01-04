<template>
  <div class="goodsList">
    <div class="goodContent">
      <div class="goodsItem" v-for="i in 11" :key="i">
        <img src="http://img4.imgtn.bdimg.com/it/u=504973260,2450831926&fm=11&gp=0.jpg" alt="">
        <div class="title">手机特卖很过分很过分很高</div>
        <div class="cost"><span>¥</span><span>1234</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
      flex-direction: column;
      img {
        width: 100%;
        height: 170px;
        object-fit: cover;
      }
      .title {
        color: #333333;
        font-weight: bold;
        padding: 3px 8px;
        height: 46px;
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
    }
    .goodsItem:nth-of-type(odd){
      margin-right: 2%;
    }
  }
}
</style>
