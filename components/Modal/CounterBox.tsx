import React from 'react';

const CounterBox = ({ days, hours, minutes, seconds, completed }: any) => {
    return (
        <div className='flex gap-2  mb-4'>
            <div className='bg-white w-[64px] h-[69px] p-2 border-2 rounded-md
             border-primary flex-col justify-center'>
                <h4 className='text-center text-primary 
                text-xl font-semibold'>{days}</h4>
                <span className='block text-center text-[16px]'>Days</span>
            </div>
            <div className='bg-white w-[64px] h-[69px] p-2 border-2 rounded-md
             border-primary flex-col justify-center'>
                <h4 className='text-center text-primary 
                text-xl font-semibold'>{hours}</h4>
                <span className='block text-center text-[16px]'>Hours</span>
            </div>
            <div className='bg-white w-[64px] h-[69px] p-2 border-2 rounded-md
             border-primary flex-col justify-center'>
                <h4 className='text-center text-primary 
                text-xl font-semibold'>{minutes}</h4>
                <span className='block text-center text-[16px]'>Mins</span>
            </div>
            <div className='bg-white w-[64px] h-[69px] p-2 border-2 rounded-md
             border-primary flex-col justify-center'>
                <h4 className='text-center text-primary 
                text-xl font-semibold'>{seconds}</h4>
                <span className='block text-center text-[16px]'>Secs</span>
            </div>
        </div>
    );
};

export default CounterBox;