<script setup lang="ts">
import { setCache } from '@/utils/catch';
setCache('test', '123')

const title = ref('uni-app vue3 ts --Vite');
const list = ref(['未付款', '待评价', '已付款'])
const current = ref(1)

</script>
<template>
  <view class="content">
    <image class="logo" src="/static/svg/LOGO.svg" />
    <view class="text-area">
      <text class="">{{ title }}111</text>
    </view>
  </view>
</template>
<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 280rpx auto 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
  margin-bottom: 60rpx;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
