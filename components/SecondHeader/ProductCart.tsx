import React from 'react';
import {  XMarkIcon } from '@heroicons/react/24/outline'

const ProductCart = () => {
    return (
        <>
            <div className='flex gap-3 px-4 border-b border-gray-200 py-6'>
                <div className=''>

                    <img className='w-[90px] h-[80px] border p-1 border-gray-200 rounded-md '
                         src='/assets/popular-product/product-1-1.jpg' alt={"product-image"} />
                </div>
                <div>
                    <div className='flex justify-between items-center gap-2'>
                        <h3 className='text-[16px] text-gray-600'>Angie's Sweet & Salty Kettle Corn</h3>
                        <div>
                            <button className='hover:bg-primary rounded-full p-[6px] w-7 h-7 border border-gray-200 '>
                                <XMarkIcon className=' text-gray-500 hover:text-white' /></button>
                        </div>
                    </div>
                    <h4 className='text-sm text-gray-600'>1X$48.59</h4>
                </div>
            </div>
        </>
    );
};

export default ProductCart;