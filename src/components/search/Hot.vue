<template>
    <div class="search_hot">
        <div class="list_title">
            热门搜索
        </div>
        <div class="hot_list">
            <div class="flex hot_list-item" v-for="(item,index) in title" :key="index+'0'" @click="details(item)">
                <div class="flex-0 paixu">{{index+1}}.</div>
                <div class="flex-1 new_title">{{item.title}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  computed:{
    title(){
      let list=this.$store.state.newsList.sort((a,b)=>{return b.ReadTime-a.ReadTime})
      return list.slice(0,10)
    }
  },
    methods:{
        details(item){
            this.$store.state.newsId=item.id;
            this.$router.push('details')
        }
    }
};
</script>

<style scoped>
.list_title {
  color: #c8c8c8;
}
.search_hot {
  padding: 10px;
  box-sizing: border-box;
}
.hot_list-item {
  padding: 10px;
  position: relative;
}
.hot_list-item:active {
  background-color: #e8e8e8;
}
.hot_list-item:nth-child(1) .paixu {
  color: #e34748;
}
.hot_list-item:nth-child(2) .paixu {
  color: #f39851;
}
.hot_list-item:nth-child(3) .paixu {
  color: #f7d35b;
}
.hot_list-item .paixu {
  width: 22px;
  text-align: right;
  margin-right: 5px;
}
.hot_list-item::after {
  content: "";
  height: 1px;
  background-color: #f2f2f2;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
@media only screen and (-webkit-min-device-pixel-ratio: 2) {
  .hot_list-item::after {
    content: "";
    height: 1px;
    background-color: #f2f2f2;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    transform: scale(1, 0.5);
  }
}
@media only screen and (-webkit-min-device-pixel-ratio: 1.5) {
  .hot_list-item::after {
    content: "";
    height: 1px;
    background-color: #f2f2f2;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    transform: scale(1, 0.67);
  }
}
</style>
