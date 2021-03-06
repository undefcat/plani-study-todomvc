import Vue from 'vue'
import App from './App.vue'
import 'todomvc-app-css/index.css'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
}).$mount('#app')
