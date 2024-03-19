<template>
    <n-carousel autoplay>
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
      >
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
      >
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
      >
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
      >
    </n-carousel>
  </template>
  

<script>
import { h, defineComponent, ref } from 'vue'
import { NCarousel } from 'naive-ui'

export default defineComponent({
  components:{
    NCarousel
  },
  setup () {
    return {
      inverted: ref(false),
    }
  }
})
</script>

<style scoped>
  .carousel-img {
    width: 100%;
    height: 240px;
    object-fit: cover;
  }
  </style>