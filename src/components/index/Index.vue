<template>
  <div class="flex content">
      <Topbar1 class="flex-0"></Topbar1>
      <NewList1 class="flex-1 list"></NewList1>
  </div>
</template>

<script>
import Topbar1 from '../index/Topbar1'
import NewList1 from '../index/NewList1'
export default {
    components:{
        Topbar1,
        NewList1
    }
}
</script>

<style scoped>
.content{
    flex-direction: column;
    flex-wrap: nowrap;
}
.list{
    overflow: auto;
}
</style>
