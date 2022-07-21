import { AxiosPromise } from 'axios';
import { get, responseResult } from '../http';
import { UserLogin, UserModel } from './types';

export const login = (data: UserLogin) => {
  return get('/api/user/login', data) as AxiosPromise<
    responseResult<UserModel>
  >;
};
