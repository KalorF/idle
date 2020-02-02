import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Field, Picker, Popup } from 'vant'
Vue.use(Button).use(Field).use(Picker).use(Popup)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
