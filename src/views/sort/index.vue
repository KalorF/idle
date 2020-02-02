<template>
  <PageTran>
    <div class="sortPage">
      <Back title="商品分类" @back="$router.go(-1)" />
      <div class="sortBox">
        <div class="left">
          <div
            v-for="(i, index) in 8"
            :key="index"
            class="leftItem"
            :class="{active: selIndex === index}"
            @click="selType(index)"
          >手机{{index}}</div>
        </div>
        <div class="right">
          <div class="rightItem" v-for="i in 10" :key="i">
            <img src="http://img0.imgtn.bdimg.com/it/u=492040588,2039661122&fm=26&gp=0.jpg" alt="">
            <span>iphone</span>
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
  components: { PageTran, Back },

  data () {
    return {
      selIndex: 0
    }
  },

  methods: {
    selType (index) {
      this.selIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.sortPage {
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
.sortPage::-webkit-scrollbar {
  width: 0px;
  display: none;
}
.sortBox {
  display: flex;
  background: #feffff;
  height: 94%;
  margin-top: 46px;
}
.left {
  width: 28%;
  border-right: 1px solid #f5f7fa;
  overflow: auto;
  .leftItem {
    height: 35px;
    line-height: 35px;
    text-align: center;
    font-size: 16px;
    color: #aaaaaa;
    margin-bottom: 15px;
  }
  .leftItem.active {
    border-left: 4px solid #ccae62;
    color: #333333;
  }
}
.right {
  width: 72%;
  padding: 10px 15px;
  .rightItem {
    width: 33%;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
    margin-bottom: 10px;
    img {
      width: 60px;
      height: 60px;
      object-fit: cover;
      border-radius: 50%;
    }
    span {
      font-size: 15px;
      color: #444444;
      margin-top: 3px;
    }
  }
}
</style>
