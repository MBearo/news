<template>
  <div class="hello flex">
    <!-- router-view 用来渲染路由匹配的组件 -->
    <router-view class="body flex-1"></router-view>
    <Tabbar1 class="tabs flex-0"></Tabbar1>
  </div>
</template>

<script>
//导入组件
import Tabbar1 from "../index/Tabbar1";
export default {
  //注册组件
  components: {
    Tabbar1
  },
  data() {
    return {};
  }
};
</script>

<!-- scoped 这里的样式只会在这个组件内发挥作用，不会全局污染 -->
<style scoped>
.hello{
  height: 100%;
  flex-direction: column;
  flex-wrap: nowrap;
}
/* .body {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 50px;
  right: 0;
}
.tabs {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
} */
</style>
