import Vue from 'vue'
import Router from 'vue-router'
import {
  constantRouterMap
} from './router.config.js'

// hack router push callback
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const createRouter = () =>
  new Router({
    mode: 'history', // 如果你是 history模式 需要配置vue.config.js publicPath
    // base: process.env.BASE_URL,
    scrollBehavior: () => ({
      y: 0
    }),
    routes: constantRouterMap
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/home' || to.path === '/login') {
    next();
  } else {
    //非跳转到登录界面时，判断本地存储userInfo是否为null或空，为空则跳回到登录界面，反之到相应的界面(此时有数据)。
    let userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : '';
    if (userInfo === null || userInfo === '') {
      next('/login');
    } else {
      next();
    }
  }
});


export default router
