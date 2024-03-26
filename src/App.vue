<template>
  <n-message-provider>
  <n-space vertical class="ct">
    <n-space> <n-switch v-model:value="inverted"> 
    <template #checked>
      夜间模式
    </template>
    <template #unchecked>
      白天模式
    </template>
  </n-switch> </n-space>
    <n-layout class="item">
      <n-layout-header :inverted="inverted" bordered>
        企业大数据智能中枢平台
        <n-menu mode="horizontal" :inverted="inverted" :options="menuOptions" />
      </n-layout-header>
      <n-layout has-sider class="sider">
        <n-layout-sider bordered show-trigger="bar" collapse-mode="width" :collapsed-width="64" :width="240"
          :native-scrollbar="false" :inverted="inverted" style="">
          <n-menu :inverted="inverted" :collapsed-width="64" :collapsed-icon-size="20" :options="menuOptions" />
        </n-layout-sider>
        <n-layout>
          <router-view></router-view>
        </n-layout>
      </n-layout>
      <n-layout-footer :inverted="inverted" bordered>
        all rights reserved by me.
      </n-layout-footer>
    </n-layout>
  </n-space>
</n-message-provider>
</template>

<script lang="ts">
import { h, defineComponent, ref, Component } from 'vue'
import {
  NIcon, NSpace, NLayout,
  NLayoutHeader, NLayoutSider,
  NLayoutFooter, NSwitch, NMenu,
  NMessageProvider
} from 'naive-ui'
import {
  BookOutline as BookIcon,
  HomeOutline as HomeIcon,
  KeyOutline as KeyIcon,
  BookmarkOutline as BookmarkIcon,
  CodeOutline as CodeIcon,
  CompassOutline as CompassIcon,
  ManOutline as ManIcon,
  WomanOutline as WomanIcon,
  SettingsOutline as SettingsIcon
} from '@vicons/ionicons5'

import { RouterLink } from 'vue-router'


function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: () => h(RouterLink, { to: "/" }, { default: () => "主页" }),
    key: 'homepage',
    icon: renderIcon(HomeIcon)
  },
  {
    label: '接口服务',
    key: 'API-server',
    icon: renderIcon(KeyIcon),
    children: [
      {
        label: () => h(RouterLink, { to: "/api-manage" }, { default: () => "API管理" }),
        key: 'API-manage',
        icon: renderIcon(BookmarkIcon)
      },
      {
        label: () => h(RouterLink, { to: "/api-monitoring" }, { default: () => "API监控" }),
        key: 'API-monitoring',
        icon: renderIcon(CodeIcon)
      },
      {
        label: () => h(RouterLink, { to: "/api-approval" }, { default: () => "API审批" }),
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
        label: () => h(RouterLink, { to: "/platform-users" }, { default: () => "平台用户权限管理" }),
        key: 'Platform-users',
        icon: renderIcon(ManIcon)
      },
      {
        label: () => h(RouterLink, { to: "/outsiders" }, { default: () => "外部用户权限监控" }),
        key: 'Outsiders',
        icon: renderIcon(WomanIcon)
      }
    ]
  },
  {
    label: () => h(RouterLink, { to: "/settings" }, { default: () => "设置" }),
    key: 'settings',
    icon: renderIcon(SettingsIcon)
  }
]

export default defineComponent({
  components: {
    NIcon, NSpace, NLayout, NLayoutHeader, NLayoutSider, NLayoutFooter, NSwitch, NMenu, NMessageProvider
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

.sider{
  height: 600px;
}
</style>