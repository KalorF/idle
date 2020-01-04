<template>
  <div class="backcmp">
    <img @click="back" class="back" src="@/assets/back.png" alt="返回">
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    back () {
      this.$emit('back')
    }
  }
}
</script>

<style lang="scss" scoped>
.backcmp {
  background: #feffff;
  height: 45px;
  text-align: center;
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #333333;
  z-index: 11;
  .back {
    width: 20px;
    position: absolute;
    left: 10px;
    height: 20px;
  }
}
</style>
