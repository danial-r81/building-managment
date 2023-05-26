import React from 'react';
import PollItem from '../components/PollItem';
import Button from '../components/ui/Button';

const Poll = () => {
   return (
      <div className='w-full h-screen flex justify-center items-center relative'>
         <div className='w-[450px] flex flex-col items-center border-2 shadow-md border-cyan-800 rounded-md mt-12'>
            <div className='w-full text-center text-black relative'>
               <h2 className='text-xl mt-3'>نظرسنجی</h2>
               <div className='w-[70%] h-[2px] bg-cyan-800 rounded-full absolute left-[50%] translate-x-[-50%] bottom-[-8px]' />
            </div>
            <div className='w-full h-[360px] mt-5 flex flex-col overflow-y-scroll no-scroll'>
               <PollItem id='q1' text='جواب 1' question='سوال مورد نظر' />
               <PollItem id='q1' text='جواب 1' question='سوال مورد نظر' />
               <PollItem id='q1' text='جواب 1' question='سوال مورد نظر' />
               <PollItem id='q1' text='جواب 1' question='سوال مورد نظر' />
               <PollItem id='q1' text='جواب 1' question='سوال مورد نظر' />
            </div>
            <div className='w-full m-3 flex justify-center items-center'>
               <Button text='ثبت' onSubmit={() => console.log('submit!')} />
            </div>
         </div>
      </div>
   );
};

export default Poll;
