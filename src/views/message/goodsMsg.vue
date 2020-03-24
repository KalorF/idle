<template>
  <div class="goodsMsgbox">
    <div class="msgItem" v-for="(item, index) in msgList" :key="index">
      <img @click="viewgoods(item)" :src="item.content.goods.goodsPics[0]" alt="">
      <div @click="viewgoods(item)" class="other">
        <div>{{ item.content.goods.desc }}</div>
        <div>{{ item.content.buyer.username }}想要</div>
      </div>
      <div class="ctrl">
        <div class="round" v-if="!item.isRead"></div>
        <div class="time">{{ item.createTime | formatDate }}</div>
        <div class="del" @click="handleDel(item._id)">X</div>
      </div>
    </div>
    <div class="nodata" v-if="!msgList.length">
      暂无闲置消息哦～
    </div>
  </div>
</template>

<script>
import requestApi from '@/request/request'
import { formatDate } from '@/common/date.js'

export default {
  data () {
    return {
      msgList: []
    }
  },

  filters: {
    formatDate (time) {
      var date = new Date(parseInt(time))
      return formatDate(date, 'MM-dd hh:mm')
    }
  },

  mounted () {
    this.getData()
  },

  activated () {
    this.getData()
  },

  methods: {
    viewgoods (item) {
      this.$router.push({ path: '/mygoods', query: { id: item.content.goods._id } })
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
        data: { acceptor: localStorage.getItem('userInfo'), msgType: 0 }
      }).then(res => {
        this.msgList = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.goodsMsgbox {
  position: relative;
  margin-top: 94px;
  .nodata {
    text-align: center;
    color: #666666;
    padding-top: 20px;
  }
  .msgItem {
    height: 90px;
    display: flex;
    align-items: center;
    background: #feffff;
    color: #444444;
    padding: 0 5px 0 20px;
    margin-bottom: 1px;
    img {
      height: 70px;
      width: 70px;
      object-fit: cover;
      border-radius: 5px;
    }
    .other {
      margin-left: 10px;
      font-size: 13px;
      width: 53%;
      div:nth-child(2) {
        margin-top: 5px;
        color: #22a6b3;
      }
    }
    .ctrl {
      font-size: 11px;
      position: relative;
      color: #aaaaaa;
      margin-left: auto;
      height: 100%;
      .round {
        width: 7px;
        height: 7px;
        background: #ff7675;
        border-radius: 50%;
        position: absolute;
        right: 0;
        top: 5px;
      }
      .time {
        position: relative;
        margin-top: 30px;
      }
      .del {
        position: absolute;
        bottom: 5px;
        right: 0;
        width: 30%;
        background: #ecf0f1;
        text-align: center;
        border-radius: 3px;
      }
    }
  }
}
</style>
