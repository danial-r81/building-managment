import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserToken, userRegister } from '../../../services/user';
import { InitialValues, User } from '../../../types/types';
import axios, { Axios, AxiosPromise, AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
import Cookies from 'universal-cookie';
import useAuth from '../../../hooks/useAuth';

interface UseAuthParams {
   action: 'login' | 'register';
   userInfo: InitialValues;
}

const initialState: User = {
   instances: {
      id: 0,
      is_manager: false,
      is_resident: false,
      last_login: null,
      is_superuser: false,
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      is_staff: false,
      is_active: false,
      date_joined: '',
      phone: null,
      role: '',
      is_email_activated: false,
      is_phone_activated: false,
   },
};

export const useAuthHandler = createAsyncThunk(
   'user/register',
   async (
      { action, userInfo }: UseAuthParams,
      { rejectWithValue, dispatch }
   ) => {
      try {
         const { data, status } = await useAuth(action, userInfo)!;
         if (status === 201) {
            dispatch(getUserTokenHandler());
            toast.success('ثبت نام با موفقیت انجام شد');
            return data;
         }
      } catch (e) {
         if (axios.isAxiosError(e)) {
            if (e.response?.status === 400) {
               toast.warning('کاربر با این مشخصات وجود دارد');
            }
            return rejectWithValue(e.response);
         }
      }
   }
);

const getUserTokenHandler = createAsyncThunk('user/token', async () => {
   try {
      const { data, status } = await getUserToken();

      if (status === 200) {
         return data;
      }
   } catch (error) {}
});

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder.addCase(useAuthHandler.fulfilled, (_, action) => {
         return action.payload;
      });
      builder.addCase(getUserTokenHandler.fulfilled, (_, action) => {
         const cookie = new Cookies();
         cookie.set('user_access_token', action.payload?.access);
         cookie.set('user_refresh_token', action.payload?.refresh);
      });
   },
});

export default userSlice.reducer;
