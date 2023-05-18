import React from 'react';

const Button = ({ text }: { text: string }) => {
   return (
      <div className='w-full flex justify-center items-center mt-4'>
         <button
            className='bg-slate-800 w-[50%] p-3 text-white rounded-md'
            type='submit'>
            {text}
         </button>
      </div>
   );
};

export default Button;
