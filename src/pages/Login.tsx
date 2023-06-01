import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import { AuthInitialValues } from '../types/types';
import Input from '../components/Input';
import { useAppDispatch } from '../hooks/redux-hooks';
import { userLoginHandler } from '../redux/features/user/userSlice';

const Login = () => {
   const dispatch = useAppDispatch();
   const navigate = useNavigate();
   return (
      <FormContainer
         action='login'
         title='ورود'
         onSubmit={(values: AuthInitialValues) =>
            dispatch(userLoginHandler({ navigate, userInfo: values }))
         }>
         <Input name='username' placeholder='نام کاربری' />
         <Input name='password' placeholder='رمز عبور' />
         {/* <Button text='ورود' /> */}
         <div className='w-full justify-center items-center'>
            <p className='text-gray-500 text-center my-2'>
               اگر حساب کاربری ندارید از{' '}
               <Link className='text-slate-800' to={'/register'}>
                  اینجا
               </Link>{' '}
               ثبت نام کنید
            </p>
         </div>
      </FormContainer>
   );
};

export default Login;
