import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
   return (
      <div className='w-full h-screen relative'>
         <ToastContainer position='top-right' theme='colored' />
         <Navbar />
         <Outlet />
      </div>
   );
};

export default MainLayout;
