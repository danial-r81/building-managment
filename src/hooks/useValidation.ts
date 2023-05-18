import * as Yup from 'yup';
import {
   InitialValues,
   ValidateSchemaAnyObject,
   ValidationSchema,
} from '../types/types';
type Action = 'login' | 'register' | 'code';

type ReturnType = [
   initialValues: InitialValues,
   validationSchema: Yup.ObjectSchema<
      ValidationSchema,
      Yup.AnyObject,
      ValidateSchemaAnyObject,
      ''
   >
];

const useValidation = (action: Action): ReturnType | undefined => {
   let initialValues: InitialValues;
   let validationSchema: Yup.ObjectSchema<
      ValidationSchema,
      Yup.AnyObject,
      ValidateSchemaAnyObject,
      ''
   >;

   const defaultErrorValidation = Yup.string().required(
      'پرکردن این فیلد الزامی است.'
   );

   const firstName = defaultErrorValidation;
   const lastName = defaultErrorValidation;
   const username = defaultErrorValidation;
   const password = defaultErrorValidation.min(
      6,
      'رمز عبور باید حداقل 6 کارکتر باشد.'
   );
   const phoneNumber = defaultErrorValidation.matches(
      /^(\+98|0098|98|0)?9\d{9}$/g,
      'شماره مبایل وارد شده معتبر نمی باشد.'
   );
   const email = defaultErrorValidation.email('ایمیل وارد شده نا معتبر است.');
   const code = defaultErrorValidation.min(5, 'کد وارد شده نامعتبر است.');

   switch (action) {
      case 'login':
         validationSchema = Yup.object().shape({
            username,
            password,
         });
         initialValues = {
            username: '',
            password: '',
         };
         return [initialValues, validationSchema];
      case 'register':
         validationSchema = Yup.object().shape({
            firstName,
            lastName,
            username,
            password,
            phoneNumber,
            email,
         });
         initialValues = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            phoneNumber: '',
            email: '',
         };
         return [initialValues, validationSchema];
      case 'code':
         initialValues = {
            code: '',
         };
         validationSchema = Yup.object().shape({
            code,
         });
         return [initialValues, validationSchema];
      default:
         return undefined;
   }
};

export default useValidation;
