<template>
  <PageTran>
    <div class="sortPage">
      <Back title="商品分类" @back="$router.go(-1)" />
      <div class="sortBox">
        <div class="left">
          <div
            v-for="(value, key, i) in typeList"
            :key="i"
            class="leftItem"
            :class="{active: selIndex === i}"
            @click="selType(i, key)"
          >{{ key }}</div>
        </div>
        <div class="right">
          <div class="rightItem"
            v-for="(item, index) in typeList[activeKey]"
            :key="index"
            @click="$router.push({ path: '/goodslist', query: { keyword: item.name } })"
          >
            <img :src="item.pic" alt="">
            <span>{{item.name}}</span>
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

export default {
  components: { PageTran, Back },

  data () {
    return {
      selIndex: 0,
      activeKey: '',
      typeList: {}
    }
  },

  activated () {
    this.getTypeList()
  },

  methods: {
    selType (index, key) {
      this.selIndex = index
      this.activeKey = key
    },

    async getTypeList () {
      const { data } = await requestApi({ name: 'typeList' })
      let newdata = {}
      data.forEach(item => {
        if (item.children) {
          newdata[item.name] = []
          item.children.forEach(ite => {
            newdata[item.name].push(ite)
          })
        } else {
          newdata[item.name] = []
        }
      })
      this.typeList = newdata
      this.activeKey = Object.keys(this.typeList)[0]
    }
  }
}
</script>

<style lang="scss" scoped>
.sortPage {
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
.sortPage::-webkit-scrollbar {
  width: 0px;
  display: none;
}
.sortBox {
  display: flex;
  background: #feffff;
  height: 94%;
  margin-top: 46px;
}
.left {
  width: 28%;
  border-right: 1px solid #f5f7fa;
  overflow: auto;
  .leftItem {
    height: 35px;
    line-height: 35px;
    text-align: center;
    font-size: 16px;
    color: #aaaaaa;
    margin-bottom: 12px;
  }
  .leftItem.active {
    border-left: 4px solid #ccae62;
    color: #333333;
  }
}
.right {
  width: 72%;
  padding: 10px 15px;
  .rightItem {
    width: 33%;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
    margin-bottom: 10px;
    img {
      width: 60px;
      height: 60px;
      object-fit: cover;
      border-radius: 50%;
    }
    span {
      font-size: 15px;
      color: #444444;
      margin-top: 5px;
    }
  }
}
</style>
