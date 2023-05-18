import React from 'react';
import { Link } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import { InitialValues } from '../types/types';
import Input from '../components/Input';
import Button from '../components/ui/Button';

const Register = () => {
   return (
      <FormContainer
         action='register'
         title='ثبت نام'
         onSubmit={(values: InitialValues) => console.log(values)}>
         <Input name='firstName' placeholder='نام' />
         <Input name='lastName' placeholder='نام خانوادگی' />
         <Input name='username' placeholder='نام کاربری' />
         <Input name='password' placeholder='رمز عبور' />
         <Input name='phoneNumber' placeholder='شماره مبایل' />
         <Input name='email' placeholder='ایمیل' />
         <Button text='ارسال کد' />
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
