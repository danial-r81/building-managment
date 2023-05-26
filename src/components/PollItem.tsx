import React from 'react';

const PollContent = ({ text, id }: { text: string; id: string }) => {
   return (
      <>
         <div className='w-full flex justify-between items-center my-1'>
            <input
               className='h-6 w-6 rounded-md'
               type='checkbox'
               name={id}
               id={id}
            />
            <label
               htmlFor={id}
               className='w-[92%] border-2 text-base !rounded-md border-slate-700 text-center'>
               {text}
            </label>
         </div>
      </>
   );
};

const PollItem = ({
   question,
   text,
   id,
}: {
   question: string;
   text: string;
   id: string;
}) => {
   return (
      <div className='w-full flex flex-col p-2'>
         <p className='text-lg text-black'>سوال مورد نظر</p>
         <div className='w-full px-5 flex flex-col'>
            <PollContent text='جواب 1' id='q1' />
            <PollContent text='جواب 2' id='q2' />
         </div>
      </div>
   );
};

export default PollItem;
