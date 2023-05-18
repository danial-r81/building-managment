import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ href, text }: { href: string; text: string }) => {
   return (
      <li className='px-4 py-2 mx-5'>
         <Link
            className='hover:text-cyan-600 transition duration-200'
            to={href}>
            {text}
         </Link>
      </li>
   );
};

const Navbar = () => {
   return (
      <div className='w-full h-20 bg-white shadow-md flex justify-around items-center fixed top-0 z-10'>
         <div className='w-[120px] h-[140px] bg-cyan-900' />
         <ul className='flex items-center justify-center mx-3'>
            <NavItem href='/' text='صفحه اصلی' />
            <NavItem href='/poll' text='نظرسنجی' />
            <NavItem href='/about-us' text='درباره ما' />
            <NavItem href='/contact-us' text='تماس با ما' />
         </ul>
         <div className='flex items-center mx-3'>
            <Link
               to='/login'
               className='py-1 px-3 text-white rounded-sm shadow-md transition bg-cyan-800'>
               ورود | عضویت
            </Link>
         </div>
      </div>
   );
};

export default Navbar;
