export interface UserLogin {
  /**
   * 用户名
   */
  username: string;
  password: string;
}

export interface UserModel extends UserLogin {
  token: string;
}
