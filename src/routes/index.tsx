import { createBrowserRouter } from 'react-router-dom';
import { App, GetCode, Login, MainLayout, Register } from '../pages';

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
         {
            path: '/login',
            element: <Login />,
         },
         {
            path: '/register',
            element: <Register />,
         },
         {
            path: '/get-code',
            element: <GetCode />,
         },
      ],
   },
]);
