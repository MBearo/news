<template>
  <div>
      <div class="flex discuss-item" v-for="(item,index) in 6" :key="index+'item'">
          <div class="flex-0">
              <div class="header">

              </div>
          </div>
          <div class="flex-1">
              <div class="flex">
                  <div class="name flex-1">
                      用户姓名
                  </div>
                  <div class="zan flex-0">
                      2345赞
                  </div>
              </div>
              <div class="time">
                  2017-10-10
              </div>
              <div class="desc">
                  阿拉啦啦啦阿拉啦啦啦阿拉啦啦啦阿拉啦啦啦拉啦啦啦拉啦啦啦拉啦啦啦拉啦啦啦
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.discuss-item{
    padding: 10px;
    box-sizing: border-box;
    flex-wrap: nowrap;
}
.header{
    height: 32px;
    width: 32px;
    border-radius: 100%;
    background-color: #f2f2f2;
    margin-right: 10px;
}
.name{
    color: #409EFF;
}
.time{
    color: #9A9A9A;
    font-size: 12px;
    line-height: 1.2;
}
.zan{
    color: #9A9A9A;
}
</style>
