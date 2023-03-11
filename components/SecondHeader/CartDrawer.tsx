import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import ProductCart from './ProductCart';

const CartDrawer = ({ handleOutSideClick, cartDrawer, setCartDrawer }: any) => {
    return (
        <>
            <div
                onClick={handleOutSideClick}
                className={`z-50 block lg:hidden absolute right-0  transition-all  w-full ${!cartDrawer ? "invisible" : "visible bg-gray-800/40"}  
            top-0 h-screen`}>
                <div className={`absolute duration-500 right-0 opacity-0 ${cartDrawer ? "opacity-100 w-4/5" : " invisible w-0"} bg-white h-screen  overflow-y-scroll`}>
                    <div
                        className='py-5 px-7 border-b border-gray-200 sticky
                         top-0 bg-white z-30'>
                        <XMarkIcon onClick={() => setCartDrawer(false)} className='cursor-pointer  hover:rotate-180 duration-300 transform-gpu text-[#3BB77E] p-1 w-6 rounded-full bg-[#3BB77E]/30' />

                    </div>
                    <div className='max-h-[500px] overflow-y-scroll'>
                        <ProductCart />
                        <ProductCart />
                        <ProductCart />
                        <ProductCart />
                        <ProductCart />
                        <ProductCart />
                    </div>
                    <div className='p-3'>
                        <div className='bg-[#3BB77E]/30  p-[10px] rounded font-quicksand font-semibold'>
                            <h4 className='text-gray-500'>Sub total: <span className='text-[#3BB77E]'>$45.85</span></h4>
                        </div>
                        <div className='flex justify-between items-center mt-4'>
                            <Link href="/view-cart" legacyBehavior>
                                <a className='bg-[#3BB77E] px-4 py-3 text-white font-normal text-sm rounded'>View Cart</a>
                            </Link>
                            <Link href="/view-cart" legacyBehavior>
                                <a className='bg-[#3BB77E] px-4 py-3 text-white font-normal text-sm rounded'>Checkout</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartDrawer;