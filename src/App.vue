<template>
  <n-loading-bar-provider>
    <n-dialog-provider>
      <dialog-content></dialog-content>
      <loading-content></loading-content>
      <n-notification-provider>
        <n-message-provider>
          <message-content></message-content>
          <router-view></router-view>
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-loading-bar-provider>
</template>

<script setup lang="ts">
import {
  NDialogProvider,
  NNotificationProvider,
  NMessageProvider,
  NLoadingBarProvider
} from 'naive-ui'
import { MessageContent } from '@/components/naivePlugins/MessageContent'
import { DialogContent } from '@/components/naivePlugins/DialogContent'
import { LoadingContent } from '@/components/naivePlugins/LoadingContent'
</script>

<style>
</style>
