<template>
  <div class="loginPage">
    <div class="logo">乐 闲</div>
    <div class="welcome">
      <div>欢 迎 登 陆</div>
      <div>WELCOME TO LEXIAN</div>
    </div>
    <div class="loginBox">
      <div class="loginItem">
        <svg class="icon logIcon" aria-hidden="true">
          <use xlink:href="#icon-yidongduanicon-"></use>
        </svg>
        <input type="tel" placeholder="请输入手机号码">
      </div>
      <div class="loginItem">
        <svg class="icon logIcon" aria-hidden="true">
          <use xlink:href="#icon-mima"></use>
        </svg>
        <input type="tel" placeholder="请输入账号密码">
      </div>
      <div class="registry">
        <div class="re" @click="$router.push('/registry')">注册账号></div>
      </div>
    </div>
    <button class="lgbtn">登陆</button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.loginPage {
  position: absolute;
  overflow-y: scroll;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: #f6f6f6;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.loginPage::-webkit-scrollbar {
  width: 0px;
  display: none;
}
.logo {
  margin-top: 50px;
  color: #1ED597;
  font-size: 35px;
  font-weight: bold;
}
.welcome {
  margin-top: 10px;
  color: #555555;
  font-size: 12px;
  text-align: center;
}
.loginBox {
  margin-top: 20px;
  background: #feffff;
  border-radius: 5px;
  width: 90%;
  box-sizing: border-box;
  padding: 10px 20px 15px;
  .loginItem {
    height: 40px;
    border: 1px solid #ccae62;
    border-radius: 30px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    margin-top: 20px;
    .logIcon {
      color: #aaaaaa;
      font-size: 25px;
    }
    input {
      width: 90%;
      border: none;
      color: #666666;
    }
  }
  .registry {
    display: flex;
    margin-top: 10px;
    .re {
      margin-left: auto;
      color: #555555;
    }
  }
}
.lgbtn {
  margin-top: 15px;
  background: #ccae62;
  color: #feffff;
  outline: none;
  border: 0;
  height: 45px;
  line-height: 45px;
  font-size: 18px;
  border-radius: 12px;
  box-sizing: border-box;
  width: 90%;
}
</style>
