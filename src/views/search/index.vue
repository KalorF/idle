<template>
  <PageTran>
    <div class="searchPage">
      <div class="searchHeader">
        <img @click="$router.go(-1)" class="back" src="@/assets/back.png" alt="返回">
        <input v-model="keyword" class="searchInput" type="text" placeholder="输入要搜索的商品">
        <span class="searchBtn" @click="search">搜索</span>
      </div>
      <div class="resultBox">
        <div class="resultItem" @click="$router.push('/goodsList')" v-for="(item, index) in resultList" :key="index" v-html="item.name"></div>
      </div>
      <h2 v-if="isShowTip">没有搜索到匹配结果</h2>
    </div>
  </PageTran>
</template>

<script>
import PageTran from '@/components/PageTran.vue'
export default {
  components: { PageTran },
  data () {
    return {
      resultList: [],
      isShowTip: false,
      keyword: ''
    }
  },
  beforeRouteLeave (to, from, next) {
    to.name === 'index' && this.$destroy() && next()
    next()
  },
  methods: {
    search () {
      this.isShowTip = false
      this.resultList = [{ name: '衣服1' }, { name: '衣服2' }, { name: '裤子' }]
      this.resultList.map((item) => {
        item.name = this.brightKeyword(item.name)
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
