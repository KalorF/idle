<template>
  <PageTran>
    <div class="myBuyGoodsPage">
      <Back title="我购买的" @back="$router.go(-1)" />
      <div class="tab">
        <div class="tabItem" @click="change(index)" :class="{active: activeIndex === index}" v-for="(item, index) in tabList" :key="index">{{ item.text }}</div>
      </div>
      <waitTake v-if="activeIndex === 0" />
      <hadTake v-if="activeIndex === 1" />
    </div>
  </PageTran>
</template>

<script>
import PageTran from '@/components/PageTran.vue'
import Back from '@/components/Back.vue'
import waitTake from './waitTake'
import hadTake from './hadTake'
export default {
  components: { PageTran, Back, waitTake, hadTake },
  data () {
    return {
      activeIndex: 0,
      tabList: [{ type: 1, text: '待收货' }, { type: 2, text: '已收货' }]
    }
  },
  methods: {
    change (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.myBuyGoodsPage {
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
.myBuyGoodsPage::-webkit-scrollbar {
  width: 0px;
  display: none;
}
.tab {
  position: fixed;
  margin-top: 45px;
  border-top: 1px solid #f6f6ff;
  z-index: 3;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #feffff;
  font-size: 16px;
  .tabItem {
    color: #888888;
    &.active {
      color: #444444;
      border-bottom: 3px solid #1ED597;
    }
  }
}
</style>
