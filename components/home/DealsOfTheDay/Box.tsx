import React from 'react';

interface boxprops {
    value: string,
    name: string
}

const Box = ({ value, name }: boxprops) => {
    return (
        <>
            <div className='bg-white w-[60px] p-3 h-[65px] rounded-md text-center leading-5' >
                <span
                    className='text-primary text-sm 2xl:text-[19px] font-medium'>
                    {value}
                </span>
                <br />
                <span className='text-sm 2xl:text-[15px] 
                font-medium text-gray-500'>{name}</span>
            </div>
        </>
    );
};

export default Box;