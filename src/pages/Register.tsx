import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import { AuthInitialValues } from '../types/types';
import Input from '../components/Input';
import { userRegisterHandler } from '../redux/features/user/userSlice';
import { useAppDispatch } from '../hooks/redux-hooks';

const Register = () => {
   const dispatch = useAppDispatch();
   const navigate = useNavigate();
   return (
      <FormContainer
         action='register'
         title='ثبت نام'
         onSubmit={(values: AuthInitialValues) =>
            dispatch(userRegisterHandler({ navigate, userInfo: values }))
         }>
         <Input name='username' placeholder='نام کاربری' />
         <Input name='password' placeholder='رمز عبور' />
         <div className='w-full justify-center items-center'>
            <p className='text-gray-500 text-center my-2'>
               اگر حساب کاربری دارید از
               <Link className='text-slate-800' to={'/login'}>
                  اینجا
               </Link>{' '}
               وارد شوید
            </p>
         </div>
      </FormContainer>
   );
};

export default Register;
