import React, { useState } from 'react';

import Link from 'next/link';
import {  ChevronDownIcon, MagnifyingGlassIcon, PhoneIcon,  XMarkIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { FaFacebookF, FaInstagram, FaSkype, FaTwitter, FaYoutube } from 'react-icons/fa';

const menuItems = [
    { id: 1, title: "Home", route: "/" },
    { id: 2, title: "About Us", route: "/about-us" },
    { id: 3, title: "Shop", route: "/shop" },
    { id: 4, title: "Vendors", route: "/vendors" },
    { id: 5, title: "Mega Menu", route: "/mega-menu" },
    { id: 6, title: "Blog", route: "/blog" },
    { id: 7, title: "Contact", route: "/contact" },
]

const categories = [
    { id: 1, name: "Baking Material" },
    { id: 2, name: "Bread And Juice" },
    { id: 3, name: "Clothing & Beauty" },
    { id: 4, name: "Deals Of The Day" },
    { id: 5, name: "Fresh Seafood" },
    { id: 6, name: "Milks And Dairies" },
    { id: 7, name: "Pet Foods & Toy" },
    { id: 8, name: "Uncategorized" },
    { id: 9, name: "Vegetables" },
    { id: 10, name: "Wines & Drinksf" },
]

const MenuDrawer = ({ handleOutSideClick, menuDrawer, setMenuDrawer }: any) => {

    const [activeItem, setActiveItem] = useState('menu')
    return (
        <>
            <div
                onClick={handleOutSideClick}
                className={`z-50 block lg:hidden absolute left-0  transition-all  w-full ${!menuDrawer ? "invisible" : " visible bg-gray-800/40"}  
            top-0 h-screen`}>
                <div className={`absolute duration-500 opacity-0 ${menuDrawer ? "left-0 opacity-100" : "-left-[1000px]"} bg-white h-screen w-4/5 overflow-y-scroll`}>
                    <div
                        className='py-5 px-7 border-b border-gray-200 sticky
                         top-0 bg-white z-30'>
                        <XMarkIcon onClick={() => setMenuDrawer(false)} className='cursor-pointer  hover:rotate-180 duration-300 transform-gpu text-[#3BB77E] p-1 w-6 rounded-full bg-[#3BB77E]/30' />

                    </div>
                    <div className='py-5 px-7'>
                        {/* search input */}
                        <form className='relative'>
                            <input className='pl-4 pr-12 py-2 bg-gray-300/50 w-full outline-none rounded-md' type="text" placeholder='Search...' />
                            <button className='focus:bg-[#3BB77E] absolute right-0 rounded-md  px-3 py-[10px]'>
                                <MagnifyingGlassIcon className='w-5 text-gray-700' />
                            </button>
                        </form>

                        <div className='mt-5'>

                            {/* tab button */}
                            <div className='flex gap-3'>
                                <button onClick={() => setActiveItem('menu')} className={`duration-200 common_btn  ${activeItem === 'menu' ? "bg-orange-200/70 text-[#3BB77E]" : "bg-gray-300/50  text-gray-600"}`}>Menu</button>

                                <button onClick={() => setActiveItem('category')} className={`duration-200 common_btn  ${activeItem === 'category' ? "bg-orange-200/70 text-[#3BB77E]" : "bg-gray-300/50  text-gray-600"}`}>Category</button>
                            </div>
                            {/* menus */}
                            {activeItem === "menu" && <ul className={`mt-5`}>
                                {menuItems.map((menu: any) => <li key={menu.id}

                                    className='border-b last:border-0 border-gray-200 py-[6px] flex justify-between items-center'>
                                    <Link href={"/"} legacyBehavior>
                                        <a className='font-semibold text-sm text-gray-700 block '>{menu.title}</a>
                                    </Link>
                                    <div>
                                        <button className='focus:bg-[#3BB77E] px-2 rounded py-2 focus:text-white text-gray-500'>
                                            <ChevronDownIcon className='w-4 ' />
                                        </button>
                                    </div>
                                </li>)}
                            </ul>}

                            {activeItem === "category" && <ul className={`mt-5`}>
                                {categories.map((category: any) => <li key={category.id}

                                    className='border-b last:border-0 border-gray-200 py-3'>
                                    <Link href={"/"} legacyBehavior>
                                        <a className='font-semibold text-sm text-gray-700 block '>{category.name}</a>
                                    </Link>

                                </li>)}
                            </ul>}

                            {/* signup login btn */}
                            <div className='mt-5 border border-gray-200 p-3'>
                                <ul>
                                    <li className='flex gap-2 mt-3'>
                                        <PhoneIcon className='w-4 text-[#3BB77E]' />
                                        <span className='text-gray-600 text-sm'>017XXXXXXX</span>
                                    </li>
                                    <li className='flex gap-2 mt-3'>
                                        <EnvelopeIcon className='w-4 text-[#3BB77E]' />
                                        <span className='text-gray-600 text-sm'>nestcare@nest.com</span>
                                    </li>

                                </ul>
                                <div className='mt-5'>
                                    <Link href="/signup" legacyBehavior>
                                        <a className='text-sm font-light text-white bg-[#fdc040] mt-3 text-center block w-full py-2 rounded'>Sign Up</a>
                                    </Link>
                                    <Link href="/login" legacyBehavior>
                                        <a className='text-sm font-light text-white bg-[#3BB77E] mt-3 text-center block w-full py-2 rounded'>Login</a>
                                    </Link>
                                </div>


                            </div>

                            {/* social links */}
                            <ul className='mt-5 flex gap-2'>
                                <li>
                                    <a target="_blank" href='https://www.facebook.com/' rel='noopener noreferrer'>
                                        <FaFacebookF
                                            className='bg-[#3BB77E] rounded-full 
                                            p-[6px] w-7 h-7 text-white' />
                                    </a>

                                </li>
                                <li>
                                    <a target="_blank" href='https://www.facebook.com/' rel='noopener noreferrer'>
                                        <FaTwitter
                                            className='bg-[#3BB77E] rounded-full 
                                            p-[6px] w-7 h-7 text-white' />
                                    </a>

                                </li>
                                <li>
                                    <a target="_blank" href='https://www.facebook.com/' rel='noopener noreferrer'>
                                        <FaSkype
                                            className='bg-[#3BB77E] rounded-full 
                                            p-[6px] w-7 h-7 text-white' />
                                    </a>

                                </li>
                                <li>
                                    <a target="_blank" href='https://www.facebook.com/' rel='noopener noreferrer'>
                                        <FaYoutube
                                            className='bg-[#3BB77E] rounded-full 
                                            p-[6px] w-7 h-7 text-white' />
                                    </a>

                                </li>
                                <li>
                                    <a target="_blank" href='https://www.facebook.com/' rel='noopener noreferrer'>
                                        <FaInstagram
                                            className='bg-[#3BB77E] rounded-full 
                                            p-[6px] w-7 h-7 text-white' />
                                    </a>

                                </li>
                            </ul>

                            {/* footer */}
                            <div className='py-12'>
                                <p className='text-gray-500 text-sm '>Copyright {new Date().getFullYear()} © Nest. All rights reserved. Powered by Ali themes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuDrawer;