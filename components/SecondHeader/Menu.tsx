import Link from 'next/link';
import React from 'react';
import {ArrowPathIcon, HeartIcon, ShoppingCartIcon, UserIcon, XMarkIcon} from '@heroicons/react/24/outline'
import ProductCart from './ProductCart';
import ProductCount from './ProductCount';
import {LuUser} from "react-icons/lu";
import {CiLocationOn} from "react-icons/ci";
import {MdOutlineLabel} from "react-icons/md";
import {IoIosHeartEmpty} from "react-icons/io";
import {LiaSlidersHSolid} from "react-icons/lia";
import { MdLogout } from "react-icons/md";
const Menu = () => {
    const items = [
        {id: 1, title: 'My Account', available: false, href: '/my-account', icon: <LuUser size={20}/>, },
        {id: 1, title: 'Order Tracking', available: false, href: '/order-tracking', icon: <CiLocationOn size={20}/>, },
        {id: 1, title: 'My Voucher', available: false, href: '/voucher', icon: <MdOutlineLabel size={20}/>, },
        {id: 1, title: 'My Wishlist', available: false, href: '/my-wishlist', icon: <IoIosHeartEmpty size={20}/>, },
        {id: 1, title: 'Setting', available: false, href: '/setting', icon: <LiaSlidersHSolid size={20}/>, },
    ]


    return (
        <>
            <ul className=' flex space-x-5 items-center'>
                <li>
                    <Link href="/compare" legacyBehavior>
                        <a className='flex space-x-1 items-center'>

                            <div className='relative'>
                                <ArrowPathIcon className='w-7 text-gray-600'/>
                                <ProductCount total={0}/>
                            </div>

                            <span>Compare</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/shop-wishlist" legacyBehavior>
                        <a className='flex items-center space-x-1 '>
                            <div className='relative'>
                                <HeartIcon className='w-7 text-gray-600'/>
                                <ProductCount total={0}/>
                            </div>
                            <span>Wishlist</span>
                        </a>
                    </Link>
                </li>
                <li className='relative hover-dropdown'>
                    <div className='flex items-center space-x-1 cursor-pointer'>
                        <div className='relative'>
                            <ShoppingCartIcon className='w-7 text-gray-600'/>
                            <ProductCount total={3}/>
                        </div>
                        <span className='text-gray-600'>Cart</span>
                    </div>
                    <div
                        className=' absolute right-0 border hover-dropdwon-item border-gray-200 bg-white invisible w-[300px]  rounded-lg z-50'>

                        <div>
                            <div
                                className='max-h-[380px] overflow-y-auto scrollbar-thin scrollbar-thumb-bgSoft scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
                                <ProductCart/>
                                <ProductCart/>
                                <ProductCart/>
                            </div>
                            <hr/>
                            {/* sub total */}
                            <div className='px-4 py-6'>
                                <h3 className='text-sm tracking-wide'>Subtotal: <span
                                    className='text-primary font-semibold'>$41.25</span></h3>

                                <div className='flex justify-between items-center mt-4'>
                                    <Link href="/shop-cart" legacyBehavior>
                                        <a className='bg-primary px-4 py-2 text-white font-normal text-sm rounded'>View
                                            Cart</a>
                                    </Link>
                                    <Link href="/view-cart" legacyBehavior>
                                        <a className='bg-primary px-4 py-2 text-white font-normal text-sm rounded'>Checkout</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* <div className='text-center px-3 py-5 text-gray-600 text-sm'>No Product in  the Carts</div> */}

                    </div>
                </li>
                <li className='relative  hover-dropdown'>
                    <button className='flex space-x-1 items-center cursor-pointer'>
                        <UserIcon className='w-7 text-gray-600'/>
                        <span className='text-gray-600'>Account</span>
                    </button>

                    <ul className=' space-y-2 absolute right-5 border hover-dropdwon-item border-gray-200 bg-white invisible w-44 p-3 rounded-lg z-50'>

                        {/*<li>*/}
                        {/*    <Link href='/login'*/}
                        {/*        className={'text-gray-600 py-1 hover:bg-primary/10 px-2 rounded text-sm font-medium flex items-center w-full gap-1'}>*/}
                        {/*        <span className={'text-gray-400'}>*/}
                        {/*            <MdLogout size={20}/>*/}
                        {/*        </span>*/}
                        {/*        <span>Login</span>*/}
                        {/*    </Link>*/}
                        {/*</li>*/}

                        {items.map(item => (
                            <li key={item.id}>
                                <Link href={item.href}
                                      className={'text-gray-600 py-1 hover:bg-primary/10 px-2 rounded text-sm font-medium flex items-center gap-1'}>
                                  <span className={'text-gray-400'}>{item.icon}</span>
                                   <span>{item.title}</span>
                                </Link>
                            </li>
                        ))}

                        <li>
                            <button
                                  className={'text-gray-600 py-1 hover:bg-primary/10 px-2 rounded text-sm font-medium flex items-center w-full gap-1'}>
                                <span className={'text-gray-400'}>
                                    <MdLogout size={20}/>
                                </span>
                                <span>Logout</span>
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

export default Menu;