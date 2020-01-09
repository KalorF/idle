<template>
  <PageTran>
    <div class="exchangeGoodsPage">
      <Back title="兑换商品" @back="$router.go(-1)" />
      <div class="coinBox">
        <svg class="icon iconSize" aria-hidden="true">
        <use xlink:href="#icon-zhongjinshu"></use>
        </svg>
        <span>拥有闲置币：</span>
        <span>1231</span>
      </div>
      <div class="exchangeBox">
        <div class="item" v-for="i in 10" :key="i">
          <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2978542106,579749062&fm=26&gp=0.jpg" alt="">
          <div class="msgAndCtrl">
            <div class="title">牛子的是非得失看到</div>
            <div class="cost">345闲置币</div>
            <button class="btn" @click="$router.push('/exchange')">兑换</button>
          </div>
        </div>
      </div>
    </div>
  </PageTran>
</template>

<script>
import PageTran from '@/components/PageTran.vue'
import Back from '@/components/Back.vue'
export default {
  components: { PageTran, Back }
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
