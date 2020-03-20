<template>
  <PageTran>
    <div class="myDynamicPage">
      <Back title="我的动态" @back="$router.go(-1)" />
      <div class="dynamicBox">
        <div class="dynamicItem" v-for="(item, index) in dymsData" :key="index">
          <div class="author">
            <div class="otherMsg">
              <div>{{ item.creteTime | formatDate }}</div>
            </div>
          </div>
          <div class="content">
            {{ item.content }}
          </div>
          <div class="imgContent">
            <div v-for="(ite, index) in item.pics" :key="index" class="imgItem" :style="{backgroundImage: 'url(' + ite + ')'}"></div>
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

export default {
  components: { PageTran, Back },

  data () {
    return {
      dymsData: []
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
    getData () {
      requestApi({
        name: 'viewMyDym',
        data: { userId: localStorage.getItem('userInfo') }
      }).then(res => {
        this.dymsData = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.myDynamicPage {
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
.myDynamicPage::-webkit-scrollbar {
  width: 0px;
  display: none;
}
.dynamicBox {
  position: relative;
  margin-top: 50px;
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
