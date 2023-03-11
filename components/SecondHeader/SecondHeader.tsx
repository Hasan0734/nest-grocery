"use client";


import React, { useState } from 'react';
import { Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Menu from './Menu';
import SearchInput from './SearchInput';


const menuItems = [
    {id:1, title: "Home", route: "/"},
    {id:2, title: "About Us", route: "/about-us"},
    {id:3, title: "Shop", route: "/shop"},
    {id:4, title: "Vendors", route: "/vendors"},
    {id:5, title: "Mega Menu", route: "/mega-menu"},
    {id:6, title: "Blog", route: "/blog"},
    {id:7, title: "Contact", route: "/contact"},
]

const SecondHeader = () => {
    const [drawer, setDrawer] = useState(true);

    const handleOutSideClick = (event: React.MouseEvent) => {
        event.preventDefault();
        if (event.target === event.currentTarget) {
            setDrawer(false)
        }

    }

    return (
        <>
            <div className='border border-gray-200'>
                <div className='lg:container mx-auto py-8 px-4 '>
                    <div className='flex items-center justify-between gap-10 xl:gap-20'>
                        <div className='flex flex-col xl:flex-row  gap-8  xl:items-center w-full'>
                            <div className='flex justify-between'>
                                <img className='w-44 xl:w-64' src='/assets/logo.png' />
                                <ul className=' flex lg:hidden  space-x-5 items-center'>

                                    <li >
                                        <button className='flex items-center space-x-1 cursor-pointer relative'>
                                            <ShoppingCartIcon className='w-8 text-gray-600' />
                                            <div className='absolute p-1 -top-1 -left-3 rounded-full w-6 h-6 flex justify-center items-center bg-[#3BB77E] text-white'>
                                                <span>0</span>
                                            </div>
                                        </button>
                                    </li>

                                    <li >
                                        <button onClick={() => setDrawer(true)} className='flex items-center space-x-1 cursor-pointer'>
                                            <Bars3Icon className='w-8 text-gray-600' />
                                        </button>

                                    </li>

                                </ul>
                            </div>

                            {/* Search text iput  */}

                            <SearchInput />
                        </div>
                        <div className='hidden lg:block '>
                            <div className='flex gap-5 justify-between lg:min-w-[600px]'>
                                <div className='flex items-center'>
                                    <button className='border 
                            hover:-translate-y-1 duration-200 border-gray-200
                             drop-shadow-[0_10px_6px_rgba(0,0,0,0.05)]
                              bg-white px-3 py-[6px] rounded flex items-center space-x-2'>
                                        <span className='text-[#3BB77E]'>Became Ventor</span>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 24 24"
                                            strokeWidth={1.5} stroke="currentColor"
                                            className="w-5 h-5 text-[#3BB77E]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </button>
                                </div>
                                <Menu />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div
                onClick={handleOutSideClick}
                className={`z-50 block lg:hidden absolute left-0  transition-all  w-full ${!drawer ? "invisible opacity-0" : "opacity-100 visible bg-gray-800/40"}  
            top-0 h-screen`}>
                <div className={`absolute duration-500 opacity-0 ${drawer ? "left-0 opacity-100" : "-left-[1000px]"} bg-white h-screen w-4/5 `}>
                    <div
                        className='py-5 px-7 border-b border-gray-200'>
                            <XMarkIcon onClick={() => setDrawer(false)} className='cursor-pointer  hover:rotate-180 duration-300 transform-gpu text-[#3BB77E] p-1 w-6 rounded-full bg-[#3BB77E]/30'/>
                     
                    </div>
                    <div className='py-5 px-7'>
                        <form className='relative'>
                            <input className='pl-4 pr-12 py-2 bg-gray-300/50 w-full outline-none rounded-md' type="text" placeholder='Search...' />
                            <button className='focus:bg-[#3BB77E] absolute right-0 rounded-md  px-3 py-[10px]'>
                                <MagnifyingGlassIcon className='w-5 text-gray-700' />
                            </button>
                        </form>
                        <div className='mt-5'>
                            <div className='flex gap-3'>
                                <button className='duration-200 common_btn bg-gray-300/50 hover:bg-orange-200/70 hover:text-[#3BB77E]'>Menu</button>

                                <button className='duration-200 common_btn bg-gray-300/50 hover:bg-orange-200/70 hover:text-[#3BB77E]'>Category</button>
                            </div>

                            <div></div>
                        </div>
                    </div>
             </div>
            </div>
        </>

    );
};

export default SecondHeader;