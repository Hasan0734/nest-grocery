
import React from 'react';

const BreadCrumbs = ({children}:any) => {
    return (
        <div className='border-b py-4'>
            <div className='max-w-8xl mx-auto px-4 2xl:px-0'>
               {children}
            </div>
        </div>
    );
};

export default BreadCrumbs;