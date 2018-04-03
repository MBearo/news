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
                    作者名字
                </div>
            </div>
            <div class="img">
                <img src="/static/banner1.jpg" alt="">
            </div>
            <div>
                {{datas.content}}
            </div>
        </div>
        <Discuss1 class="bg-white"></Discuss1>
        <div style="height:46px;"></div>
        <div class="review flex">
            <div class="flex-1 review_input-content">
                <input class="review_input" type="text">
            </div>
            <div class="submit">
                提交
            </div>
        </div>
    </div>
</template>

<script>
import Discuss1 from "./Discuss1";
export default {
  components: {
    Discuss1
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  computed: {
    datas() {
      return this.$store.state.newsList[this.$store.state.newsIndex];
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
