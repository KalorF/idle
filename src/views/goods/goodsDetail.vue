<template>
  <PageTran>
    <div class="goodsDetailPage">
      <Back title="商品详情" @back="$router.go(-1)" />
      <div class="detailContent">
        <!-- 发布者信息 -->
        <div class="puberMsg">
          <img src="http://img2.imgtn.bdimg.com/it/u=1918146356,491392782&fm=11&gp=0.jpg">
          <div class="other">
            <span>发布者2</span>
            <div>2020-01-05 13:22</div>
          </div>
        </div>
        <!-- 商品信息 -->
        <div class="goodsMsg">
          <div class="price"><span>¥</span><span>345</span></div>
          <div class="describe">发挥撒卢卡申科了哪里呢</div>
          <div class="picBox">
            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3464651440,3067509266&fm=26&gp=0.jpg" alt="">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3726195294,2128069772&fm=26&gp=0.jpg" alt="">
            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1063282716,963145649&fm=26&gp=0.jpg" alt="">
            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1396304386,248920309&fm=26&gp=0.jpg" alt="">
          </div>
        </div>
      </div>
      <!-- 底部按钮 -->
      <div class="footerCtrl">
        <div class="price">价格：<span>¥345</span></div>
        <button class="btn" @click="$router.push('/buyGoodsMsg')">我想要</button>
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
