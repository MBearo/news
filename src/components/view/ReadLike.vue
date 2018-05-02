<template>
    <div>
        
        <Back></Back>

        <van-checkbox-group v-model="result" @change="changes" style="margin:10px 0">
            <van-cell-group>
                <van-cell v-for="(item,index) in shuju" :title="item.Name" :key="index">
                    <van-checkbox :name="item.Name" />
                </van-cell>
            </van-cell-group>
        </van-checkbox-group>
        <van-button bottom-action @click="tijiao" type="primary">确定</van-button>
    </div>
</template>

<script>
import Back from "../demo/Back";
export default {
  components: {
    Back
  },
  data() {
    return {
      result: []
    };
  },
  computed: {
    shuju() {
      let list = JSON.stringify(this.$store.state.category);
      let first = JSON.parse(list);
      first.shift(1);
      return first;
    }
  },
  methods: {
    changes(index) {
      console.log(index);
    },
    tijiao() {},
    go() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>

</style>
