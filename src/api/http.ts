import axiosInstance from './axios';
import { RequestHttpEnum, ContentTypeEnum } from '@/enums/httpEnum';

export interface responseResult<T> {
  Msg: number;
  Data?: T;
  Code: number;
}

export const get = (url: string, params?: object) => {
  return axiosInstance({
    url,
    method: RequestHttpEnum.GET,
    params,
  });
};

export const post = (url: string, data?: object, headersType?: string) => {
  return axiosInstance({
    url,
    method: RequestHttpEnum.POST,
    data: data || {},
    headers: {
      'Content-Type': headersType || ContentTypeEnum.FORM_URLENCODED,
    },
  });
};

export const put = (
  url: string,
  data?: object,
  headersType?: ContentTypeEnum
) => {
  return axiosInstance({
    url,
    method: RequestHttpEnum.PUT,
    data: data || {},
    headers: {
      'Content-Type': headersType || ContentTypeEnum.JSON,
    },
  });
};

export const del = (url: string, params?: object) => {
  return axiosInstance({
    url,
    method: RequestHttpEnum.DELETE,
    params,
  });
};
