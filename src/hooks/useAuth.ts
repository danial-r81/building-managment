import { InitialValues, User } from '../types/types';
import axios from '../services/httpServices';

const useAuth = (
   action: 'login' | 'register',
   data: InitialValues,
   token?: string
) => {
   switch (action) {
      case 'register':
         return axios.post<User>('/users/', JSON.stringify(data));
      case 'login':
         break;
      default:
         return undefined;
   }
};

export default useAuth;
