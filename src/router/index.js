import { createRouter, createWebHistory } from 'vue-router'
// import PageHome from '@/views/PageHome.vue'
import BoardList from '@/views/board/BoardList.vue'
import BoardList_Subject from '@/views/board/BoardList_Subject.vue'
import BoardDetail from '@/views/board/BoardDetail.vue'
import BoardWrite from '@/views/board/BoardWrite.vue'

// ============== UserService ============== 
import PageWelcome from '@/views/PageWelcome.vue'
import PageLogin from '@/views/common/PageLogin.vue'
import PageRegister from '@/views/common/PageRegister.vue'
import PageFindAccount from '@/views/common/PageFindAccount.vue'
import PageNewUserInfo from '@/views/common/PageReNewUserInfo.vue'

// ============== Page User ============== 
import PageDashBoard from '@/views/user/PageDashBoard.vue'


import {store} from '../vuex/store'

const requireAuth = () => (from, to, next) => {
  const token = localStorage.getItem('user_token')
  if (token) {
    store.state.isLogin = true
    return next()
  }
  // isLogin === true면 페이지 이동
  alert("로그인 후 이용해주세요.");
  next('/login') // isLogin === false면 다시 로그인 화면으로 이동
}

const routes = [
  // ==================== 로그인 하지 않아도 이용 가능한 서비스 ====================
  {
    path: '/',
    name: 'PageWelcome',
    component: PageWelcome
  },
  {
    path: '/login',
    name: 'PageLogin',
    component: PageLogin
  },
  {
    path: '/register',
    name: 'PageRegister',
    component: PageRegister
  },
  // ==================== 로그인 시 이용 가능한 서비스 ====================
  {
    path: '/findAccout',
    name: 'PageFindAccount',
    component: PageFindAccount,
    beforeEnter: requireAuth(),
    meta: { requiresAuth: true }
  },
  {
    path: '/rePwd',
    name: 'PageNewUserInfo',
    component: PageNewUserInfo,
    beforeEnter: requireAuth(),
    meta: { requiresAuth: true }
  },
  {
    path: '/DashBoard',
    name: 'PageDashBoard',
    component: PageDashBoard,
    beforeEnter: requireAuth(),
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'PageAbout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PageAbout.vue'),
    beforeEnter: requireAuth(),
    meta: { requiresAuth: true }
  },
  {
    path: '/board/list',
    name: 'BoardList',
    component: BoardList,
    beforeEnter: requireAuth(),
    meta: { requiresAuth: true },
  },
  {
    path: '/board/list/subject',
    name: 'BoardList_Subject',
    component: BoardList_Subject,
    beforeEnter: requireAuth(),
    meta: { requiresAuth: true },
  },
  {
    path: '/board/detail',
    name: 'BoardDetail',
    component: BoardDetail,
    beforeEnter: requireAuth(),
    meta: { requiresAuth: true }
  },
  {
    path: '/board/write',
    name: 'BoardWrite',
    component: BoardWrite,
    beforeEnter: requireAuth(),
    meta: { requiresAuth: true }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router