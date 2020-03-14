<template>
  <div class="dynamicPage">
    <!-- 头部 -->
    <div class="header">
      <span>动态</span>
      <div class="publish" @click="$router.push('/pdynamic')">
        <svg class="icon iconSize" aria-hidden="true">
          <use xlink:href="#icon-shuru"></use>
        </svg>
        <span>发布</span>
      </div>
    </div>
    <!-- 动态内容 -->
    <div class="dynamicBox">
      <div class="dynamicItem" v-for="(item, index) in dynamicList" :key="index">
        <div class="author">
          <img v-if="item.publisher.avatars === ''" class="headerPic" src="@/assets/header.png" alt="">
          <img v-else class="headerPic" :src="item.publisher.avatars" alt="">
          <div class="otherMsg">
            <span>{{ item.publisher.username }}</span>
            <div>{{ item.creteTime | formatDate }}</div>
          </div>
        </div>
        <div class="content">
          {{ item.content }}
        </div>
        <div class="imgContent">
          <div
            v-for="(ite, index) in item.pics"
            :key="index" class="imgItem"
            :style="{backgroundImage: 'url(' + ite + ')'}"
            @click="viewImgs(item.pics, index)"
          ></div>
        </div>
        <div class="ctrl">
          <div class="comments" @click="$router.push({ path: '/comments', query: {id : item._id} })">
            <svg class="icon iconSize" aria-hidden="true">
              <use xlink:href="#icon-duihua"></use>
            </svg>
            <span>{{ item.commentNub }}</span>
          </div>
          <div class="giveLike" @click="$router.push({ path: '/comments', query: {id : item._id} })">
            <svg class="icon iconSize" aria-hidden="true">
              <use xlink:href="#icon-dianzan"></use>
            </svg>
            <span>{{ item.likeNum }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import requestApi from '@/request/request'
import { formatDate } from '@/common/date.js'
import { ImagePreview } from 'vant'

export default {
  data () {
    return {
      dynamicList: []
    }
  },

  activated () {
    this.getData()
  },

  filters: {
    formatDate (time) {
      var date = new Date(parseInt(time))
      return formatDate(date, 'MM-dd hh:mm')
    }
  },

  methods: {
    viewImgs (imgs, index) {
      ImagePreview({
        images: imgs,
        startPosition: index
      })
    },

    getData () {
      requestApi({
        name: 'getDynamicList',
        data: { city: window.returnCitySN.cname.slice(-3) }
      }).then(res => {
        if (res.code === 200) {
          this.dynamicList = res.data
        }
      })
    }
  }
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
