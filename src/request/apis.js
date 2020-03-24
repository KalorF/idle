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
  },
  getSearchList: {
    url: '/goods/getSearchList',
    method: 'get'
  },
  getGoodsListBykeyword: {
    url: '/goods/getGoodsListBykeyword',
    method: 'get'
  },
  getForgoods: {
    url: '/forgoods/getForgoods',
    method: 'get'
  },
  addForgoosOrder: {
    url: '/forgoodsorder/addForgoosOrder',
    method: 'post'
  },
  viewMyDym: {
    url: '/dynamic/viewMyDym',
    method: 'get'
  },
  getoodsByOneType: {
    url: '/goods/getoodsByOneType',
    method: 'get'
  },
  givelikeTodym: {
    url: '/dynamic/givelikeTodym',
    method: 'post'
  },
  giveLike: {
    url: '/comment/giveLike',
    method: 'post'
  },
  getMsgData: {
    url: '/message/getMsgData',
    method: 'get'
  },
  viewGoodsById: {
    url: '/goods/viewGoodsById',
    method: 'get'
  },
  viewMsgData: {
    url: '/message/viewMsgData',
    method: 'post'
  },
  delMsg: {
    url: '/message/delMsg',
    method: 'post'
  },
  delGoods: {
    url: '/goods/delGoods',
    method: 'post'
  },
  getGoodsAndDy: {
    url: '/user/getGoodsAndDy',
    method: 'post'
  }
}
