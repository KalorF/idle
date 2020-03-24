<template>
  <PageTran>
    <div class="userPage">
      <Back title="用户信息" @back="$router.go(-1)" />
      <!-- 信息 -->
      <div class="mineMsg">
        <img v-if="userData.user && userData.user.avatars === ''" src="@/assets/header.png" alt="">
        <img v-if="userData.user && userData.user.avatars !== ''" :src="userData.user.avatars" alt="">
        <div class="msg">
          <div v-if="userData.user" class="name">{{ userData.user.username }}</div>
          <div class="phone" v-if="userData.user">
            <svg class="icon iconSize" aria-hidden="true">
              <use xlink:href="#icon-dianhua"></use>
            </svg>
            手机：{{ userData.user.phone }}
          </div>
          <div class="wechat" v-if="userData.user">
            <svg class="icon iconSize" aria-hidden="true">
              <use xlink:href="#icon-weixin"></use>
            </svg>
            微信：{{ userData.user.wechat }}
          </div>
        </div>
      </div>
      <!-- 选项卡 -->
      <div class="tab">
        <div class="tabItem" @click="change(index, item.status)" :class="{active: activeIndex === index}" v-for="(item, index) in tabList" :key="index">{{ item.text }}</div>
      </div>
      <!-- 商品列表 -->
      <div class="goodsContent" v-if="activeIndex === 0">
        <div class="nodata" v-if="userData.goods && !userData.goods.length">
          用户暂未发布闲置品哦～
        </div>
        <div class="goodsItem" v-for="(item, index) in userData.goods" :key="index">
          <div class="goodsMsg">
            <div class="titleAndprice" @click="$router.push({ path: '/goodsDetail', query: {id: item._id} })">
              <p class="p1">{{ item.desc }}</p>
              <p class="p2"><span>¥</span><span>{{ item.price }}</span></p>
            </div>
            <div class="imgbox">
              <img @click="viewImgs(item.goodsPics, 0)" :src="item.goodsPics[0]" alt="">
              <div class="number">{{ item.goodsPics.length }}张</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 动态列表 -->
      <div class="dyContent" v-if="activeIndex === 1">
        <div class="nodata" v-if="userData.dyms && !userData.dyms.length">
          用户暂未发布动态哦～
        </div>
        <div class="dynamicItem" v-for="(item, index) in userData.dyms" :key="index">
          <div class="author">
            <div class="otherMsg">
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
            <div class="comments" @click="$router.push({ path: '/comments', query: { id: item._id } })">
              <svg class="icon iconSize" aria-hidden="true">
                <use xlink:href="#icon-duihua"></use>
              </svg>
              <span>{{ item.commentNub }}</span>
            </div>
            <div class="giveLike" @click="$router.push({ path: '/comments', query: { id: item._id } })">
              <svg class="icon iconSize" aria-hidden="true">
                <use xlink:href="#icon-dianzan"></use>
              </svg>
              <span>{{ item.likeNum }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageTran>
</template>

<script>
import PageTran from '@/components/PageTran.vue'
import Back from '@/components/Back.vue'
import requestApi from '@/request/request'
import { formatDate } from '@/common/date.js'
import { ImagePreview } from 'vant'

export default {
  components: { PageTran, Back },
  data () {
    return {
      activeIndex: 0,
      userData: {},
      tabList: [{ status: 0, text: '他的闲置' }, { status: 1, text: '他的动态' }]
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
    change (index) {
      this.activeIndex = index
    },
    viewImgs (imgs, index) {
      ImagePreview({
        images: imgs,
        startPosition: index
      })
    },
    getData () {
      requestApi({
        name: 'getGoodsAndDy',
        data: { id: this.$route.query.id }
      }).then(res => {
        this.userData = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.userPage {
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
.userPage::-webkit-scrollbar {
  width: 0px;
  display: none;
}
.nodata {
  text-align: center;
  padding-top: 10px;
  color: #666666;
}
.mineMsg {
  position: fixed;
  margin-top: 45px;
  display: flex;
  background: #feffff;
  height: 90px;
  width: 100%;
  z-index: 3;
  padding: 10px 15px;
  img {
    height: 70px;
    width: 70px;
    margin-top: 10px;
    object-fit: cover;
    border-radius: 10px;
  }
  .msg {
    margin-top: 10px;
    margin-left: 10px;
    color: #444444;
  }
}
.tab {
  position: fixed;
  top: 145px;
  border-top: 1px solid #f6f6ff;
  z-index: 3;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #feffff;
  font-size: 16px;
  .tabItem {
    color: #888888;
    &.active {
      color: #444444;
      border-bottom: 3px solid #1ED597;
    }
  }
}
.goodsContent {
  position: relative;
  top: 202px;
  .goodsItem {
    background: #feffff;
    padding: 10px 15px;
    width: 94%;
    margin-left: 3%;
    box-sizing: border-box;
    border-radius: 7px;
    margin-bottom: 5px;
    .goodsMsg {
      display: flex;
      height: 100px;
      .titleAndprice {
        width: 70%;
        color: #444444;
        .p1 {
          font-size: 15px;
        }
        .p2 {
          color: #e74c3c;
        }
      }
      .imgbox {
        width: 100px;
        height: 100px;
        position: relative;
        border-radius: 5px;
        overflow: hidden;
        img {
          height: 100px;
          width: 100px;
          object-fit: cover;
        }
        .number {
          position: absolute;
          bottom: 0;
          right: 0;
          color: #f5f7fa;
          height: 20px;
          background: rgba(0,0,0,.7);
          padding: 2px 8px;
          font-size: 12px;
        }
      }
    }
  }
}
.dyContent {
  position: relative;
  top: 202px;
  .dynamicItem {
    position: relative;
    padding: 10px 15px 6px;
    margin-bottom: 10px;
    background: #feffff;
    border-radius: 7px;
    width: 94%;
    margin-left: 3%;
    box-sizing: border-box;
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
          color: #555555;
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
        width: 100px;
        height: 100px;
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
