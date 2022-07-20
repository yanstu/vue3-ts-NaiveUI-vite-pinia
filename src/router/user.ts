import { RouteRecordRaw } from 'vue-router';

export const userRoute: Array<RouteRecordRaw> = [
  {
    path: '/backend',
    component: () => import('@/views/backend/index.vue'),
    meta: {
      auth: true,
      isAdmin: true,
    },
  },
];
