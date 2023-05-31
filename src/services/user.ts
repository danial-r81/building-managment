import { InitialValues, User } from '../types/types';
import axios from './httpServices';

// user register
export const userRegister = (userInfo: InitialValues) =>
   axios.post<User>('users/', JSON.stringify(userInfo));

// get user token
export const getUserToken = () =>
   axios.post<{ refresh: string; access: string }>(
      `users/token/`,
      JSON.stringify({
         username: 'Danialjj2081',
         password: 'danialjj@2081',
      })
   );
