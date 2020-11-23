export default {
  routes: [
    {
      path: '/404',
      component: './404',
    },
  ],
  // 关了就会报错
  // treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: false,
        dva: false,
        dynamicImport: false,
        title: 'umi2-test',
        dll: false,

        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
};
