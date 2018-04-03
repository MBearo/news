<template>
  <div class="search_page bg-white">
    <div class="flex search_input">
      <div class="flex-button flex-0" @click="$router.go(-1)">
        <i class="iconfont icon-back"></i>
      </div>
      <div class="search_text flex-1">
        <input type="text" v-model="searchText">
      </div>
      <div class="flex-button flex-0" @click="search">
        <i class="iconfont icon-search" ></i>
      </div>
    </div>
    <div style="height:46px;"></div>
    <Hot v-if="linshi"></Hot>
    <NewList1 v-else></NewList1>
  </div>
</template>

<script>
import Hot from './Hot'
import NewList1 from '../index/NewList1'
export default {
  data() {
    return {
      searchText: "",
      linshi:true
    };
  },
  components:{
    Hot,
    NewList1
  },
  methods: {
    search() {
      this.linshi=false
    },

  }
};
</script>

<style scoped>
.search_page {
  height: 100%;
}
.search_input {
  height: 46px;
  line-height: 46px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 10;
  /* border-bottom: 1px solid #f2f2f2; */
}
.flex-button {
  width: 46px;
  text-align: center;
  border-radius: 100%;
}
.flex-button:active {
  background-color: #e8e8e8;
}
.search_text {
  padding: 6px 0px;
  box-sizing: border-box;
}
.search_text > input {
  border-radius: 100px;
  border: 1px solid #f2f2f2;
  display: block;
  width: 100%;
  line-height: 16px;
  height: 100%;
  padding: 0 15px;
  box-sizing: border-box;
}
.paixu {
}

i{
  font-size: 20px;
}
</style>
