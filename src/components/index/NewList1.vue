<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" @load="onLoad">
        <Card1 :data="item" :indexs="index" v-for="(item,index) in $store.state.newsList" :key="index" @click="lookDetails" v-show="item.hidden"></Card1>
        <!-- <van-cell v-for="item in list" :key="item" :title="item + ''" @click="lookDetails"/> -->
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import Card1 from "./Card1";
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      data: {},
      count: 0,
      isLoading: false
    };
  },
  components: {
    Card1
  },
  created() {
    this.refresh();
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    lookDetails({id,indexs}) {
      console.log(id)
      console.log(indexs)
      this.$store.commit('ChangeNewsId',{id,indexs})
      this.$router.push("details");
    },
    refresh() {
      console.log('zhixingle ')
      this.$store.dispatch("NewsList_A");
    }
  }
};
</script>

<style>

</style>
