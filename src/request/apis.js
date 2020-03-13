export default {
  //  数据上报
  signup: {
    url: '/user/signup',
    method: 'post',
    model: 'normal'
  },
  login: {
    url: '/user/login',
    method: 'post',
    model: 'normal'
  },
  getHomeGoodsList: {
    url: '/goods/goodsList',
    method: 'get'
  },
  uploadImg: {
    url: '/user/uploadPics',
    method: 'post'
  },
  typeList: {
    url: '/type/typeList',
    method: 'get'
  },
  publishGoods: {
    url: '/goods/publishGoods',
    method: 'post'
  },
  goodsDetail: {
    url: '/goods/goodsDetail',
    method: 'get'
  },
  createOrder: {
    url: '/order/createOrder',
    method: 'post'
  },
  myOrder: {
    url: '/order/myOrder',
    method: 'post'
  },
  confirmGoods: {
    url: '/order/confirmGoods',
    method: 'post'
  },
  viewMygoods: {
    url: '/goods/viewMygoods',
    method: 'get'
  },
  sellToSb: {
    url: '/goods/sellToSb',
    method: 'post'
  }
}
