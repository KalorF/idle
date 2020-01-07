<template>
  <PageTran>
    <div class="mygoodsPage">
      <Back title="商品信息" @back="$router.go(-1)" />
      <div class="goodsBox">
        <div class="goodsItem">
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
            <div class="buyerItem" v-for="i in 2" :key="i">
              <img src="http://img2.imgtn.bdimg.com/it/u=1918146356,491392782&fm=11&gp=0.jpg" alt="">
              <div class="buyer">购买者1</div>
              <div class="state">待沟通</div>
            </div>
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
 .mygoodsPage{
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
.mygoodsPage::-webkit-scrollbar {
  width: 0px;
  display: none;
}
.goodsBox {
  position: relative;
  margin-top: 46px;
  .goodsItem {
    background: #feffff;
    padding: 10px 15px;
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
          color: #666666;
          margin-left: auto;
        }
      }
      .buyerItem:last-child {
        border-bottom: 0;
      }
    }
  }
}
</style>
