<template>
  <div class=" content bg-white" style="height:100%;">
    <div class="topbar bg-white flex ">
      <div class="topbar_button flex-0" @click="back">
        <i class="iconfont icon-back"></i>
      </div>
      <div class="flex-1">

      </div>
      <div class="pinglun flex-0 color-primary">
        条评论
      </div>
    </div>
    <div class="body">
      <div class="title">
        {{datas.title}}
      </div>
      <div class="desc flex flex-justify-between color-gray">
        <div>
          {{datas.time}}
        </div>
        <div>
          {{datas.author}}
        </div>
      </div>
      <div class="img">
        <img :src="datas.img" alt="">
      </div>
      <div>
        {{datas.content}}
      </div>
    </div>
    <van-loading color="black" v-show="load" />

    <Discuss1 class="bg-white" v-show="!load" :data="item" v-for="(item,index) in discuss" :key="index"></Discuss1>
    <div style="height:46px;"></div>
    <div class="review flex">
      <div class="flex-1 review_input-content">
        <input class="review_input" type="text" v-model="pinglun">
      </div>
      <div class="submit" @click="tijiaopinglun">
        提交
      </div>
    </div>
  </div>
</template>

<script>
import Discuss1 from "./Discuss1";
import urls from "../../vuex/urls";
export default {
  components: {
    Discuss1
  },
  data() {
    return {
      load: true,
      discuss: [],
      pinglun:''
    };
  },
  created() {
    // this.$store.dispatch('CommentAction',{id:this.$store.state.newsId})
    this.getList();
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    getList() {
      this.$axios
        .get(urls.url2 + "index.php", {
          params: {
            id: this.$store.state.newsId
          }
        })
        .then(result => {
          this.load = false;
          result.data.data.list.forEach(value=>{
            this.discuss.push({id:value.CommentId,time:value.PostDate,uid:value.Uid,zan:value.LikeTime,desc:value.Content,name:value.Name})
          })
          console.log(result);
        })
        .catch(error => {
          console.log(error);
        });
    },
    tijiaopinglun(){
      if(this.$store.state.user.name==''){
        this.$toast('请登录')
        this.$router.push('/login')
      }else{
      this.$axios
        .get(urls.url2 + "commentadd.php", {
          params: {
            id: this.$store.state.newsId,
            content:this.pinglun,
            uname:this.$store.state.user.name
          }
        })
        .then(result => {
          this.pinglun='';
          this.getList();
          this.$toast('提交成功');
          console.log(result);
        })
        .catch(error => {
          console.log(error);
        });
      }
      
    }
  },
  computed: {
    datas() {
      var datas = "";
      this.$store.state.newsList.forEach(value => {
        if (value.id == this.$store.state.newsId) {
          datas = value;
        }
      });
      return datas;
    }
  }
};
</script>

<style scoped>
.topbar {
  line-height: 46px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 46px;
}
.topbar_button {
  width: 46px;
  text-align: center;
  border-radius: 100%;
}
.topbar_button:active {
  background-color: #e8e8e8;
}
.pinglun {
  border: 1px solid #e22829;
  margin: 10px 0;
  line-height: 26px;
  padding: 0 10px;
  border-radius: 100px;
  margin-right: 10px;
  font-size: 12px;
}
.pinglun:active {
  background-color: rgba(226, 40, 41, 0.3);
}
i {
  font-size: 20px;
}
.content {
}
.body {
  padding: 46px 10px 10px;
  box-sizing: border-box;
}
.title {
  font-size: 24px;
  font-weight: bold;
}
.img {
  margin: 8px 0;
}
.img > img {
  width: 100%;
}
.review {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  border-top: 1px solid #f2f2f2;
  height: 46px;
}
.review_input-content {
  padding: 4px;
  padding-right: 0px;
  box-sizing: border-box;
}
.review_input {
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  width: 100%;
  height: 34px;
}
.submit {
  font-size: 16px;
  padding: 0px 15px;
  box-sizing: border-box;
  line-height: 46px;
}
.submit:active {
  background-color: #f2f2f2;
}
</style>
