import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import MainLayout from '../layout/MainLayout';

export const router = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout />,
      errorElement: <h3>متاسفانه چیزی پیدا نکردیم...</h3>,
      children: [
         {
            path: '/',
            element: <App />,
         },
      ],
   },
]);
