import React from 'react';

const Poll = () => {
   return (
      <div className='w-full h-screen flex justify-center items-center relative'>
         <div className='w-[450px] h-[500px] border-2 shadow-md border-cyan-800 rounded-md mt-12'>
            <div className='w-full text-center text-black relative'>
               <h2 className='text-xl mt-3'>نظرسنجی</h2>
               <div className='w-[70%] h-[2px] bg-cyan-800 rounded-full absolute left-[50%] translate-x-[-50%] bottom-[-8px]' />
            </div>
         </div>
      </div>
   );
};

export default Poll;
