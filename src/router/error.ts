import { RouteRecordRaw } from 'vue-router';

export const errorRoute: Array<RouteRecordRaw> = [
  {
    // 404
    path: '/:pathMatch(.*)',
    component: () => import('../views/error/notFound.vue'),
    meta: {
      auth: false,
      title: '404',
    },
  },
  {
    // 无权限
    path: '/noPermission',
    name: 'noPermission',
    component: () => import('../views/error/noPermission.vue'),
    meta: {
      auth: false,
      title: '无权限',
    },
  },
];
