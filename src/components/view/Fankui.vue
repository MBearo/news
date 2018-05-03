<template>
  <div>
    <Back></Back>
    <div style="margin:10px 0">
      <div class="bg-white" style="padding:10px;box-sizing: border-box;">
        <h5>您的意见：</h5>
      </div>
      <div class="rongqi bg-white">
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
    </div>

    <van-button bottom-action @click="tijiao" type="primary">确定</van-button>
  </div>
</template>

<script>
import Back from "../demo/Back";
export default {
  components: {
    Back
  },
  methods: {
    tijiao() {
      this.$toast("提交成功");
    }
  }
};
</script>

<style scoped>
.rongqi {
  padding: 20px;
  box-sizing: border-box;
}
.rongqi > textarea {
  border-radius: 4px;
  border-color: #f2f2f2;
  width: 100%;
}
</style>
