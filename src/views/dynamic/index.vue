<template>
  <div class="dynamicPage">
    <!-- 头部 -->
    <div class="header">
      <span>动态</span>
      <div class="publish">
        <svg class="icon iconSize" aria-hidden="true">
          <use xlink:href="#icon-shuru"></use>
        </svg>
        <span>发布</span>
      </div>
    </div>
    <!-- 动态内容 -->
    <div class="dynamicBox">
      <div class="dynamicItem" v-for="i in 10" :key="i">
        <div class="author">
          <img class="headerPic" src="http://img2.imgtn.bdimg.com/it/u=1918146356,491392782&fm=11&gp=0.jpg" alt="">
          <div class="otherMsg">
            <span>作者1</span>
            <div>01-03 12:00</div>
          </div>
        </div>
        <div class="content">
          南方的是非得失你v呈现出小女人离开你是看vsee是愤怒的说是你的女生短发女生的康师傅
        </div>
        <div class="imgContent">
          <div v-for="i in 5" :key="i" class="imgItem" :style="{backgroundImage: 'url(' + 'http://img0.imgtn.bdimg.com/it/u=492040588,2039661122&fm=26&gp=0.jpg' + ')'}"></div>
        </div>
        <div class="ctrl">
          <div class="comments" @click="$router.push('/comments')">
            <svg class="icon iconSize" aria-hidden="true">
              <use xlink:href="#icon-duihua"></use>
            </svg>
            <span>356</span>
          </div>
          <div class="giveLike">
            <svg class="icon iconSize" aria-hidden="true">
              <use xlink:href="#icon-dianzan"></use>
            </svg>
            <span>7098</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.dynamicPage {
  padding-bottom: 66px;
  position: absolute;
  overflow-y: scroll;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.dynamicPage::-webkit-scrollbar {
  width: 0px;
  display: none;
}
.header {
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 10px;
  position: fixed;
  width: 100%;
  z-index: 3;
  background: #f6f6f6;
  span {
    font-size: 20px;
    color: #333333;
    font-weight: bold;
  }
  .publish {
    margin-left: auto;
    border-radius: 15px;
    background: #ffffff;
    padding: 5px 10px;
    margin-right: 20px;
    span {
      font-size: 15px;
      font-weight: normal;
      margin-left: 3px;
    }
  }
}
.dynamicBox {
  position: relative;
  margin-top: 50px;
  .dynamicItem {
    position: relative;
    padding: 10px 15px 6px;
    margin-bottom: 6px;
    background: #feffff;
    .author {
      padding-bottom: 10px;
      display: flex;
      align-items: center;
      height: 35px;
      .headerPic {
        height: 32px;
        width: 32px;
        border-radius: 50%;
      }
      .otherMsg {
        margin-left: 10px;
        color: #555555;
        span {
          font-size: 15px;
        }
        div {
          font-size: 12px;
          color: #aaaaaa;
        }
      }
    }
    .content {
      color: #555555;
    }
    .imgContent {
      display: flex;
      flex-wrap: wrap;
      margin-top: 10px;
      .imgItem {
        width: 110px;
        height: 110px;
        background-size: cover;
        background-position: center center;
        margin-bottom: 4px;
        margin-right: 5px;
      }
    }
    .ctrl {
      display: flex;
      margin-top: 5px;
      border-top: 1px solid #f5f5fa;
      padding: 5px 0;
      .comments {
        margin-left: auto;
        color: #777777;
        span {
          margin-left: 4px;
        }
      }
      .giveLike {
        margin-left: 10px;
        color: #777777;
        span {
          margin-left: 4px;
        }
      }
    }
  }
}
</style>
