import React from 'react';
import Countdown from 'react-countdown';

const CounterBox = ({ days, hours, minutes, seconds, completed }: any) => {

    return (
        <div className='flex justify-between gap-2 px-0 2xl:px-7 mb-4'>
            <div className='bg-white py-2 px-2 xl:py-3 xl:px-3 rounded-md text-center leading-5' >
                <span
                    className='text-[#3bb77e] text-sm 2xl:text-[19px] font-medium'>
                    {days}
                </span>
                <br />
                <span className='text-sm 2xl:text-[15px] font-medium text-gray-500'>Days</span>
            </div>
            <div className='bg-white py-2 px-2 xl:py-3 xl:px-3 rounded-md text-center leading-5' >
                <span
                    className='text-[#3bb77e] text-sm 2xl:text-[19px] font-medium'>
                    {hours}
                </span>
                <br />
                <span 
                className='text-sm 2xl:text-[15px]
                 font-medium text-gray-500'>Hrs</span>
            </div>
            <div className='bg-white py-2 px-2 xl:py-3 xl:px-3 rounded-md text-center leading-5' >
                <span
                    className='text-[#3bb77e] text-sm 2xl:text-[19px] font-medium'>
                    {minutes}
                </span>
                <br />
                <span className='text-sm 2xl:text-[15px] font-medium text-gray-500'>Mins</span>
            </div>
            <div className='bg-white py-2 px-2 xl:py-3 xl:px-3 rounded-md text-center leading-5' >
                <span
                    className='text-[#3bb77e] text-sm 2xl:text-[19px] font-medium'>
                    {seconds}
                </span>
                <br />
                <span className='text-sm 2xl:text-[15px] font-medium text-gray-500'>Sec</span>
            </div>
        </div>
    );
};

export default CounterBox;