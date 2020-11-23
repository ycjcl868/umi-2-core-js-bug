import { IConfig } from 'umi-types';

export default {
  hash: true,
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/zh/guide/router.html
  routes: [
    {
      component: './404',
    },
  ],
} as IConfig;
