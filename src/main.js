// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'
import App from './App'
import router from './router/index.js'
import { Radio, Group, Cell, Badge, Drawer, Actionsheet, ButtonTab, ButtonTabItem, ViewBox, XHeader, Tabbar, TabbarItem, Loading, TransferDom, LoadingPlugin } from 'vux'

Vue.use(LoadingPlugin)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(vuexI18n)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
