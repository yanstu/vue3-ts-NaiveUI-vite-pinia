import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { createRouterGuards } from './router-guards';
import { errorRoute } from './error.router';
import { App } from 'vue';

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
  history: createWebHashHistory(''),
  routes,
  // 不保存滚动条所在位置
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export function setupRouter(app: App) {
  app.use(router);
  // 创建路由守卫
  createRouterGuards(router);
}

export default router;
