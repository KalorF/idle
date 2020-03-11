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
    url: 'https://sm.ms/api/v2/upload',
    method: 'post'
  }
}
