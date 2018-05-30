// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './app';
import routes from './routes';
import store from './vuex/store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'
import Cookies from 'js-cookie';
import auth from './vuex/modules/auth'; // 引入某个store对象


Vue.use(ElementUI, { locale });
Vue.use(Vuex);
Vue.use(VueRouter);

// 创建一个路由对象用于管理页面的路由
const router = new VueRouter({
  mode: 'history',
  routes: routes
});

// 创建一个 store 对象用于管理应用状态
//const store = new Vuex.Store(storeOption);

router.beforeEach((to, from, next) => {
  if (router.app.$store && router.app.$store.state.auth 
    && router.app.$store.state.auth.ci_session === Cookies.get('ci_session')) {
    next(); // 已经登录过了
  } else {
    router.app.$store.dispatch('auth/getCurUserInfo')
    .then(() => {
      const userInfo = router.app.$store.state.auth.auth.auth;
      if (userInfo && userInfo.data && userInfo.data.name) {
        new window.RrcWatermark().init({
          text: userInfo.data.name || '人人车',
        });
        return true;
      } else {
        return false;
      }
      
    }).then((isLogin) => {
      if (isLogin) {
        next();
      } else {
        alert('用户未登录');
        location.href = '//mis.shanyishanmei.com/index.php?c=auth&m=logout';
      }
    });
  }
});

window.__lendApp__ = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

// 输入框在虚拟键盘弹出时，自动滚动到可见位置
document.body.addEventListener('click', function (event) {
  var element = event.target;
  var tags = {
    'INPUT': 1,
    'TEXTAREA': 1,
  }
  if ((element.tagName in tags) ) {
    setTimeout(function(){
      element.scrollIntoViewIfNeeded();
      // console.log('scrollIntoViewIfNeeded');
    }, 400);
  }
}, false);