<template>
  <div class="flex card" @click="onClick">
    <div class="text flex flex-1">
      <div class="title">{{data.title}}</div>
      <div class="flex desc">
        <div class="author">
          {{data.author}}
        </div>
        <div class="time">
          {{data.time}}
        </div>
        <div class="other">
          {{data.other}}
        </div>
      </div>
    </div>
    <div class="img bg-cover flex-0" :style="{backgroundImage:`url(${data.img})`}">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      id: "",
      img: "",
      title: "",
      author: "",
      time: "",
      other: "",
      default: _ => {
        return {
          id: "",
          img: "",
          title:
            "默认标题默认标题默认标题默认标题默认标题默认标题默认标题默认标题",
          author: "默认作者",
          time: "10-10",
          other: "127赞"
        };
      }
    },
    indexs: {
      default: ""
    }
  },
  methods: {
    onClick() {
      this.$emit("click", { id: this.data.id, indexs: this.indexs });
    }
  }
};
</script>

<style scoped>
.card {
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: white;
  padding: 15px;
  box-sizing: border-box;
}
.card:active {
  background-color: #e8e8e8;
}
.img {
  width: 112px;
  height: 71px;
  background-color: #f2f2f2;
  margin-left: 15px;
}
.title {
  font-size: 16px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  line-height: 1.4;
}
.text {
  flex-direction: column;
  justify-content: space-between;
}
.desc {
  color: #c8c8c8;
  font-size: 12px;
}
.desc > div {
  margin-right: 10px;
}
</style>
