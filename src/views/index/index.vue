<template>
  <n-layout has-sider>
    <n-layout-sider class="ui-menu" width="200">
      123
    </n-layout-sider>
    <n-layout>
      <n-layout-header class="ui-header">
        321
      </n-layout-header>
      <n-layout-content class="ui-main">
        <router-view></router-view>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { setCache } from '@/utils/cache';

setCache('test', '123')

onMounted(() => {
  window['$loading'].start()

  setTimeout(() => {
    window['$loading'].finish()
    /*window['$dialog'].warning({
      title: '警告',
      content: '你确定？',
      positiveText: '确定',
      negativeText: '不确定',
      onPositiveClick: () => {
        window['$message'].success('确定')
      },
      onNegativeClick: () => {
        window['$message'].error('不确定')
      }
    })*/
  }, 2000);
})
</script>

<style lang="scss" scoped>
.ui-menu {
  min-height: 100vh;
  background-color: #001428;
  color: #fff;
}

.ui-header {
  height: 50px;
  border-bottom: 1px solid #ddd;
}

.main-page-box {
  height: calc(100vh - 50px);
  overflow: auto;
}

.ui-main {
  padding: 10px;
}
</style>