import Vue from 'vue'
import App from './components/app.vue'
import ListView from './components/list.vue'

/* router */
import Router from 'vue-router'
Vue.use(Router);
/* list animation */
import VueAnimatedList from 'vue-animated-list'
Vue.use(VueAnimatedList);
/* touch */
var VueTouch = require('vue-touch')
Vue.use(VueTouch)

/* 启用路由 */
var router = new Router();
router.map({
  '/': { component: ListView }
});
router.start(App, '#app');
