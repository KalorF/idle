<template>
  <div class="goodsMsgbox">
    <div class="msgItem" v-for="i in 10" :key="i" @click="$router.push('/mygoods')">
      <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2978542106,579749062&fm=26&gp=0.jpg" alt="">
      <div class="other">
        <div>衣服官方的风格的v小程序</div>
        <div>购买者1想要</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.goodsMsgbox {
  position: relative;
  margin-top: 90px;
  .msgItem {
    height: 90px;
    display: flex;
    align-items: center;
    background: #feffff;
    color: #444444;
    padding: 0 20px;
    margin-bottom: 1px;
    img {
      height: 70px;
      width: 70px;
      object-fit: cover;
      border-radius: 5px;
    }
    .other {
      margin-left: 10px;
      div:nth-child(2) {
        margin-top: 10px;
        color: #22a6b3;
      }
    }
  }
}
</style>
