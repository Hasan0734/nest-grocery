"use client";

import React, { useState } from 'react';
import HeaderMenue from './HeaderMenue';


const TopHeader = () => {
    const [language, setLanguage] = useState("English");
    const [currency, setCurrency] = useState('USD')


    return (
        <>
            <div className='hidden md:block border-b border-gray-100'>
                <div className='container mx-auto px-4 md:px-0'>
                    <div className='flex  flex-col lg:flex-row justify-between items-center'>

                        <HeaderMenue />

                        <div>
                            <h1>100% Secure deliver without contacting the courier</h1>
                        </div>

                        <div className='flex space-x-4 items-center'>
                            <div className='relative before:block before:absolute before:-right-2 before:w-[1px] before:h-[12px] before:top-2 before:bg-gray-200'>
                                <p className=' text-[#7e7e7e] font-normal tracking-wide text-[13px] font-roboto p-1'>
                                    Need help? Call Us:
                                    <a className='text-[#3BB77E]' href='tel:+88017XXXXX'>+88017XXXXX</a>
                                </p>
                            </div>
                            <div className='relative before:block before:absolute before:-right-2 before:w-[1px] before:h-[12px] before:top-2 before:bg-gray-200 hover-dropdown'>

                                <span className='top_header_item'>{language}</span>


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
            <div>
                <h1>Hello world</h1>
            </div>
        </>
    );
};

export default TopHeader;