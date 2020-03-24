<template>
  <PageTran>
    <div class="otherCmtPage">
      <Back title="回复内容" @back="$router.go(-1)" />
      <!-- 内容 -->
      <div class="dynamicBox">
        <div class="dynamicItem">
          <div class="author">
            <img @click="$router.push({path: '/userMsg', query: {id: replyData.reviewer._id}})" class="headerPic" v-if="replyData.reviewer && replyData.reviewer.avatars === ''" src="@/assets/header.png" alt="">
            <img @click="$router.push({path: '/userMsg', query: {id: replyData.reviewer._id}})" class="headerPic" v-if="replyData.reviewer && replyData.reviewer.avatars !== ''" :src="replyData.reviewer.avatars" alt="">
            <div class="otherMsg">
              <span v-if="replyData.reviewer">{{ replyData.reviewer.username }}</span>
              <div>{{ replyData.createTime | formatDate }}</div>
            </div>
          </div>
          <div class="content">
            {{ replyData.content }}
          </div>
        </div>
      </div>
      <!-- 用户评论 -->
      <div class="userComments">
        <div class="cmtHeader" v-if="replyData.replies">
          回复 · {{ replyData.replies.length }}
        </div>
        <div class="cmtBox" v-for="(item, index) in replyData.replies" :key="index">
          <div class="headerBox">
            <img @click="$router.push({path: '/userMsg', query: {id: item.replyer._id}})" class="userPic" v-if="item.replyer.avatars === ''" src="@/assets/header.png" alt="">
            <img @click="$router.push({path: '/userMsg', query: {id: item.replyer._id}})" v-else class="userPic" :src="item.replyer.avatars" alt="">
            <div class="other" @click="myreply(item)">
              <span>{{ item.replyer.username }}</span>
              <div>{{ item.createTime | formatDate}}</div>
            </div>
            <!-- <div class="givelike">
              <span>342</span>
              <svg class="icon iconSize" aria-hidden="true">
                <use xlink:href="#icon-dianzan"></use>
              </svg>
            </div> -->
          </div>
          <div class="content" @click="myreply(item)">
            {{ item.content }}
          </div>
          <div class="viewCmt" v-if="item.eotoes">
            <span class="sp">{{ replyData.reviewer.username }}<span>@{{ item.replyer.username }}</span>：</span>
            <span>{{ item.eotoes.content }}</span>
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
          :placeholder="placeholder"
          ref="replyinput"
          @blur="blur"
        />
        <div class="pub" @click="pubReply">发送</div>
      </div>
    </div>
  </PageTran>
</template>

<script>
import Back from '@/components/Back.vue'
import PageTran from '@/components/PageTran.vue'
import requestApi from '@/request/request'
import { formatDate } from '@/common/date.js'

export default {
  components: { Back, PageTran },

  data () {
    return {
      message: '',
      replyData: {},
      placeholder: '请输入你的回复',
      authorReply: false,
      replyToSb: '',
      replyId: ''
    }
  },

  filters: {
    formatDate (time) {
      var date = new Date(parseInt(time))
      return formatDate(date, 'MM-dd hh:mm')
    }
  },

  activated () {
    this.getData()
  },

  methods: {
    blur () {
      this.placeholder = '请输入你的回复'
    },

    myreply (item) {
      if (this.replyData.reviewer._id === localStorage.getItem('userInfo')) {
        this.placeholder = '回复' + item.replyer.username
        this.authorReply = true
        this.replyToSb = item.replyer._id
        this.replyId = item._id
        this.$refs.replyinput.focus()
      }
    },

    pubReply () {
      if (this.message === '') {
        this.$toast('请输入你的评论')
      } else {
        this.replyApi()
      }
    },

    replyApi () {
      if (localStorage.getItem('userInfo') === this.replyData.reviewer._id && !this.authorReply) {
        this.$toast('无法回复自己哦')
        return
      }
      let data = { comment: this.$route.query.id, replyer: localStorage.getItem('userInfo'), replyToSb: this.replyData.reviewer._id, content: this.message }
      if (this.authorReply) {
        data.replyToSb = this.replyToSb
        data.replyId = this.replyId
        data.eotoes = { content: this.message, authorId: localStorage.getItem('userInfo') }
      }
      requestApi({
        name: 'addReply',
        data
      }).then(res => {
        if (res.code === 200) {
          this.$refs.replyinput.blur()
          this.message = ''
          this.authorReply = false
          this.$toast('回复成功')
          this.getData()
        }
      })
    },

    getData () {
      requestApi({
        name: 'viewCommentReply',
        data: { commentId: this.$route.query.id }
      }).then(res => {
        this.replyData = res.data
      })
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
    font-size: 14px;
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
      margin-left: 42px;
      .sp {
        border-left: 2px solid #2ed573;
        padding-left: 5px;
        span {
          color: #34ace0;
        }
      }
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
