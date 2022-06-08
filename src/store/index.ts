import { createPinia } from 'pinia';
// import useAppStore from './modules/app';
// // import useTabBarStore from './modules/tab-bar';
import { useUserStore } from './modules/user';

const store = createPinia();

export { useUserStore };
export default store;
