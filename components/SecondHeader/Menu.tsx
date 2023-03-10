import Link from 'next/link';
import React from 'react';
import { ArrowPathIcon, Bars3Icon, HeartIcon, ShoppingCartIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'

const Menu = () => {
    return (
        <>
            <ul className=' flex space-x-5 items-center'>
                <li>
                    <Link href="/compair" legacyBehavior>
                        <a className='flex space-x-1 items-center'>
                            <ArrowPathIcon className='w-7 text-gray-600' />
                            <span>Compare</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/wishlisht" legacyBehavior>
                        <a className='flex space-x-1 items-center'>
                            <HeartIcon className='w-7 text-gray-600' />
                            <span>Wishlist</span>
                        </a>
                    </Link>
                </li>
                <li className='relative hover-dropdown'>
                    <div className='flex items-center space-x-1 cursor-pointer'>
                        <div className='relative'>
                            <ShoppingCartIcon className='w-7 text-gray-600' />
                            <div className='absolute p-1 -top-[12px] -right-1 rounded-full w-6 h-6 flex justify-center items-center bg-[#3BB77E] text-white'>
                                <span>1</span>
                            </div>
                        </div>

                        <span className='text-gray-600'>Cart</span>
                    </div>
                    <div className=' absolute right-0 border hover-dropdwon-item border-gray-200 bg-white invisible w-[300px]  rounded-lg z-50'>

                        <div>
                            <div className='max-h-[380px] overflow-y-scroll'>
                                <div className='flex gap-3 px-4 border-b border-gray-200 py-6'>
                                    <div className=''>

                                        <img className='w-[90px] h-[80px] border p-1 border-gray-200 rounded-md ' src='/assets/popular-product/product-1-1.jpg' />
                                    </div>
                                    <div>
                                        <div className='flex justify-between items-center gap-2'>
                                            <h3 className='text-[16px] text-gray-600'>Angie's Sweet & Salty Kettle Corn</h3>
                                            <div>
                                                <button className='hover:bg-[#3BB77E] rounded-full p-[6px] w-7 h-7 border border-gray-200 '>
                                                    <XMarkIcon className=' text-gray-500 hover:text-white' /></button>
                                            </div>
                                        </div>
                                        <h4 className='text-sm text-gray-600'>1X$48.59</h4>
                                    </div>
                                </div>
                                <div className='flex gap-3 px-4 border-b border-gray-200 py-6'>
                                    <div className=''>

                                        <img className='w-[90px] h-[80px] border p-1 border-gray-200 rounded-md ' src='/assets/popular-product/product-1-1.jpg' />
                                    </div>
                                    <div>
                                        <div className='flex justify-between items-center gap-2'>
                                            <h3 className='text-[16px] text-gray-600'>Angie's Sweet & Salty Kettle Corn</h3>
                                            <div>
                                                <button className='hover:bg-[#3BB77E] rounded-full p-[6px] w-7 h-7 border border-gray-200 '>
                                                    <XMarkIcon className=' text-gray-500 hover:text-white' /></button>
                                            </div>
                                        </div>
                                        <h4 className='text-sm text-gray-600'>1X$48.59</h4>
                                    </div>
                                </div>
                                <div className='flex gap-3 px-4 border-b border-gray-200 py-6'>
                                    <div className=''>

                                        <img className='w-[90px] h-[80px] border p-1 border-gray-200 rounded-md ' src='/assets/popular-product/product-1-1.jpg' />
                                    </div>
                                    <div>
                                        <div className='flex justify-between items-center gap-2'>
                                            <h3 className='text-[16px] text-gray-600'>Angie's Sweet & Salty Kettle Corn</h3>
                                            <div>
                                                <button className='hover:bg-[#3BB77E] rounded-full p-[6px] w-7 h-7 border border-gray-200 '>
                                                    <XMarkIcon className=' text-gray-500 hover:text-white' /></button>
                                            </div>
                                        </div>
                                        <h4 className='text-sm text-gray-600'>1X$48.59</h4>
                                    </div>
                                </div>
                                <div className='flex gap-3 px-4 border-b border-gray-200 py-6'>
                                    <div className=''>

                                        <img className='w-[90px] h-[80px] border p-1 border-gray-200 rounded-md ' src='/assets/popular-product/product-1-1.jpg' />
                                    </div>
                                    <div>
                                        <div className='flex justify-between items-center gap-2'>
                                            <h3 className='text-[16px] text-gray-600'>Angie's Sweet & Salty Kettle Corn</h3>
                                            <div>
                                                <button className='hover:bg-[#3BB77E] rounded-full p-[6px] w-7 h-7 border border-gray-200 '>
                                                    <XMarkIcon className=' text-gray-500 hover:text-white' /></button>
                                            </div>
                                        </div>
                                        <h4 className='text-sm text-gray-600'>1X$48.59</h4>
                                    </div>
                                </div>
                                <div className='flex gap-3 px-4 border-b border-gray-200 py-6'>
                                    <div className=''>

                                        <img className='w-[90px] h-[80px] border p-1 border-gray-200 rounded-md ' src='/assets/popular-product/product-1-1.jpg' />
                                    </div>
                                    <div>
                                        <div className='flex justify-between items-center gap-2'>
                                            <h3 className='text-[16px] text-gray-600'>Angie's Sweet & Salty Kettle Corn</h3>
                                            <div>
                                                <button className='hover:bg-[#3BB77E] rounded-full p-[6px] w-7 h-7 border border-gray-200 '>
                                                    <XMarkIcon className=' text-gray-500 hover:text-white' /></button>
                                            </div>
                                        </div>
                                        <h4 className='text-sm text-gray-600'>1X$48.59</h4>
                                    </div>
                                </div>
                                <div className='flex gap-3 px-4 border-b border-gray-200 py-6'>
                                    <div className=''>

                                        <img className='w-[90px] h-[80px] border p-1 border-gray-200 rounded-md ' src='/assets/popular-product/product-1-1.jpg' />
                                    </div>
                                    <div>
                                        <div className='flex justify-between items-center gap-2'>
                                            <h3 className='text-[16px] text-gray-600'>Angie's Sweet & Salty Kettle Corn</h3>
                                            <div>
                                                <button className='hover:bg-[#3BB77E] rounded-full p-[6px] w-7 h-7 border border-gray-200 '>
                                                    <XMarkIcon className=' text-gray-500 hover:text-white' /></button>
                                            </div>
                                        </div>
                                        <h4 className='text-sm text-gray-600'>1X$48.59</h4>
                                    </div>
                                </div>
                                <div className='flex gap-3 px-4 border-b border-gray-200 py-6'>
                                    <div className=''>

                                        <img className='w-[90px] h-[80px] border p-1 border-gray-200 rounded-md ' src='/assets/popular-product/product-1-1.jpg' />
                                    </div>
                                    <div>
                                        <div className='flex justify-between items-center gap-2'>
                                            <h3 className='text-[16px] text-gray-600'>Angie's Sweet & Salty Kettle Corn</h3>
                                            <div>
                                                <button className='hover:bg-[#3BB77E] rounded-full p-[6px] w-7 h-7 border border-gray-200 '>
                                                    <XMarkIcon className=' text-gray-500 hover:text-white' /></button>
                                            </div>
                                        </div>
                                        <h4 className='text-sm text-gray-600'>1X$48.59</h4>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className='px-4 py-6'>
                                <h3 className='text-sm tracking-wide'>Subtotal: <span className='text-[#3BB77E] font-semibold'>$41.25</span></h3>

                                <div className='flex justify-between items-center mt-4'>
                                    <Link href="/view-cart" legacyBehavior>
                                        <a className='bg-[#3BB77E] px-4 py-2 text-white font-normal text-sm rounded'>View Cart</a>
                                    </Link>
                                    <Link href="/view-cart" legacyBehavior>
                                        <a className='bg-[#3BB77E] px-4 py-2 text-white font-normal text-sm rounded'>Checkout</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* <div className='text-center px-3 py-5 text-gray-600 text-sm'>No Product in  the Carts</div> */}

                    </div>
                </li>
                <li className='relative  hover-dropdown' >
                    <button className='flex space-x-1 items-center cursor-pointer'>
                        <UserIcon className='w-7 text-gray-600' />
                        <span className='text-gray-600'>Account</span>
                    </button>

                    <ul className=' absolute right-5 border hover-dropdwon-item border-gray-200 bg-white invisible w-44 px-3 py-5 rounded-lg z-50'>

                        <li>
                            <Link href='/login' legacyBehavior>
                                <a className='text-gray-600 '>Login</a>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>   
        </>
    );
};

export default Menu;