import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import './mock/mockServer'
import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'
import './filter'

//注册全局组件标签
Vue.component(Button.name,Button)  //<mt-button>
Vue.use(VueLazyload, {
  loading
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
