<template>
  <div class="dynMsgPage">
    <div class="dynItem" v-for="i in 10" :key="i">
      <div class="other">
        <div>衣服官方的风格的v小程序范德萨发生的范德萨范德萨发的是非得失发地方的身份古井贡酒环境发生的纠纷大家送福利倒计时了</div>
        <div>作者2回复了你></div>
      </div>
      <img src="http://img0.imgtn.bdimg.com/it/u=492040588,2039661122&fm=26&gp=0.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.dynMsgPage {
  position: relative;
  margin-top: 90px;
  .dynItem {
    height: 90px;
    display: flex;
    // align-items: center;
    justify-content: space-around;
    background: #feffff;
    color: #444444;
    padding: 20px 20px 0px;
    margin-bottom: 1px;
    img {
      height: 70px;
      margin-left: auto;
      width: 70px;
      object-fit: cover;
      border-radius: 5px;
    }
    .other {
      margin-right: 10px;
      width: 75%;
      div:nth-child(1) {
        overflow: hidden;
        height: 40px;
        text-overflow: -o-ellipsis-lastline;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      div:nth-child(2) {
        margin-top: 5px;
        font-size: 12px;
        color:#34ace0;
      }
    }
  }
}
</style>
