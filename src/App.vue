<template>
  <div id="app">
    <router-view/>
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
  background: #f5f5f5;
}
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
