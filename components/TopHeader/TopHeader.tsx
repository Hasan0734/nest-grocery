"use client";

import Link from 'next/link';
import React, { useState } from 'react';

const menus = [
    { id: 1, title: 'About us', link: "/about-us" },
    { id: 2, title: 'My Account', link: "/my-account" },
    { id: 3, title: 'Wishlist', link: "/wishlist" },
    { id: 4, title: 'Order Tracking', link: "/order-tracking" },
]

const TopHeader = () => {
    const [language, setLanguage] = useState("English");
    const [currency, setCurrency] = useState('USD')


    return (
        <div className='border-b  border-gray-100'>
            <div className='container mx-auto px-4 md:px-0'>
                <div className='flex justify-between items-center'>
                    <ul className='flex space-x-4'>
                        {menus.map((item: any) => <li className={`relative  
                        ${menus?.length !== item.id && "before:block before:absolute before:-right-2 before:w-[1px] before:h-[12px] before:top-4 before:bg-gray-200"}`} key={item.id}
                        >
                            <Link href={item.link} legacyBehavior>
                                <a className='block py-1 my-2 text-[#7e7e7e] font-normal tracking-wide text-[13px] font-roboto'>{item.title}</a>
                            </Link>
                        </li>)}
                    </ul>
                    <div>

                    </div>
                    <div className='flex space-x-4 items-center'>
                        <div className='relative before:block before:absolute before:-right-2 before:w-[1px] before:h-[12px] before:top-2 before:bg-gray-200'>
                            <p className=' text-[#7e7e7e] font-normal tracking-wide text-[13px] font-roboto p-1'>
                                Need help? Call Us:
                                <a className='text-[#3BB77E]' href='tel:+88017XXXXX'>+88017XXXXX</a>
                            </p>
                        </div>
                        <div className='relative before:block before:absolute before:-right-2 before:w-[1px] before:h-[12px] before:top-2 before:bg-gray-200 hover-dropdown'>

                            <span className='top_header_item'>{ language}</span>


                            <ul className='absolute left-3 border hover-dropdwon-item border-gray-200 bg-white invisible '>

                                <li onClick={() => setLanguage('English')} className='dropdown-items hover:bg-gray-50'>English</li>

                                <li onClick={() => setLanguage('Bangali')} className='dropdown-items hover:bg-gray-50'>Bangali</li>

                                <li onClick={() => setLanguage('Urdo')} className='dropdown-items hover:bg-gray-50'>Urdo</li>
                            </ul>

                        </div>
                        <div className='relative before:block before:absolute before:-right-2 before:w-[1px] before:h-[12px] before:top-2 before:bg-gray-200 hover-dropdown'>
                            <span className='top_header_item'>{currency}</span>

                            <ul className='absolute left-3 border hover-dropdwon-item border-gray-200 bg-white invisible '>

                                <li onClick={() => setCurrency('USD')} className='dropdown-items hover:bg-gray-50'>
                                    USD
                                </li>

                                <li onClick={() => setCurrency('BDT')} className='dropdown-items hover:bg-gray-50'>BDT</li>

                                <li onClick={() => setCurrency('PKR')} className='dropdown-items hover:bg-gray-50'>PKR</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;