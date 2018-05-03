<template>
    <div>
        <Back></Back>
        <van-uploader :after-read="onRead">
            <van-icon name="photograph" />
        </van-uploader>
    </div>
</template>

<script>
import Back from "../demo/Back";
export default {
  components: {
    Back
  },
  data(){
      return{
          imgUrl:''
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
          if (result.data.errorcode == 0) {
            this.$toast('上传成功')
             this.imgUrl=result.data.data.list[0].UploadFilename
          } else {
            this.$toast('上传失败')
          }
        })
        .catch(_ => {
          this.$toast('上传失败')
        });
    }
  }
};
</script>

<style>

</style>
