import { createBrowserRouter } from 'react-router-dom';
import { Home, GetCode, Login, MainLayout, Register, Poll } from '../pages';

export const router = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout />,
      errorElement: <h3>متاسفانه چیزی پیدا نکردیم...</h3>,
      children: [
         {
            path: '/',
            element: <Home />,
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
         {
            path: '/poll',
            element: <Poll />,
         },
      ],
   },
]);
