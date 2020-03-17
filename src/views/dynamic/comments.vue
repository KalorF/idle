<template>
  <PageTran>
    <div class="commentsPage">
      <Back title="评论内容" @back="$router.go(-1)" />
      <!-- 内容 -->
      <div class="dynamicBox">
        <div class="dynamicItem">
          <div class="author">
            <img class="headerPic" v-if="cmtData.publisher && cmtData.publisher.avatars === ''" src="@/assets/header.png" alt="">
            <img class="headerPic" v-if="cmtData.publisher && cmtData.publisher.avatars !== ''" :src="cmtData.publisher.avatars" alt="">
            <div class="otherMsg">
              <span v-if="cmtData.publisher">{{ cmtData.publisher.username }}</span>
              <div>{{ cmtData.creteTime | formatDate }}</div>
            </div>
            <div class="givelike">
              <span>{{ cmtData.likeNum }}</span>
              <svg class="icon iconSize" aria-hidden="true">
                <use xlink:href="#icon-dianzan"></use>
              </svg>
            </div>
          </div>
          <div class="content">
            {{ cmtData.content }}
          </div>
          <div class="imgContent">
            <div
              v-for="(item, index) in cmtData.pics"
              :key="index" class="imgItem"
              :style="{backgroundImage: 'url(' + item + ')'}"
              @click="viewImgs(cmtData.pics, index)"
            ></div>
          </div>
        </div>
      </div>
      <!-- 用户评论 -->
      <div class="userComments">
        <div class="cmtHeader" v-if="cmtData.comments && cmtData.comments.length">
          评论 · {{ cmtData.comments.length }}
        </div>
        <div v-else class="cmtHeader">
          留下你的精彩评论吧
        </div>
        <div class="cmtBox" v-for="(item, index) in (cmtData.comments)" :key="index">
          <div class="headerBox">
            <img class="userPic" v-if="item.reviewer.avatars === ''" src="@/assets/header.png" alt="">
            <img v-else class="userPic" src="" alt="">
            <div class="other" @click="toReplay(item)">
              <span>{{ item.reviewer._id === cmtData.publisher._id ? item.reviewer.username + '（作者）' :  item.reviewer.username }}</span>
              <div>{{ item.createTime | formatDate }}</div>
            </div>
            <div class="givelike">
              <span>{{ item.linkeNum }}</span>
              <svg class="icon iconSize" aria-hidden="true">
                <use xlink:href="#icon-dianzan"></use>
              </svg>
            </div>
          </div>
          <div class="content" @click="toReplay(item)">
            {{ item.content }}
          </div>
          <div v-if="item.eotoes" class="viewCmt" @click="$router.push({ path: '/otherCmt', query: {id: item._id} })">
            {{ item.eotoes }}条回复>
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
          ref="contentInput"
          @blur="blur"
        />
        <div class="pub" @click="pubCmt">发送</div>
      </div>
    </div>
  </PageTran>
</template>

<script>
import Back from '@/components/Back.vue'
import PageTran from '@/components/PageTran.vue'
import requestApi from '@/request/request'
import { formatDate } from '@/common/date.js'
import { ImagePreview } from 'vant'

export default {
  components: { Back, PageTran },
  data () {
    return {
      cmtData: {},
      message: '',
      placeholder: '请输入你的评论',
      isReply: false,
      comment: '',
      replyToSb: ''
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
    viewImgs (imgs, index) {
      ImagePreview({
        images: imgs,
        startPosition: index
      })
    },

    // 发表评论
    pubCmt () {
      if (this.message === '') {
        this.$toast('输入要评论的内容')
      } else {
        this.isReply ? this.replyApi() : this.pubCmtApi()
      }
    },

    pubCmtApi () {
      let data = { content: this.message, dynamic: this.cmtData._id, reviewer: localStorage.getItem('userInfo') }
      requestApi({
        name: 'addComment',
        data
      }).then(res => {
        if (res.code === 200) {
          this.$toast('评论成功')
          this.message = ''
          this.isReply = false
          this.getData()
        }
      })
    },

    blur () {
      this.placeholder = '请输入你的评论'
    },

    // 回复某人
    toReplay (item) {
      if (item.reviewer._id === localStorage.getItem('userInfo')) {
        this.$toast('无法回复自己哦')
      } else {
        this.$refs.contentInput.focus()
        this.placeholder = '回复' + item.reviewer.username
        this.comment = item._id
        this.replyToSb = item.reviewer._id
        this.isReply = true
      }
    },

    replyApi () {
      let data = { comment: this.comment, replyer: localStorage.getItem('userInfo'), replyToSb: this.replyToSb, content: this.message }
      requestApi({
        name: 'addReply',
        data
      }).then(res => {
        if (res.code === 200) {
          this.$toast('评论成功')
          this.$refs.contentInput.blur()
          this.replyer = false
          this.message = ''
          this.getData()
        }
      })
    },

    getData () {
      requestApi({
        name: 'viewDymCom',
        data: { dynamicId: this.$route.query.id }
      }).then(res => {
        this.cmtData = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.commentsPage {
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
.commentsPage::-webkit-scrollbar {
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
      color: #555555;
      font-size: 15px;
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
