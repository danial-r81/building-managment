import { ReactNode } from 'react';
import * as Yup from 'yup';

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

export type InitialValues =
   | LoginInitialValues
   | RegisterInitialValues
   | GetCodeInitialValues;

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
