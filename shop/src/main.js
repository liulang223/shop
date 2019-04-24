import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
Vue.config.productionTip = false
// import Vant from 'vant';
// import 'vant/lib/index.css'; 
// Vue.use(Vant);
import { Button, Icon, NavBar, Tabbar, TabbarItem } from 'vant';
Vue.use(Button).use(NavBar).use(Icon).use(Tabbar).use(TabbarItem)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
