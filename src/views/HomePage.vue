<template>
  <n-flex>
  <n-card hoverable
    title="☀ 日访问量"
    embedded
    :bordered="true"
  >
  <n-statistic label="本日访问用户共">
    <n-number-animation ref="numberAnimationInstRef" :from="0" :to="99272" />
    <template #suffix>
       人次
    </template>
  </n-statistic>
  </n-card>
  
    <n-card hoverable
    title="🌙 月访问量"
    embedded
    :bordered="true"
  >
  <n-statistic label="本月访问用户共">
    <n-number-animation ref="numberAnimationInstRef" :from="0" :to="92273" />
    <template #suffix>
       人次
    </template>
  </n-statistic>
  </n-card>

  <n-card hoverable
    title="🔌 可用接口数量"
    embedded
    :bordered="true"
  >
  <n-statistic label="目前共有">
    <n-number-animation ref="numberAnimationInstRef" :from="0" :to="9" />
    <template #suffix>
       个接口正常运行
    </template>
  </n-statistic>
  </n-card>

  <n-card hoverable
    title="👨 用户数量"
    embedded
    :bordered="true"
  >
  <n-statistic label="目前共有">
    <n-number-animation ref="numberAnimationInstRef" :from="0" :to="1" />
    <template #suffix>
       个注册用户
    </template>
  </n-statistic>
  </n-card>
  <n-divider />
</n-flex>
  <n-empty description="内容未显示"/>

</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'
import { NCarousel, NCard, NStatistic, NNumberAnimation, NFlex, NEmpty, NDivider } from 'naive-ui'

export default defineComponent({
  components: {
    NCarousel,NCard,NStatistic,NNumberAnimation,NFlex,NEmpty,NDivider
  },
  setup() {
    return {
      inverted: ref(false),
    }
  }
})
</script>

<style scoped>
.carousel-img {
  width: 100%;
  height: 2400px;
  object-fit: cover;
}
.n-card {
  color: aqua;
  max-width: 300px;
}
css.container{display: flex}
</style>