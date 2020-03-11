import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Field, Picker, Popup, Toast } from 'vant'
Vue.use(Button).use(Field).use(Picker).use(Popup).use(Toast)
Vue.config.productionTip = false
Vue.prototype.$toast = Toast

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
