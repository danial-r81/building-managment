import { Form, Formik } from 'formik';
import React from 'react';
import useValidation from '../hooks/useValidation';
import { AuthInitialValues } from '../types/types';
import Cookies from 'universal-cookie';
import { Navigate } from 'react-router';

const FormContainer = ({
   children,
   action,
   title,
   onSubmit,
}: {
   children: React.ReactNode;
   action: 'login' | 'register' | 'code';
   title: string;
   onSubmit: (values: AuthInitialValues) => void;
}) => {
   const [initialValues, validationSchema] = useValidation(action)!;
   const cookie = new Cookies();
   const token = cookie.get('user_access_token');

   return (
      <>
         {!token ? (
            <div className='w-full h-screen flex justify-center items-center relative'>
               <div className='w-[500px] border-2 shadow-md mt-16 py-2 rounded-md'>
                  <div className='w-full flex justify-center items-center'>
                     <h2 className='font-bold text-lg text-black'>{title}</h2>
                  </div>
                  <Formik
                     initialValues={initialValues}
                     validationSchema={validationSchema}
                     onSubmit={onSubmit}>
                     <Form>
                        {children}
                        <div className='w-full flex justify-center items-center mt-4'>
                           <button
                              className='bg-slate-800 w-[50%] p-3 text-white rounded-md'
                              type='submit'>
                              {title}
                           </button>
                        </div>
                     </Form>
                  </Formik>
               </div>
            </div>
         ) : (
            <Navigate to={'/'} />
         )}
      </>
   );
};

export default FormContainer;
