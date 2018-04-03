<template>
    <div>
        <div class="nav flex bg-primary color-white">
            <div class="logo flex-0">
                新闻联播
            </div>
            <div class="nav-center flex-1">
                <div class="search flex" @click="search">
                    <div>
                        <i class="iconfont icon-search" style="font-size:16px;"></i> 点击搜索新闻
                    </div>
                </div>
            </div>
            <div class="nav-button flex-0">
                <i class="iconfont icon-people"></i>
            </div>
        </div>
        <van-tabs :active="active" @click="changeFenlei">
            <van-tab v-for="index in 8" :title="'选项 ' + index" :key="index">

            </van-tab>
        </van-tabs>
    </div>

</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    search() {
      this.$router.push("/search");
    },
    changeFenlei(index) {}
  }
};
</script>

<style scoped>
.nav {
  height: 46px;
  line-height: 46px;
  /* padding: 0 15px; */
  box-sizing: border-box;
}
.nav-button {
  width: 46px;
  margin: 0 5px;
  text-align: center;
  border-radius: 100%;
}
.nav-button:active {
  background-color: #b30f10;
}
.logo {
  padding: 0 10px;
  box-sizing: border-box;
}
.search {
  background-color: #eb5557;
  width: 100%;
  height: 100%;
  border-radius: 100px;
  line-height: 1;
  align-items: center;
  justify-content: center;
}
.search:active {
  background-color: #cc3d3e;
}
.nav-center {
  padding: 8px 0;
  box-sizing: border-box;
}
i {
  font-size: 20px;
}
</style>
