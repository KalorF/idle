<template>
  <PageTran>
    <div class="setMsgPage">
      <Back title="个人设置" @back="$router.go(-1)" />
      <div class="msgBox">
        <div class="hederImgItem">
          <div>头像</div>
          <img class="pic" src="http://img2.imgtn.bdimg.com/it/u=1918146356,491392782&fm=11&gp=0.jpg" alt="">
          <img class="forward" src="@/assets/forward.png" alt="">
        </div>
        <div class="item">
          <div>呢称</div>
          <div class="text">我就是我</div>
          <img class="forward" src="@/assets/forward.png" alt="">
        </div>
        <div class="item">
          <div>手机号码</div>
          <div class="text">15678902345</div>
          <img class="forward" src="@/assets/forward.png" alt="">
        </div>
        <div class="item">
          <div>微信</div>
          <div class="text">wechat2131</div>
          <img class="forward" src="@/assets/forward.png" alt="">
        </div>
        <div class="item">
          <div>修改密码</div>
          <div class="text"></div>
          <img class="forward" src="@/assets/forward.png" alt="">
        </div>
      </div>
      <div class="ctrl">
        <button class="btn">退出登陆</button>
      </div>
    </div>
  </PageTran>
</template>

<script>
import PageTran from '@/components/PageTran.vue'
import Back from '@/components/Back.vue'
export default {
  components: { PageTran, Back }
}
</script>

<style lang="scss" scoped>
.setMsgPage {
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
.setMsgPage::-webkit-scrollbar {
  width: 0px;
  display: none;
}
.msgBox {
  position: relative;
  margin-top: 60px;
  background: #feffff;
  width: 94%;
  margin-left: 3%;
  box-sizing: border-box;
  color: #555555;
  padding: 5px 5px 20px 10px;
  border-radius: 7px;
  .hederImgItem {
    display: flex;
    height: 80px;
    align-items: center;
    border-bottom: 1px solid #f5f7fa;
    padding-bottom: 5px;
    .pic {
      margin-left: auto;
      width: 70px;
      height: 70px;
      border-radius: 7px;
      object-fit: cover;
    }
    .forward {
      width: 20px;
      margin-left: 5px;
      height: 20px;
    }
  }
  .item {
    display: flex;
    height: 40px;
    align-items: center;
    border-bottom: 1px solid #f5f7fa;
    color: #555555;
    .text {
      margin-left: auto;
      color: #666666;
    }
    .forward {
      width: 20px;
      margin-left: 5px;
      height: 20px;
    }
  }
}
.ctrl {
  margin-top: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  .btn {
    background: #05c46b;
    color: #feffff;
    outline: none;
    border: 0;
    height: 42px;
    line-height: 42px;
    font-size: 16px;
    border-radius: 10px;
    width: 90%;
  }
}
</style>
