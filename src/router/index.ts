import { RouteRecordRaw, createRouter, createWebHistory, useRoute } from 'vue-router';

// 关于单层路由，meta 中设置 { single: true } 即可为单层路由，{ hidden: true } 即可在侧边栏隐藏该路由

// 存放动态路由
export const asyncRouterList: Array<RouteRecordRaw> = [];

// 存放固定的路由
const defaultRouterList: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/auth/login/index.vue'),
  },
  {
    path: '/',
    redirect: '/dashboard/workplace',
    component: () => import('@/layouts/blank-view/index.vue'),
  },
  // {
  //   path: '/:w+',
  //   name: '404Page',
  //   redirect: '/result/404',
  // },
];

export const allRoutes = [...defaultRouterList, ...asyncRouterList];

export const getActive = (maxLevel = 2): string => {
  const route = useRoute();
  if (!route.path) {
    return '';
  }
  return route.path
    .split('/')
    .filter((_item: string, index: number) => index <= maxLevel && index > 0)
    .map((item: string) => `/${item}`)
    .join('');
};

const router = createRouter({
  history: createWebHistory(),
  routes: allRoutes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    };
  },
});

export default router;
