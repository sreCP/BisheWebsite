<template>
  <n-space vertical class="ct">
    <n-space> <n-switch v-model:value="inverted" /> 夜间模式 </n-space>
    <n-layout class="item">
      <n-layout-header :inverted="inverted" bordered>
        企业大数据智能中枢平台
        <n-menu mode="horizontal" :inverted="inverted" :options="menuOptions"/>
      </n-layout-header>
      <n-layout has-sider>
        <n-layout-sider
          bordered
          show-trigger="bar"
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :native-scrollbar="false"
          :inverted="inverted"
          style="min-height: 640px"
        >
          <n-menu
            :inverted="inverted"
            :collapsed-width="64"
            :collapsed-icon-size="20"
            :options="menuOptions"
          />
        </n-layout-sider>
        <n-layout style="max-height: 320px" />
      </n-layout>
      <n-layout-footer :inverted="inverted" bordered>
        000
      </n-layout-footer>
    </n-layout>
  </n-space>
  <div>
    
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { h, defineComponent, ref, Component } from 'vue'
import { NIcon, NSpace, NLayout,
  NLayoutHeader, NLayoutSider,
  NLayoutFooter, NSwitch, NMenu
} from 'naive-ui'
import {
  BookOutline as BookIcon,
  BookmarkOutline as BookmarkIcon,
  CodeOutline as CodeIcon,
  CompassOutline as CompassIcon
} from '@vicons/ionicons5'

import router from './router/index'


function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: '主页',
    key: 'homepage',
    icon: renderIcon(BookIcon)
    ,onclick:() =>router.push('/')
  },
  {
    label: '接口服务',
    key: 'API-server',
    icon: renderIcon(BookIcon),
    children: [
    {
        label: 'API管理',
        key: 'API-manage',
        icon: renderIcon(BookmarkIcon)
        ,onclick:() =>router.push('/api-manage')
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
  components:{
    NIcon, NSpace, NLayout, NLayoutHeader, NLayoutSider, NLayoutFooter, NSwitch, NMenu
  },
  setup () {
    return {
      inverted: ref(false),
      menuOptions
    }
  }
})
</script>

<style>

.item {
  width: 1500px;
  height: 1000px;
  background-color: #ffffff;
  position: relative;
  left: -120px; 
  top: 0px; 
}
</style>