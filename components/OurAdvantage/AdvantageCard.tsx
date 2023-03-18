import React from 'react';

const AdvantageCard = ({ advantage}:any) => {
    return (
        <>
            <div className='flex gap-5 items-center advantage_card bg-[#f4f6fa] p-5 rounded-lg  xl:last:hidden'>
                <div>
                    <img className='w-[60px] advantage_image' src={advantage.icon} alt="" />
                </div>
                <div>
                    <h2
                        className='text-[18px] font-semibold '>
                        {advantage.title }
                    </h2>
                    <span className='text-[#7e7e7e]'>Order $50 or more</span>
                </div>
            </div>
        </>
    );
};

export default AdvantageCard;