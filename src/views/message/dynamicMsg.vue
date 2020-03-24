<template>
  <div class="dynMsgPage">
    <div class="dynItem" v-for="(item, index) in dyList" :key="index">
      <div class="other">
        <div @click="viewDy(item)">{{ item.content.dymContent.content }}</div>
        <div @click="viewDy(item)"><span>{{ item.createTime | formatDate }}</span> {{ item.content.rev.username }}评论了你></div>
        <div @click="handleDel(item._id)">x</div>
      </div>
      <div>
        <div class="round" v-if="!item.isRead"></div>
        <img :src="item.content.dymContent.pics[0]" alt="">
      </div>
    </div>
    <div class="nodata" v-if="!dyList.length">
      暂无动态消息哦～
    </div>
  </div>
</template>

<script>
import requestApi from '@/request/request'
import { formatDate } from '@/common/date.js'

export default {
  data () {
    return {
      dyList: []
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

  mounted () {
    this.getData()
  },

  methods: {
    viewDy (item) {
      this.$router.push({ path: '/comments', query: { id: item.content.dymContent._id } })
      this.viewMsg(item._id)
    },

    viewMsg (id) {
      requestApi({
        name: 'viewMsgData',
        data: { id }
      }).then(res => {
        // this.getData()
      })
    },

    handleDel (id) {
      requestApi({
        name: 'delMsg',
        data: { id }
      }).then(res => {
        if (res.code === 200) {
          this.getData()
        }
      })
    },

    getData () {
      requestApi({
        name: 'getMsgData',
        data: { msgType: 1, acceptor: localStorage.getItem('userInfo') }
      }).then(res => {
        this.dyList = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dynMsgPage {
  position: relative;
  margin-top: 90px;
  .nodata {
    text-align: center;
    color: #666666;
    padding-top: 20px;
  }
  .dynItem {
    height: 90px;
    display: flex;
    // align-items: center;
    justify-content: space-around;
    background: #feffff;
    color: #444444;
    padding: 20px 20px 0px;
    margin-bottom: 1px;
    position: relative;
    img {
      height: 70px;
      margin-left: auto;
      width: 70px;
      object-fit: cover;
      border-radius: 5px;
    }
    .round {
      width: 7px;
      height: 7px;
      background: #ff7675;
      border-radius: 50%;
      position: absolute;
      right: 8px;
      top: 8px;
      overflow: hidden;
    }
    .other {
      margin-right: 10px;
      width: 75%;
      position: relative;
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
        span {
          margin-right: 8px;
          color: #aaaaaa;
        }
      }
      div:nth-child(3) {
        position: absolute;
        width: 25px;
        height: 18px;
        font-size: 12px;
        line-height: 18px;
        color: #aaaaaa;
        border-radius: 5px;
        background: #ecf0f1;
        text-align: center;
        bottom: 4px;
      }
    }
  }
}
</style>
