<template>
  <div class="hadTakePage">
    <div class="goodsBox" v-for="i in 7" :key="i">
      <div class="goodsItem">
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
      <div class="contact">
        <div class="tip">--- 用以下方式与买家取得联系 ---</div>
        <div class="way">
          <div class="phone">
            <svg class="icon iconSize" aria-hidden="true">
              <use xlink:href="#icon-dianhua"></use>
            </svg>
            手机：15687678687
          </div>
          <div class="wechat">
            <svg class="icon iconSize" aria-hidden="true">
              <use xlink:href="#icon-weixin"></use>
            </svg>
            微信：wechat4232dsa
          </div>
        </div>
        <div class="ctrl2">
          <div>状态：已收货</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.hadTakePage {
  position: relative;
  margin-top: 110px;
}
.goodsBox {
  position: relative;
  width: 94%;
  margin-left: 3%;
  border-radius: 7px;
  overflow: hidden;
  box-sizing: border-box;
  margin-bottom: 10px;
  .goodsItem {
    height: 100px;
    background: #feffff;
    padding: 8px 10px;
    display: flex;
    margin-bottom: 1px;
    .goodsPic {
      width: 80px;
      height: 80px;
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
  .contact {
    position: relative;
    background: #feffff;
    padding-top: 10px;
    .tip {
      text-align: center;
      color: #777777;
    }
    .way {
      display: flex;
      margin-top: 10px;
      justify-content: space-around;
      flex-wrap: wrap;
      color: #555555;
      border-bottom: 1px solid #f5f7fa;
      padding-bottom: 10px;
    }
    .ctrl2 {
      display: flex;
      height: 50px;
      align-items: center;
      div {
        color: #555555;
        padding-left: 10px;
      }
    }
  }
}
</style>
