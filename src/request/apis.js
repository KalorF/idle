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
  },
  publishDynamic: {
    url: '/dynamic/publishDynamic',
    method: 'post'
  },
  getDynamicList: {
    url: '/dynamic/getPublish',
    method: 'get'
  },
  viewDymCom: {
    url: '/dynamic/viewDymCom',
    method: 'get'
  },
  addComment: {
    url: '/comment/addComment',
    method: 'post'
  },
  addReply: {
    url: '/reply/addReply',
    method: 'post'
  },
  viewCommentReply: {
    url: '/reply/viewCommentReply',
    method: 'get'
  },
  getUserInfo: {
    url: '/user/getUserInfo',
    method: 'post'
  },
  modifyUserInfo: {
    url: '/user/modifyUserInfo',
    method: 'post'
  },
  modifyPwd: {
    url: '/user/modifyPwd',
    method: 'post'
  }
}
