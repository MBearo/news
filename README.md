# 移动端新闻demo

> 试试vant这个框架

## 项目结构

```
--build(webpack配置文件，不用管)
--config(同上)
--dist(编译后的文件)
--node_modules(项目依赖，不用管)
--src(主要代码在这里)
  --assets(需要打包的资源，主要是小图片)
  --components(所有的组件)
    --demo(公共组件)
    --details(新闻详情)
    --index(首页)
    --search(搜索)
    --view(控制最外层的组件)
  --router(路由管理)
  --style(公共css)
  --vuex(状态管理)
      -index.js(所有状态在这里，分发数据)
      -urls.js(把公共ip提出来了)
   -App.vue(组件入口)
   -main.js(js入口)
--static(公共资源)
 -index.html(入口)
 -package(依赖包记录)
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
