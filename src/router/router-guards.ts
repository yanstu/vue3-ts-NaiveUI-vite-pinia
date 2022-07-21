import { Router } from 'vue-router';

export function createRouterGuards(router: Router) {
  // 前置
  router.beforeEach(async (to, from, next) => {
    // 切换router时，取消pending中的请求
    /*if (window.__axiosPromiseArr) {
      window.__axiosPromiseArr.forEach((ele: any, ind: number) => {
        ele.cancel();
        delete window.__axiosPromiseArr[ind];
      });
    }*/

    const Loading = window.$loading;
    Loading && Loading.start();
    next();
  });

  // 后置
  router.afterEach((to, _, failure) => {
    const Loading = window.$loading;
    document.title = (to?.meta?.title as string) || document.title;
    Loading && Loading.finish();
  });

  // 错误
  router.onError((error) => {
    console.log(error, '路由错误');
  });
}
