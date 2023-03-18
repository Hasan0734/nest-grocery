import React, { useState } from 'react';
import { Bars3Icon,ShoppingCartIcon } from '@heroicons/react/24/outline'
import Menu from './Menu';
import SearchInput from './SearchInput';

import CartDrawer from './CartDrawer';
import MenuDrawer from './MenuDrawer';



const SecondHeader = () => {
    const [cartDrawer, setCartDrawer] = useState(false);
    const [menuDrawer, setMenuDrawer] = useState(false);


    const handleOutSideClick = (event: React.MouseEvent) => {
        event.preventDefault();
        if (event.target === event.currentTarget) {
            setMenuDrawer(false)
            setCartDrawer(false)
        }

    }



    return (
        <>
            <div className='border border-gray-200'>
                <div className='max-w-8xl mx-auto px-4 2xl:px-0 py-8  '>
                    <div className='flex items-center justify-between gap-10 xl:gap-20'>
                        <div className='flex flex-col xl:flex-row  gap-8  xl:items-center w-full'>
                            <div className='flex justify-between'>
                                <img className='w-44 xl:w-64' src='/assets/logo.png' />
                                <ul className=' flex lg:hidden  space-x-5 items-center'>

                                    <li >
                                        <button onClick={() => setCartDrawer(true)} className='flex items-center space-x-1 cursor-pointer relative'>
                                            <ShoppingCartIcon className='w-8 text-gray-600' />
                                            <div className='absolute p-1 -top-1 -left-3 rounded-full w-6 h-6 flex justify-center items-center bg-[#3BB77E] text-white'>
                                                <span>0</span>
                                            </div>
                                        </button>
                                    </li>

                                    <li >
                                        <button onClick={() => setMenuDrawer(true)} className='flex items-center space-x-1 cursor-pointer'>
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


            {/* menu drawer */}
            <MenuDrawer
                handleOutSideClick={handleOutSideClick}
                menuDrawer={menuDrawer}
                setMenuDrawer={setMenuDrawer}
            />

            {/* product cart drawer */}
          <CartDrawer
                handleOutSideClick={handleOutSideClick}
                cartDrawer={cartDrawer}
                setCartDrawer={setCartDrawer} />
        </>

    );
};

export default SecondHeader;