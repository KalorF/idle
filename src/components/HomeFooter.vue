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
    <router-link tag="div" class="footerItem" :to="{path: '/moments'}" replace>
      <div class="itemLink">
        <svg class="icon iconSize" aria-hidden="true">
          <use xlink:href="#icon-liulan"></use>
        </svg>
        <div>圈子</div>
      </div>
    </router-link>
    <router-link tag="div" class="footerItem" :to="{path: '/publish'}" replace>
      <div class="itemLink">
        <svg class="icon iconSize" aria-hidden="true">
          <use xlink:href="#icon-liulan"></use>
        </svg>
        <div>发布</div>
      </div>
    </router-link>
    <router-link tag="div" class="footerItem" :to="{path: '/information'}" replace>
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
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  background: #ffffff;
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
        font-weight: bold;
      }
    }
  }
}
</style>
