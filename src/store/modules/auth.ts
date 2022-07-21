import { defineStore } from 'pinia';
import { getCache, removeCache, setCache } from '@/utils/cache';
import { TOKEN_KEY } from '@/enums/storageEnum';
import { UserLogin } from '@/api/user/types';
import { login } from '@/api/user';

interface AuthState {
  token?: string;
  name: string;
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: (): AuthState => ({
    token: undefined,
    name: '',
  }),
  getters: {
    getToken: (state) => {
      return state.token;
    },
    isLogin: (state): boolean => {
      return !!state.token;
    },
  },
  actions: {
    initToken() {
      this.token = getCache<string>(TOKEN_KEY) || undefined;
    },
    setToken(token: string | undefined) {
      setCache(TOKEN_KEY, token);
      this.token = token;
    },
    async login(params: UserLogin) {
      try {
        const {
          data: { Data },
        } = await login(params);
        return Promise.resolve(Data);
      } catch (err: any) {
        return Promise.reject(err);
      }
    },
  },
});
