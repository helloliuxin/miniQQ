import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintConfig from './mint-config'
import 'amfe-flexible'
import axios from 'axios'
import VueAxios from "vue-axios";
import * as types from './store/mutation-types'

Vue.use(VueAxios, axios)
Vue.use(MintConfig)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//全局前置守卫
router.beforeEach((to, from, next) => {
  if (to.name !== 'search') {
    store.commit(types.CHANGE_NAV_TITLE, to.name)

  }
  next()
})

//获取个人信息
store.dispatch('getDataFromServer', axios)