import React from 'react';
import { Link } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import { InitialValues } from '../types/types';
import Input from '../components/Input';
import Button from '../components/ui/Button';

const Login = () => {
   return (
      <FormContainer
         action='login'
         title='ورود'
         onSubmit={(values: InitialValues) => console.log(values)}>
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
