import Vue from 'vue'
import App from './App.vue'
//import 'hugoo-vui/hugoo-vui.css';
import '../packages/assets/global.less';
import VueRouter from 'vue-router'
import {install as hugoovui} from '../packages';
Vue.config.productionTip = false

//import {install as hugoovui} from 'hugoo-vui';

Vue.use(hugoovui);
const components = ['menus', 'button', 'header', 'toast', 'gride', 'confirm'];

const routes = [];
components.map(item => {
  //let ins = require('./pages/' + item + '.vue').default;
  const ins = () => import('./pages/' + item + '.vue').then(m => m.default); //动态import只能这么写
  routes.push({
    path: '/' + item,
    component: ins
  })
})

//这一段是为了方式路由重复push.在使用编程式路由时
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
