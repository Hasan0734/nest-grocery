import React from 'react';

const ProductCount = ({total}:{total: number}) => {
    return (
        <>
            <div className='absolute p-1 -top-[15px] -right-1.5 rounded-full w-5 h-5 flex justify-center items-center bg-primary text-white'>
                <span className={'text-sm'}>{total}</span>
            </div>
        </>
    );
};

export default ProductCount;
