<template>
  <transition name="slide">
    <slot></slot>
  </transition>
</template>

<style lang="scss" scoped>
.slide-enter-active, .slide-leave-active {
  transition: all .4s;
}
.slide-enter, .slide-leave-to {
  transform: translate3d(100%,0,0);
  opacity: 0.5;
}
</style>
