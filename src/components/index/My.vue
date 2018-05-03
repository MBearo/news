<template>
    <div class="">
        <div class="person text-center bg-white" v-if="$store.state.token.Username">
            <van-uploader :after-read="onRead" class="headimg bg-cover inline-block" :style="`background-image:url(${url}${$store.state.token.PortraitImg})`">
                <!-- <van-icon name="photograph" /> -->
            </van-uploader>
            <!-- <router-link tag="div" class="headimg bg-cover inline-block" to="/ChangeImg"></router-link> -->
            <div class="nickname">
                {{$store.state.token.Name}}
            </div>
            <!-- <div class="flex flex-justify-around t">
                <div class="tab">
                    <div class="tnum">
                        9
                    </div>
                    <div class="text">
                        收藏
                    </div>
                </div>
                <div class="tab">
                    <div class="tnum">
                        9
                    </div>
                    <div class="text">
                        查看
                    </div>
                </div>
                <div class="tab">
                    <div class="tnum">
                        9
                    </div>
                    <div class="text">
                        点赞
                    </div>
                </div>
            </div> -->
        </div>
        <div class="person text-center bg-white" v-else>
            <div class="text-center">
                <div class="login_button bg-primary inline-block color-white" @click="login">
                    登录/注册
                </div>
            </div>
            <div class="flex flex-justify-around t">
                <div class="tab">
                    <div class="tnum">
                        <i class="iconfont icon-favor"></i>
                    </div>
                    <div class="text">
                        收藏
                    </div>
                </div>
                <div class="tab">
                    <div class="tnum">
                        <i class="iconfont icon-attention"></i>
                    </div>
                    <div class="text">
                        查看
                    </div>
                </div>
                <div class="tab">
                    <div class="tnum">
                        <i class="iconfont icon-appreciate"></i>
                    </div>
                    <div class="text">
                        点赞
                    </div>
                </div>
            </div>
        </div>
        <van-cell-group>
            <van-cell title="阅读偏好" is-link to="/readlike" />
            <van-cell title="用户反馈" is-link to="/fankui" />
            <van-cell title="关于我们" is-link to="/about" />
            <!-- <van-cell title="设置" is-link /> -->
        </van-cell-group>
    </div>
</template>

<script>
import urls from "../../vuex/urls";
export default {
  data() {
    return {
      imgUrl: ""
    };
  },
  computed: {
    url() {
      return urls.urls;
    }
  },
  methods: {
    login() {
      this.$router.push("/login");
      // this.$store.commit('User_M',{result:1111})
    },
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
            this.$axios
              .post(
                urls.urls + "Graduation/ModifyData",
                this.$qs.stringify({
                  object: 'user',
                  idValue:this.$store.state.token.Username,
                  keyToModify:'PortraitImg',
                  value:result.data.data.list[0].UploadFilename
                })
              )
              .then(result => {
                // commit("NewsList_M", {
                //   result
                // });
                if (result.data.errorcode == 0) {
                  this.$toast("修改成功");
                  this.$store.state.token.PortraitImg=this.imgUrl
                } else {
                }
                console.log(result);
              })
              .catch(error => {
                console.log(error);
              });
           
          } else {
            this.$toast("上传失败2");
          }
        })
        .catch(result => {
            console.log(result)
          this.$toast("上传失败3");
        });
    }
  }
};
</script>

<style scoped>
.person {
  padding: 20px 0;
  padding-top: 45px;
  box-sizing: border-box;
  margin-bottom: 10px;
}
.headimg {
  height: 72px;
  width: 72px;
  background-color: #f2f2f2;
  border-radius: 100%;
}
.nickname {
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
}
.tnum {
  font-size: 18px;
  font-weight: bold;
}
.text {
  color: #c8c8c8;
  font-size: 12px;
}
.t {
  margin-top: 20px;
}
.van-cell {
  padding: 15px;
}
.tnum i {
  font-size: 20px;
}
.login_button {
  padding: 8px 20px;
  border-radius: 100px;
}
.login_button:active {
  background-color: #b30f10;
}
</style>
