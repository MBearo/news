<template>
  <div>
    <Back style="margin-bottom:10px;"></Back>
    <div class="bg-white content">
      <h5>关于我们</h5>
      <div>
        为了改善当下新闻类应用的复杂格局，已不再是单纯并有针对性的提供新闻的问题。通过考察研究，决定通过一个针对性强，现代设计方案，操作逻辑直观，专注于内容的新闻web站以及客户端解决上述问题。
      </div>
      <div>
        项目整体使用前后端分离的开发模式，更好的专注于不同的工作
        <br> 1. web移动端： 1. 遵循W3C的开发规范 2. 使用HTML5的新增内容，使代码语义化更强，便于浏览器解析，搜索引擎分析 3. 使用div+css3的布局模式，比起传统的table布局性能更好，兼容性更强 4. JavaScript方面使用vue.js作为主要框架。新型的mvvm开发模式， 单页面应用，让前端的开发更强壮，高效 5. 配合vue使用vue-router，管理虚拟路由 6. 配合vue使用vuex管理组件状态，全局向下分发内容 7. 使用webpack作为打包工具，增强代码的可管理性 8. 使用node.js进行编译，把es6，es7等大部分浏览器无法解析的代码转换为可以使用的版本 9. 使用ajax进行数据交换 2. Android（ios）移动端： 使用hybird app的开发模式，将web封装到app内，达到一套代码三端使用的目的，并且进行性能优化，极大的解决了首页白屏的web的问题 3. 后端： 使用java开发后台，成熟的语言。使用spring框架，完美实现先后端分离的开发模式 4. 数据库： 使用mysql作为数据库，检索存储
      </div>
    </div>
  </div>
</template>

<script>
import Back from "../demo/Back";
export default {
  components: {
    Back
  }
};
</script>

<style scoped>
.content {
  padding: 10px;
  box-sizing: border-box;
  line-height: 2;
}
</style>
