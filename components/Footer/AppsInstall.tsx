import Link from 'next/link';
import React from 'react';

const AppsInstall = () => {
    return (
        <>
            <div className=' max-w-[258px] 2xl:max-w-[286px] p-2 pt-4'>
                <h3 className='text-[24px] text-[#253d4e] font-bold'>Install App</h3>
                <p className='text-sm font-medium text-gray-600'>From App Store of Google Play</p>
                <div className='flex gap-4 mt-6'>
                    <Link href={'/app-store'}>
                        <img src="/assets/app-store.jpg" alt="" />
                    </Link>
                    <Link href={'/app-store'} >
                        <img src="/assets/google-play.jpg" alt="" />
                    </Link>
                </div>
                <div>
                    <p className='mt-10 text-sm font-medium text-gray-600'>
                        Secured Payment Gateway
                    </p>
                    <img className='mt-3 w-[75%]' src="/assets/payment-method.png" alt="" />
                </div>
            </div>
        </>
    );
};

export default AppsInstall;