// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex'
import axios from 'axios'
import urls from './vuex/urls'
import qs from 'qs'
import 'animate.css'

Vue.prototype.$axios = axios
Vue.prototype.$url=urls.urls
Vue.prototype.$qs=qs

Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

Vue.use(Vant);
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
