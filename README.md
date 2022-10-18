# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)



# 问题汇总：
1. 使用iconfont时会报错，使用生成的`@font-face`后问题解决。
2. 左侧导航栏二级菜单的分割线用hr实现不美观，后改用div实现
3. 左侧导航栏二级菜单详细信息设置样式不生效，在创建元素时就使用setattribute解决
4. 添加轮播图的箭头时不对齐
5. 为轮播图中的a标签设置动画不起作用，查询animate官网发现不能为内联元素设置样式
6. 轮播图的左右按钮快速点击时会被选中，网上查阅资料后，通过css解决
7. 电影展示部分用了flex后无法添加按钮，修改html结构，分为组进行展示
8. 电影切换时，动画会显示在第二排，在修改pagenum时设定延时器解决
9. 电影文字会被图片遮挡导致看不清，css修改图片亮度解决，但是整张图片都变暗了，后用div遮罩层解决
10. 再点击按钮切换电影时，底部会出现滚动条，在组件中使用overflow：hidden解决,问题7由此得到启示
11. 添加推荐时，在向子组件传递图片src时错误，使用slot解决