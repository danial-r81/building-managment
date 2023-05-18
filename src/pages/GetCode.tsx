import React from 'react';
import FormContainer from '../components/FormContainer';
import { InitialValues } from '../types/types';
import Input from '../components/Input';
import Button from '../components/ui/Button';

const GetCode = () => {
   return (
      <FormContainer
         action='code'
         title='کد را وارد نمایید'
         onSubmit={(values: InitialValues) => console.log(values)}>
         <Input name='code' placeholder='کد' />
         <Button text='تایید' />
      </FormContainer>
   );
};

export default GetCode;
