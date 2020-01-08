<template>
  <div class="minePage">
    <!-- 个人信息 -->
    <div class="mineMsg">
      <img src="http://img2.imgtn.bdimg.com/it/u=1918146356,491392782&fm=11&gp=0.jpg" alt="">
      <div class="msg">
        <div class="name">我就是我</div>
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
      <div class="set">
        <svg class="icon iconSize" aria-hidden="true">
          <use xlink:href="#icon-shezhi"></use>
        </svg>
      </div>
    </div>

    <div class="coin">
      <svg class="icon iconSize" aria-hidden="true">
        <use xlink:href="#icon-zhongjinshu"></use>
      </svg>
      <span>闲置币：</span>
      <span>1231</span>
    </div>
    <!-- 操作 -->
    <div class="ctrl">
      <div class="title">闲置买卖</div>
      <div class="ctrlContent">
        <div class="item" @click="$router.push('/mypublishGoods')">
          <svg class="icon iconSize" aria-hidden="true">
            <use xlink:href="#icon-dingdan"></use>
          </svg>
          <div>我发布的</div>
        </div>
        <div class="item" @click="$router.push('/myBuyGoods')">
          <svg class="icon iconSize" aria-hidden="true">
            <use xlink:href="#icon-goumai"></use>
          </svg>
          <div>我购买的</div>
        </div>
      </div>
    </div>
    <div class="ctrl">
      <div class="title">乐在其中</div>
      <div class="ctrlContent">
        <div class="item" @click="$router.push('/myDynamic')">
          <svg class="icon iconSize" aria-hidden="true">
            <use xlink:href="#icon-duihua"></use>
          </svg>
          <div>我的动态</div>
        </div>
        <div class="item">
          <svg class="icon iconSize" aria-hidden="true">
            <use xlink:href="#icon-liwu"></use>
          </svg>
          <div>兑换商品</div>
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
.minePage {
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
.mineMsg {
  display: flex;
  background: #feffff;
  height: 90px;
  position: fixed;
  width: 100%;
  z-index: 3;
  padding: 10px 15px;
  img {
    height: 70px;
    width: 70px;
    margin-top: 10px;
    object-fit: cover;
    border-radius: 10px;
  }
  .msg {
    margin-top: 10px;
    margin-left: 10px;
    color: #444444;
  }
  .set {
    margin-left: auto;
    font-size: 25px;
    margin-right: 25px;
  }
}
.ctrl {
  position: relative;
  margin-top: 20px;
  background: #feffff;
  width: 94%;
  margin-left: 3%;
  border-radius: 7px;
  padding: 10px 0;
  color: #444444;
  .title {
    margin-left: 15px;
    font-size: 17px;
  }
  .ctrlContent {
    margin-top: 10px;
    display: flex;
    .item {
      width: 33%;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      .iconSize {
        font-size: 40px;
      }
      div {
        margin-top: 4px;
        color: #555555;
      }
    }
  }
}
.coin {
  position: relative;
  margin-top: 125px;
  background: #feffff;
  border-radius: 7px;
  width: 94%;
  margin-left: 3%;
  height: 40px;
  display: flex;
  align-items: center;
  color: #444444;
  .iconSize {
    font-size: 25px;
    margin-left: 14px;
  }
  span:nth-child(2) {
    margin-left: 5px;
  }
  span:nth-child(3) {
    color:#cc8e35;
    font-size: 16px;
  }
}
</style>
