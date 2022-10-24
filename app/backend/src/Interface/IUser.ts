export interface IUser {
    id: number;
    username: string;
    email: string;
    password: string;
    role: string;
  }

  export type UserLogin = Pick<IUser, 'email' | 'password'>;