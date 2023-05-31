import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

axios.interceptors.request.use(null, (error) => {
   const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
   if (!expectedErrors) {
      toast.error('مشکلی از سمت سرور رخ داده است');
   }

   return Promise.reject(error);
});

export default {
   get: axios.get,
   post: axios.post,
   put: axios.put,
   delete: axios.delete,
};
