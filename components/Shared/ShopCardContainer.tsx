import React from 'react';

const ShopCardContainer = ({ children, title }: any) => {
    return (
        <div className='mt-16 border border-gray-200 rounded-2xl 
        shadow-[8px_5px_10px_rgba(0,0,0,0.05)] p-5 lg:p-8 bg-white'>
            <h1
                className='text-gray-black text-2xl font-bold
             border-b border-gray-200 pb-4 relative before:absolute 
             before:w-20 before:left-0 before:bottom-0
              before:bg-green-black before:h-[1px]'>{title}</h1>

            <div className='mt-10'>
                {children}
            </div>

        </div>
    );
};

export default ShopCardContainer;