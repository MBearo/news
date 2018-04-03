<template>
    <div class="topbar flex bg-white">
        <div class="flex-0 topba_button">
            <i class="iconfont icon-back"></i>
        </div>
        <div class="flex-1">

        </div>
        <div class="flex-0 topba_button"></div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
.topba_button:active{
    background-color: #e8e8e8;
}
</style>
