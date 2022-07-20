import { getEnvValue, getPkgVersion, isDevMode } from '@/utils/env';

// 系统默认缓存时间 单位秒
export const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7;

const PREFIX =
  getEnvValue<string>('VITE_APP_CACHE_PREFIX') ||
  getEnvValue<string>('VITE_APP_TITLE') ||
  '';
export const DEFAULT_PREFIX_KEY = `${PREFIX}${getPkgVersion()}`;

// aes 加密配置
export const cacheCipher = {
  key: 'aQ0{gD1@c_0@oH5:',
  iv: 'aF0#gC_$hE1$eA1!',
};

// 系统缓存是否使用 aes 加密
export const enableStorageEncryption = !isDevMode();
