import { defineStore } from 'pinia';

interface UserState {}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({}),
  getters: {},
  actions: {},
});
