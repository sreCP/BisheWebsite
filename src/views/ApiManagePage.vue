<template>
   <n-card title="API管理" size="huge" :bordered="false">
    增加、删除、管理可用的API
  </n-card>
  <n-divider />
  <n-data-table
    :columns="columns"
    :data="data"
    :pagination="pagination"
    
   
  />

  </template>
  

<script lang="ts">
import { h, defineComponent, ref } from 'vue'
import { NCard, NDivider,NDataTable } from 'naive-ui'



export default defineComponent({
  components:{
    NCard, NDivider,NDataTable
  },
  setup () {
    return {
      inverted: ref(false),
    }
  }
})
</script>

<style scoped>
  .n-card {
  max-width: 300px;
  text-align: left;
}
  </style>