<template>
  <div id="app">
    <keep-alive>
      <router-view :key="$route.fullPath"/>
    </keep-alive>
    <HomeFooter/>
  </div>
</template>

<script>
import HomeFooter from '@/components/HomeFooter'
export default {
  components: { HomeFooter }
}
</script>

<style lang="scss">
body {
  font-size: 14px;
  background: #f6f6f8;
  -webkit-user-select:none;
  -moz-user-select:none;
}
#app {
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
#app::-webkit-scrollbar {
  width: 0px;
  display: none;
}
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
