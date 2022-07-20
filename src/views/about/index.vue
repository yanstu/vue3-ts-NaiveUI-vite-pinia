<script lang="ts" setup>
import { useAuthStore } from '@/store/modules/auth';
import { ref } from 'vue';
const authStore = useAuthStore();
const isLogin = ref(false);
const handleJump = (url: string) => {
};

// 登出
const handleLoginOut = () => {
  authStore.loginOut().then((res) => {
    isLogin.value = false;
  });
};
</script>

<template>
  <view class="container">
    <view class="head-wrap">
      <view class="avatar">
        <image class="img" src="/static/images/avatar.png"></image>
      </view>
      <view class="desc">{{ isLogin ? '测试' : '未登入' }}</view>
    </view>
    <view class="cell">
      <van-button @click="handleJump('/pages/log/index')">log</van-button>
    </view>
    <view class="cell" v-if="isLogin">
      <van-button @click="handleLoginOut">登出</van-button>
    </view>
    <view class="cell" v-else>
      <van-button @click="handleJump('/pages/login/index')">登入</van-button>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.container {
  padding: 96rpx 24rpx;

  .head-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;

    .avatar {
      height: 120rpx;
      width: 120rpx;
      border: 2rpx solid #d1d5db;
      border-radius: 120rpx;
      overflow: hidden;
      padding: 6rpx;

      .img {
        height: 100%;
        width: 100%;
      }
    }

    .desc {
      font-size: 28rpx;
      line-height: 120rpx;
    }
  }

  .cell {
    margin-top: 60rpx;
    text-align: center;
  }
}
</style>
