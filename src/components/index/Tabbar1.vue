<template>
    <div>
        <van-tabbar v-model="active" class="tabs" @change="change">
            <van-tabbar-item>
                <span>首页</span>
                <template slot="icon" slot-scope="props">
                    <i class="iconfont icon-home"></i>
                </template>
            </van-tabbar-item>
            <van-tabbar-item class="teshu">
                <!-- <span>发布</span>
            <template slot="icon" slot-scope="props">
                <i class="iconfont icon-home"></i>
            </template> -->
            </van-tabbar-item>
            <van-tabbar-item>
                <span>我的</span>
                <template slot="icon" slot-scope="props">
                    <i class="iconfont icon-people"></i>
                </template>
            </van-tabbar-item>
        </van-tabbar>
        <div class="fabu"  @click="tiaole">
            <i class="iconfont icon-light"></i>
        </div>
    </div>

</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    change(active) {
      if (active == 0) {
        this.$router.push("index");
      } else {
        this.$router.push("my");
      }
    },
    tiaole(){
        if(this.$store.state.token.Username==''){
        this.$toast('请登录')
        this.$router.push('/login')
      }else{
          this.$router.push('/newnews')
      }
    }
  }
};
</script>

<style scoped>
i {
  font-size: 24px;
}
.tabs {
  position: relative;
}
.teshu {
  flex: 0;
  width: 50px;
}
.fabu{
    height: 60px;
    width: 60px;
    position: fixed;
    bottom: -5px;
    left: 50%;
    right: 50%;
    background-color: #e22829;
    transition: all .15s;
    border-radius: 100%;
    transform: translate(-50%,0);
    box-shadow: 0 0 4px rgba(0, 0, 0, .3);
    line-height: 60px;
    color: white;
    text-align: center;
}
.fabu i{
    font-size: 24px;
}
.fabu:active{
    background-color: #b30f10;
    transform: translate(-50%,1px);
}
</style>
<style>
.van-tabbar-item--active {
  color: #e22829;
}
</style>

