import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { userRoute } from './user';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../views/index/index.vue'),
    meta: {
      auth: false,
      title: '首页',
    },
  },
  ...userRoute,
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
  next();
});

router.afterEach((_to) => {});

export default router;
