import { AuthInitialValues, User } from '../types/types';
import axios from './httpServices';

// register
export const userRegister = (data: AuthInitialValues) =>
   axios.post<User>('users/', JSON.stringify(data));

// login
export const userLogin = (data: AuthInitialValues, token: string) =>
   axios.post('users/login/', JSON.stringify(data), {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   });
// get user token
export const getUserToken = () =>
   axios.post<{ refresh: string; access: string }>(
      `users/token/`,
      JSON.stringify({
         username: 'Danialjj2081',
         password: 'danialjj@2081',
      })
   );

// get user info
export const getUserInfo = (id: string, token: string) =>
   axios.get<User>(`users/${id}/`, {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   });
