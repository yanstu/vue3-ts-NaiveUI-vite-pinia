import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { errorRoute } from './error';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../views/index/index.vue'),
    meta: {
      auth: false,
      title: '首页',
    },
  },
  ...errorRoute,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach(async (_to, _from, next) => {
  // 切换router时，取消pending中的请求
  if (window.__axiosPromiseArr) {
    window.__axiosPromiseArr.forEach((ele: any, ind: number) => {
      ele.cancel();
      delete window.__axiosPromiseArr[ind];
    });
  }
  next();
});

router.afterEach((_to) => {});

export default router;
