<template>
  <PageTran>
    <div class="searchPage">
      <div class="searchHeader">
        <img @click="$router.go(-1)" class="back" src="@/assets/back.png" alt="返回">
        <input v-model="keyword" @input="handleInput" class="searchInput" type="text" placeholder="输入要搜索的商品">
        <span class="searchBtn" @click="search">搜索</span>
      </div>
      <div class="resultBox">
        <div class="resultItem" @click="$router.push({path: '/goodsList', query: { keyword: item.text }})" v-for="(item, index) in resultList" :key="index" v-html="item.name"></div>
      </div>
      <div class="noresult" v-if="isShowTip">没有搜索到对应的商品</div>
    </div>
  </PageTran>
</template>

<script>
import PageTran from '@/components/PageTran.vue'
import requestApi from '@/request/request'

export default {
  components: { PageTran },
  data () {
    return {
      resultList: [],
      isShowTip: false,
      keyword: '',
      timer: 0
    }
  },
  beforeRouteLeave (to, from, next) {
    to.name === 'index' && this.$destroy() && next()
    next()
  },
  methods: {
    search () {
      this.isShowTip = false
      this.getResultApi(this.keyword)
    },

    handleInput () {
      // let self = this
      if (this.keyword !== '') {
        this.debounce(() => {
          this.getResultApi(this.keyword)
        }, 500)()
      } else {
        this.resultList = []
      }
      this.isShowTip = false
    },

    debounce (func, wait) {
      var _this = this
      return function (...args) {
        if (_this.timer) clearTimeout(_this.timer)
        // console.log('77')
        _this.timer = setTimeout(() => {
          func.apply(_this, args)
        }, wait)
      }
    },

    getResultApi (keyword) {
      const data = { keyword, city: window.city }
      requestApi({
        name: 'getSearchList',
        data
      }).then(res => {
        let data = JSON.parse(JSON.stringify(res.data))
        let newdata = []
        data.forEach(item => {
          newdata.push({ name: item, text: item })
        })
        for (let i = 0; i < newdata.length; i++) {
          newdata[i].name = this.brightKeyword(newdata[i].name)
        }
        this.resultList = newdata
        if (res.data.length === 0) {
          this.isShowTip = true
          if (this.keyword === '') {
            this.isShowTip = false
          }
        }
      })
    },

    // 字体高亮
    brightKeyword (val) {
      let keyword = this.keyword
      if (val.indexOf(keyword) !== -1) {
        return val.replace(keyword, `<font color='#1ED597'>${keyword}</font>`)
      } else {
        return val
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.searchPage {
  position: absolute;
  overflow-y: scroll;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: #ffffff;
}
.searchPage::-webkit-scrollbar {
  width: 0px;
  display: none;
}
.noresult {
  text-align: center;
  color: #666666;
}
.searchHeader {
  display: flex;
  height: 50px;
  align-items: center;
  padding: 0 10px;
  .back {
    width: 23px;
  }
  .searchInput {
    width: 72%;
    margin-left: 10px;
    background: #f3f3f3;
    border-radius: 7px;
    padding: 0 10px;
    border: 0;
    height: 34px;
  }
  .searchBtn {
    margin-left: auto;
    font-size: 16px;
    color: #555555;
  }
}
.resultBox {
  margin-top: 10px;
  position: relative;
  padding: 0 15px;
  .resultItem {
    color: #666666;
    font-size: 15px;
    border-bottom: 1px solid #f7f7f7;
    width: 100%;
    height: 35px;
    line-height: 35px;
  }
}
</style>
