<template>
  <n-space vertical class="ct">
    <n-space> <n-switch v-model:value="inverted" /> 夜间模式 </n-space>
    <n-layout class="item">
      <n-layout-header :inverted="inverted" bordered>
        企业大数据智能中枢平台
        <n-menu mode="horizontal" :inverted="inverted" :options="menuOptions" />
      </n-layout-header>
      <n-layout has-sider>
        <n-layout-sider bordered show-trigger="bar" collapse-mode="width" :collapsed-width="64" :width="240"
          :native-scrollbar="false" :inverted="inverted" style="">
          <n-menu :inverted="inverted" :collapsed-width="64" :collapsed-icon-size="20" :options="menuOptions" />
        </n-layout-sider>
        <n-layout>
          <router-view></router-view>
        </n-layout>
      </n-layout>
      <n-layout-footer :inverted="inverted" bordered>
        000
      </n-layout-footer>
    </n-layout>
  </n-space>
</template>

<script lang="ts">
import { h, defineComponent, ref, Component } from 'vue'
import {
  NIcon, NSpace, NLayout,
  NLayoutHeader, NLayoutSider,
  NLayoutFooter, NSwitch, NMenu
} from 'naive-ui'
import {
  BookOutline as BookIcon,
  BookmarkOutline as BookmarkIcon,
  CodeOutline as CodeIcon,
  CompassOutline as CompassIcon
} from '@vicons/ionicons5'

import { RouterLink } from 'vue-router'


function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: () => h(RouterLink, { to: "/" }, { default: () => "主页" }),
    key: 'homepage',
    icon: renderIcon(BookIcon)
  },
  {
    label: '接口服务',
    key: 'API-server',
    icon: renderIcon(BookIcon),
    children: [
      {
        label: () => h(RouterLink, { to: "/api-manage" }, { default: () => "API管理" }),
        key: 'API-manage',
        icon: renderIcon(BookmarkIcon)
      },
      {
        label: 'API监控',
        key: 'API-monitoring',
        icon: renderIcon(CodeIcon)
      },
      {
        label: 'API审批',
        key: 'API-approval',
        icon: renderIcon(CompassIcon)
      }

    ]
  },
  {
    label: '权限管理',
    key: 'authorization-management',
    icon: renderIcon(BookIcon),
    children: [
      {
        label: '平台用户权限管理',
        key: 'Platform users'
      },
      {
        label: '外部用户权限监控',
        key: 'Outsiders'
      }
    ]
  }
]

export default defineComponent({
  components: {
    NIcon, NSpace, NLayout, NLayoutHeader, NLayoutSider, NLayoutFooter, NSwitch, NMenu
  },
  setup() {
    return {
      inverted: ref(false),
      menuOptions
    }
  }
})
</script>

<style>
.ct {
  width: 100vw;
  height: 100vh;
}

.item {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  position: relative;
  left: -120px;
  top: 0px;
}
</style>