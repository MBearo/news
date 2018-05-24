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



## 基础

html 页面里有什么
css 这个东西长什么样
JavaScript（js）可以操作html和css

## 概况

前后端分离（开发模式）的web项目
前端是一个使用mvvm模式开发的单页面应用
ajax（核心）
后端，（用户端，管理员端）前端

后端：吐数据，用各种sql语句，增删改查（sql）

前端技术栈：{
js框架：vue，vue-router,vuex，vue-cli
ui框架：vant
ajax封装：axios
环境：nodejs
图标实现：阿里巴巴iconfont
打包工具：webpack(.vue,组件化)
}

jQuary   bootstrap
js框架    ui框架

jq：直接操作html结构和css样式
vue:通过数据驱动来变更内容


后台：{
  ui框架：element——ui
}
demo：上传图片：
1. 把图片转为base64传输
2. data-form 用ajax模拟一个post表单的文件提交






登录：获取用户输入值，ajax传到后台，sql查询用户名和密码是否匹配，如果匹配返回个人信息，表示登陆成功；
注册：先看账号充不重复；


登录之后，拉取个人细信息，包含稀罕的新闻分类，渲染对应分类，分别请求不同新闻类别的新闻
判断是否为空，格式对不对，长度打不达到要求，sql插入
喜好表：uid（用户id），新闻分类的id
新闻分类表：
用户表；

搜索 sql的模糊查询
热搜 同时判断，浏览次数和点赞次数


如何判断登录
吧个人信息存在cookie里 每次请求会待在请求头里，加重负担，很小
吧新信息在localstorage 存在本地，不用待在请求头，有4M的容量，长期有效


发布写新闻，先上传图片，返回地址，同下面的文字，用户id一同上窜

点赞表：uid 评论id 对否点赞