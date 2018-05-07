<template>
    <div>
        <Back :title="'新建新闻'"></Back>
        <van-cell-group>
            <div style="padding: 5px 10px;color: #666;">
                选择图片
            </div>
            <van-uploader :after-read="onRead" class="headimg bg-cover inline-block" :style="`background-image:url(${url}${imgUrl})`">
                <!-- <van-icon name="photograph" /> -->
            </van-uploader>
            <van-field v-model="Title" placeholder="请输入标题" />
            <van-field v-model="Content" type="textarea" placeholder="请输入内容" rows="2" autosize />
            <div style="padding:5px 10px;box-sizing:border-box">选择分类</div>
            <van-radio-group v-model="radio" style="padding:0 10px;box-sizing:border-box">
                <van-radio style="margin-bottom:6px;" :name="item.Id" v-for="(item,index) in liebiao" :key="index">{{item.Name}}</van-radio>
            </van-radio-group>
            <div class="tijiao">
                <van-button type="primary" size="small" @click="tijiao">提 交</van-button>
            </div>

        </van-cell-group>
    </div>
</template>

<script>
import urls from "../../vuex/urls";
import Back from "../demo/Back";
export default {
  components: {
    Back
  },
  data() {
    return {
      Title: "",
      radio: "1",
      Content: "",
      imgUrl: ""
    };
  },
  computed: {
    liebiao() {
      let ddd = JSON.stringify(this.$store.state.category);
      let sss = JSON.parse(ddd);
      return sss.slice(1);
    },
    url() {
      return urls.urls;
    }
  },
  methods: {
    onRead(file) {
      console.log(file);
      let fd = new FormData();
      fd.append("file", file.file);
      this.$axios
        .post(this.$url + "Graduation/UploadImage", fd, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(result => {
          console.log(result);
          this.imgUrl = result.data.data.list[0].UploadFilename;
          if (result.data.errorcode == 0) {
            this.$toast("上传成功");
          } else {
            this.$toast("上传失败2");
          }
        })
        .catch(result => {
          console.log(result);
          this.$toast("上传失败3");
        });
    },
    tijiao() {
      this.$axios
        .post(
          this.$url + "Graduation/InsertData",
          this.$qs.stringify({
            object: "news",
            title: this.Title,
            content: this.Content,
            imgUrl: urls.urls+this.imgUrl,
            category: this.radio,
            author: this.$store.state.token.Name
          })
        )
        .then(result => {
          console.log(result.data);
          if (result.data.errorcode == 0) {
            this.$toast("上传成功");
            this.$router.push('/index')
          } else {
          }
        })
        .catch(_ => {
          this.$message({
            showClose: true,
            message: "请检查网络连接",
            type: "error"
          });
        });
    }
  }
};
</script>

<style scoped>
.tijiao {
  padding: 10px 0;
  box-sizing: border-box;
  text-align: center;
}
.headimg {
  background-color: #f2f2f2;
  height: 100px;
  width: 100%;
}
</style>
