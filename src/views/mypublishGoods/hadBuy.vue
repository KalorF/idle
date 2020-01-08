<template>
  <div class="hadBuyPage">
    <div class="goodsBox">
      <div class="goodsItem" v-for="i in 7" :key="i">
        <div class="goodsMsg">
          <div class="titleAndprice">
            <p class="p1">加热发多少</p>
            <p class="p2"><span>¥</span><span>345</span></p>
          </div>
          <div class="imgbox">
            <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2978542106,579749062&fm=26&gp=0.jpg" alt="">
            <div class="number">6张</div>
          </div>
        </div>
        <div class="buyerbox">
          <div class="buyerItem">
            <div class="state">购买者</div>
            <img src="http://img2.imgtn.bdimg.com/it/u=1918146356,491392782&fm=11&gp=0.jpg" alt="">
            <div class="buyer">购买者1</div>
          </div>
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
.hadBuyPage {
  position: relative;
  margin-top: 105px;
}
.goodsBox {
  position: static;
  .goodsItem {
    background: #feffff;
    padding: 10px 15px;
    width: 94%;
    margin-left: 3%;
    box-sizing: border-box;
    border-radius: 7px;
    margin-bottom: 10px;
    .goodsMsg {
      display: flex;
      height: 100px;
      .titleAndprice {
        width: 70%;
        color: #444444;
        .p1 {
          font-size: 15px;
        }
        .p2 {
          color: #e74c3c;
        }
      }
      .imgbox {
        width: 100px;
        height: 100px;
        position: relative;
        border-radius: 5px;
        overflow: hidden;
        img {
          height: 100px;
          width: 100px;
          object-fit: cover;
        }
        .number {
          position: absolute;
          bottom: 0;
          right: 0;
          color: #f5f7fa;
          height: 20px;
          background: rgba(0,0,0,.7);
          padding: 2px 8px;
          font-size: 12px;
        }
      }
    }
    .buyerbox {
      border-top: 1px solid #f5f7fa;
      margin-top: 5px;
      .buyerItem {
        height: 45px;
        display: flex;
        align-items: center;
        color: #444444;
        border-bottom: 1px solid #f5f7fa;
        img {
          height: 30px;
          width: 30px;
          border-radius: 50%;
          object-fit: cover;
        }
        .buyer {
          margin-left: 10px;
        }
        .state {
          color: #cc8e35;
          margin-right: auto;
        }
      }
      .buyerItem:last-child {
        border-bottom: 0;
      }
    }
  }
}
</style>
