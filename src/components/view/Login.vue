<template>
    <div class="container">
        <div class="topbar flex bg-white">
            <div class="flex-0 topba_button" @click="back()">
                <i class="iconfont icon-back"></i>
            </div>
            <div class="flex-1">

            </div>
            <div class="flex-0 topba_button"></div>
        </div>
        <div class="neirong">
            <h3>账号登录</h3>
            <div class="input">
                <input v-model="name" type="text" placeholder="用户名">
            </div>
            <div class="input">
                <input v-model="password" type="password" placeholder="密码">
            </div>
        </div>
        <div class="" style="padding:0 20px;box-sizing:border-box">
            <div class="go bg-primary color-white" @click="denglu"> 开始使用</div>
        </div>
        <router-link class="zhuce text-center" tag="div" to="/register">
            没有账号？现在注册
        </router-link>
    </div>
</template>

<script>
import urls from "../../vuex/urls";
import qs from "qs";
export default {
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    denglu() {
      // this.$store.state.user.name = this.name;
      // this.$store.state.user.password = this.password;
      this.$axios
        .post(
          urls.urls + "Graduation/Login",
          qs.stringify({
            username: this.name,
            password: this.password
          })
        )
        .then(result => {
          // commit("NewsList_M", {
          //   result
          // });
          if (result.data.errorcode == 0) {
            this.$toast("登录成功");
            this.$store.commit("User_M", { result: result.data.data});
            this.$router.push("index");
          } else {
          }
          console.log(result);
        })
        .catch(error => {
          console.log(error);
        });
    },
    back(){
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
.container {
  background-color: white;
  height: 100vh;
}
.input {
  border-bottom: 1px solid #f2f2f2;
  padding: 10px 0;
  box-sizing: border-box;
  margin: 30px 0;
}
.neirong {
  box-sizing: border-box;
  padding: 10px 20px;
}
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
.go {
  height: 35px;
  line-height: 35px;
  text-align: center;
  border-radius: 100px;
}
.go:active {
  background-color: #b30f10;
}
.zhuce {
  font-size: 12px;
  padding: 15px 0;
  box-sizing: border-box;
}
</style>
