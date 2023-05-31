import { ReactNode } from 'react';
import * as Yup from 'yup';

export interface User {
   instances: {
      id: number;
      is_manager: boolean;
      is_resident: boolean;
      last_login: null;
      is_superuser: boolean;
      username: string;
      first_name: string;
      last_name: string;
      email: string;
      is_staff: boolean;
      is_active: boolean;
      date_joined: string;
      phone: null;
      role: string;
      is_phone_activated: boolean;
      is_email_activated: boolean;
   };
}

export interface LoginInitialValues {
   username: string;
   password: string;
}

export interface RegisterInitialValues {
   firstName: string;
   lastName: string;
   username: string;
   password: string;
   phoneNumber: string;
   email: string;
}

export interface GetCodeInitialValues {
   code: string;
}

export type InitialValues = LoginInitialValues | GetCodeInitialValues;

export interface LoginValidationSchema {
   username: string;
   password: string;
}

export interface RegisterValidationSchema {
   firstName: string;
   lastName: string;
   username: string;
   password: string;
   phoneNumber: string;
   email: string;
}

export interface GetCodeValidationSchema {
   code: string;
}

interface LoginSchemaAnyObject {
   username: undefined;
   password: undefined;
}

interface RegisterSchemaAnyObject {
   firstName: undefined;
   lastName: undefined;
   username: undefined;
   password: undefined;
   phoneNumber: undefined;
   email: undefined;
}

interface GetCodeSchemaAnyObject {
   code: undefined;
}

export type ValidateSchemaAnyObject =
   | LoginSchemaAnyObject
   | RegisterSchemaAnyObject
   | GetCodeSchemaAnyObject;

export type ValidationSchema =
   | LoginValidationSchema
   | RegisterValidationSchema
   | GetCodeValidationSchema;

export interface FormContainerProps {
   children: ReactNode;
   initialValues: RegisterInitialValues | LoginInitialValues;
   validationSchema: Yup.ObjectSchema<
      ValidationSchema,
      Yup.AnyObject,
      ValidateSchemaAnyObject,
      ''
   >;
}
