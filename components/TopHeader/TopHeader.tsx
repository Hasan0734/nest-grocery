import React from 'react';
import HeaderMenu from './HeaderMenu';
import LanguageAndCurrency from './LanguageAndCurrency';
import TopNotification from './TopNotification';

const TopHeader = () => {

    return (
        <>
            <div className='hidden lg:block border-b border-gray-100'>
                <div className='container mx-auto px-4 '>
                    <div className='flex flex-col lg:flex-row justify-between items-center'>

                        <HeaderMenu />

                        <TopNotification />

                        <LanguageAndCurrency />
                    </div>
                </div>
            </div>
            <div className='p-1 block lg:hidden'>
                <div className='sm-top-header p-4'>
                    <h3 className='text-center text-sm  sm:text-xl font-semibold text-gray-700'>Senior's Member Discount Days! Save 25% Each Tuesday</h3>
                </div>
           </div>
        </>
    );
};

export default TopHeader;