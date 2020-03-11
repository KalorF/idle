import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', name: 'index', component: Home },
  { path: '/mine', name: 'mine', component: () => import(/* webpackChunkName: "mine" */ '../views/mine/Mine') },
  { path: '/message', name: 'message', component: () => import(/* webpackChunkName: "message" */ '../views/message') },
  { path: '/dynamic', name: 'dynamic', component: () => import(/* webpackChunkName: "dynamic" */ '../views/dynamic') },
  { path: '/comments', name: 'comments', component: () => import(/* webpackChunkName: "comments" */ '../views/dynamic/comments') },
  { path: '/otherCmt', name: 'otherCmt', component: () => import(/* webpackChunkName: "otherCmt" */ '../views/dynamic/otherCmt') },
  { path: '/search', name: 'search', component: () => import(/* webpackChunkName: "search" */ '../views/search') },
  { path: '/goodsList', name: 'goodsList', component: () => import(/* webpackChunkName: "goodsList" */ '../views/goods/goodsList') },
  { path: '/goodsDetail', name: 'goodsDetail', component: () => import(/* webpackChunkName: "goodsDetail" */ '../views/goods/goodsDetail') },
  { path: '/buyGoodsMsg', name: 'buyGoodsMsg', component: () => import(/* webpackChunkName: "buyGoodsMsg" */ '../views/goods/buyGoodsMsg') },
  { path: '/mygoods', name: 'mygoods', component: () => import(/* webpackChunkName: "mygoods" */ '../views/goods/mygoods') },
  { path: '/mypublishGoods', name: 'mypublishGoods', component: () => import(/* webpackChunkName: "mypublishGoods" */ '../views/mypublishGoods') },
  { path: '/myBuyGoods', name: 'myBuyGoods', component: () => import(/* webpackChunkName: "mypublishGoods" */ '../views/myBuyGoods') },
  { path: '/myDynamic', name: 'myDynamic', component: () => import(/* webpackChunkName: "myDynamic" */ '../views/myDynamic') },
  { path: '/exchangeGoods', name: 'exchangeGoods', component: () => import(/* webpackChunkName: "exchangeGoods" */ '../views/exchangeGoods') },
  { path: '/exchange', name: 'exchange', component: () => import(/* webpackChunkName: "exchange" */ '../views/exchangeGoods/exchange') },
  { path: '/setMsg', name: 'setMsg', component: () => import(/* webpackChunkName: "setMsg" */ '../views/mine/setMsg') },
  { path: '/login', name: 'login', component: () => import(/* webpackChunkName: "login" */ '../views/loginAndregistr/login') },
  { path: '/registry', name: 'registry', component: () => import(/* webpackChunkName: "registry" */ '../views/loginAndregistr/registry') },
  { path: '/pdynamic', name: 'pdynamic', component: () => import(/* webpackChunkName: "pdynamic" */ '../views/publish/pdynamic') },
  { path: '/pgoods', name: 'pgoods', component: () => import(/* webpackChunkName: "registry" */ '../views/publish/pgoods') },
  { path: '/sort', name: 'sort', component: () => import(/* webpackChunkName: "sort" */ '../views/sort') },
  { path: '*', name: '404', component: () => import(/* webpackChunkName: "mine" */ '../views/404') }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    if (from.name) {
      next({
        name: from.name
      })
    } else {
      next('/404')
    }
  } else {
    next()
  }
})

export default router
