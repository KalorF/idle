<template>
  <div class="eatocmtbox">
    <div class="msgItem" v-for="(item, index) in cmtData" :key="index">
      <div @click="view(item)" class="content">{{ item.content.ry.content }}</div>
      <div class="rev">
        <div @click="view(item)"><span>{{ item.createTime | formatDate }}</span>{{ item.content.rev.username }}@你></div>
        <div class="del" @click="handleDel(item._id)">x</div>
      </div>
      <div class="round" v-if="!item.isRead"></div>
    </div>
    <div class="nodata" v-if="!cmtData.length">
      暂无@消息哦～
    </div>
  </div>
</template>

<script>
import requestApi from '@/request/request'
import { formatDate } from '@/common/date.js'

export default {
  data () {
    return {
      cmtData: []
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
    view (item) {
      this.$router.push({ path: '/otherCmt', query: { id: item.content.ry.comment } })
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
        data: { msgType: 3, acceptor: localStorage.getItem('userInfo') }
      }).then(res => {
        this.cmtData = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.eatocmtbox {
  position: relative;
  margin-top: 92px;
  .nodata {
    text-align: center;
    color: #666666;
    padding-top: 20px;
  }
  .msgItem {
    background: #feffff;
    font-size: 13px;
    color: #444444;
    padding: 5px 3px 3px 20px;
    position: relative;
    margin-bottom: 1px;
    .content {
      margin-bottom: 5px;
      font-size: 14px;
    }
    .rev {
      font-size: 12px;
      color:#34ace0;
      margin-bottom: 3px;
      display: flex;
      span {
        color: #aaaaaa;
        margin-right: 8px;
      }
      .del {
        width: 25px;
        height: 18px;
        font-size: 12px;
        line-height: 18px;
        color: #aaaaaa;
        border-radius: 5px;
        background: #ecf0f1;
        text-align: center;
        margin-left: auto;
        margin-right: 5px;
      }
    }
    .round {
      width: 7px;
      height: 7px;
      background: #ff7675;
      border-radius: 50%;
      position: absolute;
      right: 8px;
      top: 5px;
    }
  }
}
</style>
