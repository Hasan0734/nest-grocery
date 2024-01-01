import React from 'react';

const CounterBox = ({ days, hours, minutes, seconds, completed }: any) => {
    return (
        <div className='flex gap-2  mb-4'>
            <div className='bg-white w-[64px] h-[60px] sm:h-[69px] px-2 py-1 sm:p-2 border-2 rounded-md
             border-primary flex-col items-center'>
                <span className='block text-center text-primary leading-5
              sm:text-xl font-semibold'>{days}</span>
                <span className='block text-center sm:text-[16px]'>Days</span>
            </div>
            <div className='bg-white w-[64px] h-[60px] sm:h-[69px] px-2 py-1 sm:p-2 border-2 rounded-md
             border-primary flex-col items-center'>
                <span className='block text-center text-primary leading-5
              sm:text-xl font-semibold'>{hours}</span>
                <span className='block text-center sm:text-[16px]'>Hours</span>
            </div>
            <div className='bg-white w-[64px] h-[60px] sm:h-[69px] px-2 py-1 sm:p-2 border-2 rounded-md
             border-primary flex-col items-center'>
                <h4 className='block text-center text-primary leading-5
              sm:text-xl font-semibold'>{minutes}</h4>
                <span className='block text-center sm:text-[16px]'>Min</span>
            </div>
            <div className='bg-white w-[64px] h-[60px] sm:h-[69px] px-2 py-1 sm:p-2 border-2 rounded-md
             border-primary flex-col items-center'>
                <h4 className='block text-center text-primary leading-5
              sm:text-xl font-semibold'>{seconds}</h4>
                <span className='block text-center sm:text-[16px]'>Secs</span>
            </div>
        </div>
    );
};

export default CounterBox;