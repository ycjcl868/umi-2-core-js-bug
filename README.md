## umi-2-core-js-bug

![](https://gw.alipayobjects.com/zos/antfincdn/fWJ7JUS%26vI/289ee513-5c1c-45f7-9a61-8526234552c7.png)

### 复现步骤

```
$ cnpm i && BABEL_CACHE=none cnpm run build
```

### 原因

只要开了 `treeShaking: true` 就是好的，关了就会挂掉。
