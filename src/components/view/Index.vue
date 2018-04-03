<template>
  <div class="hello flex">
    <router-view class="body flex-1"></router-view>
    <Tabbar1 class="tabs flex-0"></Tabbar1>
  </div>
</template>

<script>
import Tabbar1 from "../index/Tabbar1";
export default {
  name: "HelloWorld",
  components: {
    Tabbar1
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
