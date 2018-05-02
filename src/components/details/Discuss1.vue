<template>
    <div class="flex discuss-item">
            <div class="flex-0">
              <div class="header">

              </div>
          </div>
            <div class="flex-1">
                <div class="flex">
                    <div class="name flex-1">
                        {{data.name}}
                    </div>
                    <div class="zan flex-0">
                        {{data.zan}}赞
                    </div>
                </div>
                <div class="time">
                    {{data.time}}
                </div>
                <div class="desc">
                    {{data.desc}}
                </div>
            </div>
    </div>
</template>

<script>
export default {
  props: {
    data: 
    {
      id: "",
      name: "",
      zan: "",
      time: "",
      desc: "",
      default: _ => {
        return {
          id: "",
          name: "新闻用户",
          zan: "0",
          time: "1-1 12:00",
          desc: "暂无评论"
        };
      }
    }
  }
};
</script>

<style scoped>
.discuss-item {
  padding: 10px;
  box-sizing: border-box;
  flex-wrap: nowrap;
}
.header {
  height: 32px;
  width: 32px;
  border-radius: 100%;
  background-color: #f2f2f2;
  margin-right: 10px;
}
.name {
  color: #409eff;
}
.time {
  color: #9a9a9a;
  font-size: 12px;
  line-height: 1.2;
}
.zan {
  color: #9a9a9a;
}
</style>
