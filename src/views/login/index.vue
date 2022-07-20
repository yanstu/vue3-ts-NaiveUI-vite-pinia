<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useAuthStore } from '@/store/modules/auth';
const redirect = ref<string | undefined>(undefined);

const form = reactive({
  email: 'uni-app@test.com',
  password: 'Vue3_Ts_Vite',
});
const authStore = useAuthStore();
const submit = (e: any) => {
  authStore.login(e.detail.value).then((res) => {
    setTimeout(() => {
    }, 1500);
  });
};
</script>

<template>
  <view class="container">
    <view class="title">登录</view>
    <view class="form-wrap">
      <form class="form" @submit="submit">
        <label class="form-item">
          <view class="form-label">邮箱:</view>
          <view class="form-element"><input name="email" :value="form.email" /></view>
        </label>
        <label class="form-item">
          <view class="form-label">密码:</view>
          <view class="form-element"><input type="password" name="password" :value="form.password" /></view>
        </label>
        <button form-type="submit"
          class="submit-btn border-4rp mt-44rpx h-88rpx flex items-center justify-center border-solid border-blue-200 bg-blue-400 hover:bg-blue-500 text-xs text-light-100 hover:text-light-100"
          hover-class="none">登录</button>
      </form>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  width: 80%;

  .title {
    padding: 320rpx 0 32rpx 0;
    text-align: center;
  }

  .form-wrap {
    padding: 20rpx 24rpx;
    box-shadow: 16rpx 16rpx 30rpx #e5e7eb;

    .form {
      .form-item {
        display: flex;
        height: 88rpx;
        border-bottom: 2rpx solid #dbeafe;
        align-items: center;

        .form-label {
          min-width: 96rpx;
        }

        .form-element {
          flex-grow: 1;
        }
      }

      .submit-btn {
        margin-top: 44rpx;
        border: 4rpx solid #bfdbfe;
        background-color: #60a5fa;
        border-radius: 8rpx;
        font-size: 28rpx;
        color: #ffffff;

        :hover {
          background-color: #3b82f6;
        }
      }
    }
  }
}
</style>
