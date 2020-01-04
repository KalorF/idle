import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', name: 'index', component: Home },
  { path: '/mine', name: 'mine', component: () => import(/* webpackChunkName: "mine" */ '../views/mine/Mine') },
  { path: '/dynamic', name: 'dynamic', component: () => import(/* webpackChunkName: "dynamic" */ '../views/dynamic') },
  { path: '/comments', name: 'comments', component: () => import(/* webpackChunkName: "comments" */ '../views/dynamic/comments') },
  { path: '/otherCmt', name: 'otherCmt', component: () => import(/* webpackChunkName: "otherCmt" */ '../views/dynamic/otherCmt') },
  { path: '/search', name: 'search', component: () => import(/* webpackChunkName: "search" */ '../views/search') },
  { path: '/goodsList', name: 'goodsList', component: () => import(/* webpackChunkName: "goodsList" */ '../views/goods/goodsList') },
  { path: '*', name: '404', component: () => import(/* webpackChunkName: "mine" */ '../views/404') }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // console.log('beforeEach', to, from)
  if (to.matched.length === 0) {
    if (from.name) {
      next({
        name: from.name
      })
    } else {
      next('/404')
      // errorReport('imgLoadError')
    }
  } else {
    next() // 如果匹配到正确跳转
  }
})

export default router
