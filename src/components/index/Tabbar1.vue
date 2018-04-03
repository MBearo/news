<template>
    <van-tabbar  v-model="active" class="tabs" @change="change">
        <van-tabbar-item>
            <span>首页</span>
            <template slot="icon" slot-scope="props">
                <i class="iconfont icon-home"></i>
            </template>
        </van-tabbar-item>
        <van-tabbar-item>
            <span>我的</span>
            <template slot="icon" slot-scope="props">
                <i class="iconfont icon-people"></i>
            </template>
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    change(active) {
      if (active == 0) {
        this.$router.push("index");
      } else {
        this.$router.push("my");
      }
    }
  }
};
</script>

<style scoped>
i{
    font-size: 24px;
}
.tabs{
    position: relative;
}
</style>
<style>
.van-tabbar-item--active{
    color:#e22829;
}
</style>

