import { Form, Formik } from 'formik';
import React from 'react';
import useValidation from '../hooks/useValidation';
import { InitialValues } from '../types/types';

const FormContainer = ({
   children,
   action,
   title,
   onSubmit,
}: {
   children: React.ReactNode;
   action: 'login' | 'register' | 'code';
   title: string;
   onSubmit: (values: InitialValues) => void;
}) => {
   const [initialValues, validationSchema] = useValidation(action)!;

   return (
      <div className='w-full h-screen flex justify-center items-center relative'>
         <div className='w-[500px] border-2 shadow-md mt-16 py-2 rounded-md'>
            <div className='w-full flex justify-center items-center'>
               <h2 className='font-bold text-lg text-black'>{title}</h2>
            </div>
            <Formik
               initialValues={initialValues}
               validationSchema={validationSchema}
               onSubmit={onSubmit}>
               <Form>{children}</Form>
            </Formik>
         </div>
      </div>
   );
};

export default FormContainer;
