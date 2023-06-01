import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
   getUserInfo,
   getUserToken,
   userLogin,
   userRegister,
} from '../../../services/user';
import { AuthInitialValues, User } from '../../../types/types';
import axios from 'axios';
import { toast } from 'react-toastify';
import Cookies from 'universal-cookie';
import { NavigateFunction } from 'react-router';

interface UseAuthParams {
   userInfo: AuthInitialValues;
   navigate: NavigateFunction;
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

// Register
export const userRegisterHandler = createAsyncThunk(
   'user/register',
   async (
      { userInfo, navigate }: UseAuthParams,
      { rejectWithValue, dispatch }
   ) => {
      try {
         const { data, status } = await userRegister(userInfo);
         if (status === 201) {
            dispatch(getUserTokenHandler());
            toast.success('ثبت نام با موفقیت انجام شد');
            navigate('/', { replace: true });
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

// get token
const getUserTokenHandler = createAsyncThunk('user/token', async () => {
   try {
      const { data, status } = await getUserToken();

      if (status === 200) {
         return data;
      }
   } catch (error) {}
});

// login
export const userLoginHandler = createAsyncThunk(
   'user/login',
   async ({ navigate, userInfo }: UseAuthParams, { dispatch }) => {
      try {
         const cookie = new Cookies();
         const token = cookie.get('user_access_token');
         const { status } = await userLogin(userInfo, token)!;
         if (status === 200) {
            dispatch(getUserInfoHandler());
            navigate('/', { replace: true });
            toast.success('شما با موفقیت وارد شدید');
         }
      } catch (e) {
         if (axios.isAxiosError(e)) {
            if (e.response?.status === 401) {
               toast.error('نام کاربری یا رمز عبور اشتباه است');
            }
            if (e.response?.status === 404) {
               toast.error('کاربری با این مشخصات وجود ندارد');
            }
         }
      }
   }
);

// get user info
export const getUserInfoHandler = createAsyncThunk(
   'user/getUserInfo',
   async () => {
      try {
         const cookie = new Cookies();
         const userId = localStorage.getItem('id');
         const token = cookie.get('user_access_token');
         if (userId && token) {
            const { data, status } = await getUserInfo(userId, token);
            if (status === 200) {
               return data;
            }
         }
      } catch (e) {}
   }
);

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder
         .addCase(userRegisterHandler.fulfilled, (_, action) => {
            localStorage.setItem('id', String(action.payload?.instances.id));
            return action.payload;
         })
         .addCase(getUserTokenHandler.fulfilled, (_, action) => {
            const cookie = new Cookies();
            cookie.set('user_access_token', action.payload?.access);
            cookie.set('user_refresh_token', action.payload?.refresh);
         })
         .addCase(getUserInfoHandler.fulfilled, (_, action) => action.payload);
   },
});

export default userSlice.reducer;
