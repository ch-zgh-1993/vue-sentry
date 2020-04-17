/*
* @Author: Zhang Guohua
* @Date:   2019-09-10 17:03:00
* @Last Modified by:   zgh
* @Last Modified time: 2019-09-23 20:23:48
* @Description: create by zgh
* @GitHub: Savour Humor
*/
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import common from './common'

Vue.config.productionTip = false

Vue.use(common, [
	'monitor'
])

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
