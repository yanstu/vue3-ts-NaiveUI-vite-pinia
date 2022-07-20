<template>
    <n-config-provider :theme-overrides="themeOverrides">
        <n-loading-bar-provider>
            <n-dialog-provider>
                <dialog-content></dialog-content>
                <loading-content></loading-content>
                <n-notification-provider>
                    <n-message-provider>
                        <message-content></message-content>
                        <slot></slot>
                    </n-message-provider>
                </n-notification-provider>
            </n-dialog-provider>
        </n-loading-bar-provider>
    </n-config-provider>
</template>

<script setup lang="ts">
import {
    NDialogProvider,
    NNotificationProvider,
    NMessageProvider,
    NLoadingBarProvider,
    NConfigProvider,
} from 'naive-ui'
import { MessageContent } from './MessageContent'
import { DialogContent } from './DialogContent'
import { LoadingContent } from './LoadingContent'

const themeOverrides = reactive({
    common: {
        primaryColor: '#009688'
    },
    Menu: {
        itemTextColor: '#aaa',
        itemTextColorHover: '#fff',
        itemTextColorActive: '#fff',
        itemTextColorActiveHover: '#fff',
        itemTextColorChildActive: '#fff',
        itemTextColorChildActiveHover: '#fff',

        itemIconColor: '#aaa',
        itemIconColorHover: '#fff',
        itemIconColorActive: '#fff',
        itemIconColorChildActive: '#fff',
        itemIconColorActiveHover: '#fff',
        itemIconColorChildActiveHover: '#fff',

        itemColorHover: '#009688',
        itemColorActive: '#009688',
        itemColorActiveHover: '#009688',

        arrowColor: '#aaa',
        arrowColorHover: '#fff',
        arrowColorActive: '#fff',
        arrowColorChildActive: '#fff',
        arrowColorChildActiveHover: '#fff'
    }
});
</script>