<template>
  <div class="footer">
    <router-link tag="div" class="footerItem" :to="{path: '/index'}" replace>
      <div class="itemLink">
        <svg class="icon iconSize" aria-hidden="true">
          <use xlink:href="#icon-shouye"></use>
        </svg>
        <div>首页</div>
      </div>
    </router-link>
    <router-link tag="div" class="footerItem" :to="{path: '/dynamic'}" replace>
      <div class="itemLink">
        <svg class="icon iconSize" aria-hidden="true">
          <use xlink:href="#icon-liulan"></use>
        </svg>
        <div>动态</div>
      </div>
    </router-link>
    <div class="footerItem" @click="showPublish = !showPublish">
      <div class="itemLink">
        <svg class="icon centerIcon" aria-hidden="true">
          <use xlink:href="#icon-qitake"></use>
        </svg>
        <div>发布</div>
      </div>
    </div>
    <router-link tag="div" class="footerItem" :to="{path: '/message'}" replace>
      <div class="itemLink">
        <svg class="icon iconSize" aria-hidden="true">
          <use xlink:href="#icon-xiaoxi"></use>
        </svg>
        <div>消息</div>
      </div>
    </router-link>
    <router-link tag="div" class="footerItem" :to="{path: '/mine'}" replace>
      <div class="itemLink">
        <svg class="icon iconSize" aria-hidden="true">
          <use xlink:href="#icon-wode"></use>
        </svg>
        <div>我的</div>
      </div>
    </router-link>

    <!-- 发布弹窗 -->
    <transition name="hide">
    <div class="pubDialog" v-if="showPublish">
      <svg class="icon closeIcon" aria-hidden="true" @click="showPublish = false">
        <use xlink:href="#icon-guanbi"></use>
      </svg>
      <div class="pubCtrl">
        <div class="btn" @click="$router.push('/pgoods'), showPublish = false">
          <svg class="icon size" aria-hidden="true">
            <use xlink:href="#icon-xiangji"></use>
          </svg>
          <span>发布闲置</span>
        </div>
        <div class="btn" @click="$router.push('/pdynamic'), showPublish = false">
          <svg class="icon size" aria-hidden="true">
            <use xlink:href="#icon-shuru"></use>
          </svg>
          <span>发布动态</span>
        </div>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showPublish: false
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  // background: #FEFEFE;
  background: rgba($color: #FEFEFE, $alpha: 0.98);
  height: 65px;
  width: 100%;
  // border-top-left-radius: 20px;
  // border-top-right-radius: 20px;
  display: flex;
  justify-content: space-around;
  .footerItem {
    text-align: center;
    .iconSize {
      margin-top: 8px;
      font-size: 27px;
      transition: all .2s;
    }
    div {
      font-size: 13px;
      color: #333333;
      transition: all .1s;
      // font-weight: bold;
    }
    .centerIcon {
      font-size: 36px;
      margin-top: 1;
    }
    &.router-link-active {
      .itemLink {
        color: #1FD8A0;
      }
      .iconSize {
        margin-top: 4px;
        font-size: 32px;
      }
      div {
        font-size: 15px;
        color: #1FD8A0;
        // font-weight: bold;
      }
    }
  }
}
.pubDialog {
  position: absolute;
  height: 120px;
  bottom: 64px;
  width: 100%;
  z-index: -1;
  background: rgba($color: #FEFEFE, $alpha: 0.99);
  .closeIcon {
    font-size: 25px;
    position: absolute;
    right: 10px;
    top: 8px;
  }
  .pubCtrl {
    position: relative;
    margin-top: 48px;
    display: flex;
    justify-content: space-around;
    .btn {
      width: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 45px;
      background: rgba($color: #f5f6fa, $alpha: 0.9);
      color: #555555;
      border-radius: 7px;
      // border: 1px solid #1FD8A0;
      span {
        margin-left: 5px;
      }
      .size {
        font-size: 20px;
      }
    }
  }
}
.hide-enter-active, .hide-leave-active {
  transition: all .3s;
}
.hide-enter, .hide-leave-to {
  transform: translate3d(0, 100%, 0);
  opacity: 0;
}
</style>
