<template>
    <div class="">
        <div class="person text-center bg-white" v-if="$store.state.token">
            <router-link tag="div" class="headimg bg-cover inline-block" to="/ChangeImg"></router-link>
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
            <van-cell title="阅读偏好" is-link to="/readlike"/>
            <van-cell title="用户反馈" is-link to="/fankui"/>
            <van-cell title="关于我们" is-link to="/about"/>
            <!-- <van-cell title="设置" is-link /> -->
        </van-cell-group>
    </div>
</template>

<script>
export default {
  methods: {
    login() {
        this.$router.push('/login')
       // this.$store.commit('User_M',{result:1111})
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
