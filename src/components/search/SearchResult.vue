<template>
    <div>
        <div class="topbar flex bg-white">
            <div class="flex-0 topba_button" @click="go">
                <i class="iconfont icon-back"></i>
            </div>
            <div class="flex-1 text-center">
                搜索结果
            </div>
            <div class="flex-0 topba_button"></div>
        </div>
        <Card1 :data="item" :indexs="index" v-for="(item,index) in list" :key="index" @click="lookDetails" ></Card1>
    </div>
</template>

<script>
import Card1 from "../index/Card1";
export default {
  data() {
    return {
      list: []
    };
  },
  components:{
      Card1
  },
  created() {
    this.refresh();
  },
  methods: {
    go() {
      this.$router.go(-1);
      //this.$emit('go')
    },
    refresh() {
      this.$axios
        .post(
          this.$url + "Graduation/SearchNews",
          this.$qs.stringify({
            content: this.$store.state.searchText
          })
        )
        .then(result => {
          result.data.data.list.forEach(({ Id, Title, Content, ReadTime, Category, PublishDate, ImgUrl, Author }) => {
                this.list.push({ id: Id, title: Title, time: PublishDate, content: Content, img: ImgUrl, author: Author, category: Category, hidden: true })
            });
          console.log(result);
        })
        .catch(error => {
          console.log(error);
        });
    },
       lookDetails({id,indexs}) {
      console.log(id)
      console.log(indexs)
      this.$store.commit('ChangeNewsId',{id,indexs})
      this.$router.push("details");
    },
  }
};
</script>

<style scoped>
.topbar {
  height: 46px;
  line-height: 46px;
}
i {
  font-size: 20px;
}
.topba_button {
  width: 46px;
  line-height: 46px;
  text-align: center;
  border-radius: 100%;
}
.topba_button:active {
  background-color: #e8e8e8;
}
</style>
