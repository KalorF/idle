<template>
  <div class="messagePage">
    <div class="header">消息</div>
    <div class="tab">
      <div class="tabItem" @click="change(index)" :class="{active: activeIndex === index}" v-for="(item, index) in tabList" :key="index">{{ item.text }}</div>
    </div>
    <goodsMsg v-if="activeIndex === 0" />
    <dynamicMsg v-if="activeIndex === 1" />
  </div>
</template>

<script>
import goodsMsg from './goodsMsg'
import dynamicMsg from './dynamicMsg'
export default {
  components: { goodsMsg, dynamicMsg },
  data () {
    return {
      activeIndex: 0,
      tabList: [{ type: 1, text: '闲置消息' }, { type: 2, text: '动态消息' }]
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
.messagePage {
  position: absolute;
  overflow-y: scroll;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 66px;
}
.messagePage::-webkit-scrollbar {
  width: 0px;
  display: none;
}
.header {
  height: 45px;
  color: #444444;
  line-height: 50px;
  text-align: center;
  position: fixed;
  background: #f6f6f6;
  width: 100%;
  font-size: 20px;
  z-index: 3;
  font-weight: bold;
}
.tab {
  position: fixed;
  margin-top: 44px;
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
