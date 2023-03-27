import Link from 'next/link';
import React from 'react';

const WhatWeProvideCard = ({ provide }: any) => {
    return (
        <>
            <div className='px-6 py-10 border border-gray-200 rounded-xl hover:shadow-[3px_6px_15px_rgba(0,0,0,0.05)]'>
                <div className='pb-7 pt-4 flex justify-center'>
                    <img className='w-[20%] sm:w-[30%]' src={provide.icon} alt="" />
                </div>
                <h2
                    className='text-center font-bold 
                    text-[#253d4e] text-[24px] mb-6 '>
                    {provide.title}
                </h2>

                <p className='text-center text-[#7e7e7e] text-[16px] font-medium mb-6 line-clamp-3'>
                    {provide.about}
                </p>

                <Link href={"/"} className="text-[#3bb77e] font-medium text-center block">
                    Read More
                </Link>
            </div>
        </>
    );
};

export default WhatWeProvideCard;