import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'name',
    component: Home
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import(/* webpackChunkName: "mine" */ '../views/mine/Mine')
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "mine" */ '../views/404')
  }
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
