<template>
  <PageTran>
    <div class="otherCmtPage">
      <Back title="评论内容" @back="$router.go(-1)" />
      <!-- 内容 -->
      <div class="dynamicBox">
        <div class="dynamicItem">
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
        </div>
      </div>
      <!-- 用户评论 -->
      <div class="userComments">
        <div class="cmtHeader">
          评论 · 123
        </div>
        <div class="cmtBox" v-for="i in 5" :key="i">
          <div class="headerBox">
            <img class="userPic" src="http://img2.imgtn.bdimg.com/it/u=1918146356,491392782&fm=11&gp=0.jpg" alt="">
            <div class="other">
              <span>用户2</span>
              <div>01-03 12:00</div>
            </div>
            <div class="givelike">
              <span>342</span>
              <svg class="icon iconSize" aria-hidden="true">
                <use xlink:href="#icon-dianzan"></use>
              </svg>
            </div>
          </div>
          <div class="content">
            发放第三方的是非得失
          </div>
          <div class="viewCmt" @click="viewOther">
            188条回复>
          </div>
        </div>
      </div>
      <!-- 评论 -->
      <div class="toCmt">
        <van-field
          style="margin-top: 4px;"
          v-model="message"
          rows="1"
          autosize
          type="textarea"
          placeholder="请输入你的评论"
        />
        <div class="pub">发送</div>
      </div>
    </div>
  </PageTran>
</template>

<script>
import Back from '@/components/Back.vue'
import PageTran from '@/components/PageTran.vue'

export default {
  components: { Back, PageTran },
  data () {
    return {
      message: ''
    }
  },
  methods: {
    viewOther () {
      this.$router.push({ name: 'otherCmt', query: { time: new Date().getTime() } })
    }
  }
}
</script>

<style lang="scss" scoped>
.otherCmtPage {
  position: fixed;
  overflow-y: scroll;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: #f6f6f6;
  width: 100%;
  padding-bottom: 55px;
}
.otherCmtPage::-webkit-scrollbar {
  width: 0px;
  display: none;
}
.dynamicBox {
  position: relative;
  margin-top: 50px;
  .dynamicItem {
    position: relative;
    padding: 10px 15px 10px;
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
      font-size: 15px;
    }
  }
}
.userComments {
  background: #feffff;
  position: relative;
  .cmtHeader {
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    font-size: 17px;
    border-bottom: 1px solid #f5f7fa;
  }
  .cmtBox {
    border-bottom: 1px solid #f5f7fa;
    padding: 10px;
    .headerBox {
      height: 45px;
      display: flex;
      align-items: center;
      .userPic {
        height: 26px;
        width: 26px;
        border-radius: 50%;
      }
      .other {
        margin-left: 10px;
        color: #333333;
        span {
          font-size: 12px;
        }
        div {
          font-size: 10px;
          color: #aaaaaa;
        }
      }
      .givelike {
        margin-left: auto;
        span {
          font-size: 13px;
          color: #555555;
          margin-right: 5px;
        }
      }
    }
    .content {
      font-size: 13px;
      color: #444444;
      margin-left: 36px;
    }
    .viewCmt {
      font-size: 12px;
      margin-top: 10px;
      color: #444444;
      margin-left: 37px;
      color:#34ace0;
    }
  }
}
.toCmt {
  position: fixed;
  background: #feffff;
  min-height: 50px;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #f5f7fa;
  display: flex;
  .pub {
    width: 10%;
    height: 50px;
    line-height: 50px;
    padding-right: 10px;
    color: #555555;
  }
}
</style>
