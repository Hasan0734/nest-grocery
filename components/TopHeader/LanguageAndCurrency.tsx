import React, {useState} from 'react';

import { FaChevronDown, FaDollarSign, FaRupeeSign } from "react-icons/fa";

import { US, BD, IN } from 'country-flag-icons/react/3x2'

const LanguageAndCurrency = () => {
    const [language, setLanguage] = useState("English");
    const [currency, setCurrency] = useState('USD')
    return (
        <>
            <div className='flex space-x-4 items-center'>
                <div className='relative before:block before:absolute before:-right-2 before:w-[1px] before:h-[12px] before:top-2 before:bg-gray-200'>
                    <p className=' text-[#7e7e7e] font-normal tracking-wide text-[13px] font-roboto p-1'>
                        Need help? Call Us:
                        <a className='text-primary' href='tel:+88017XXXXX'>+88017XXXXX</a>
                    </p>
                </div>

                <div className='relative before:block before:absolute before:-right-2 before:w-[1px] before:h-[12px] before:top-2 before:bg-gray-200 hover-dropdown'>

                    <button className='top_header_item flex items-start space-x-1'>
                        <span>{language}</span>
                        <FaChevronDown className="w-2 mt-[2px]" />
                    </button>

                    <ul className='z-50 absolute right-0 border hover-dropdwon-item border-gray-200 bg-white invisible '>

                        <li onClick={() => setLanguage('English')} className='dropdown-items hover:bg-gray-50 flex space-x-1 items-center'>
                            <US title="United States" className="w-4 h-6" />
                            <span> English</span>
                        </li>

                        <li onClick={() => setLanguage('Bangali')} className='dropdown-items hover:bg-gray-50 flex space-x-1 items-center'>
                            <BD title="Bangladesh" className="w-4 h-6" />
                            <span>Bangali</span>
                        </li>
                        <li onClick={() => setLanguage('Hindi')} className='dropdown-items hover:bg-gray-50 flex space-x-1 items-center'>
                            <IN title="India" className="w-4 h-6" />
                            <span>Hindi</span>
                        </li>
                    </ul>
                

                </div>
                <div className='relative hover-dropdown'>
                    <button className='top_header_item flex items-start space-x-1'>
                        <span>{currency}</span>
                        <FaChevronDown className="w-2 mt-[2px]" />
                    </button>

                    <ul className='z-50 absolute right-0 border hover-dropdwon-item border-gray-200 bg-white invisible '>

                        <li onClick={() => setCurrency('USD')} className='dropdown-items hover:bg-gray-50 flex items-center space-x-1'>
                            <FaDollarSign className="w-3 text-gray-400" />
                            <span>USD </span>


                        </li>

                        <li onClick={() => setCurrency('BDT')} className='dropdown-items hover:bg-gray-50 flex items-center space-x-1'>
                            <svg
                                fill='gray'
                                width={'12px'}
                                height="14px"
                                xmlns="http://www.w3.org/2000/svg"

                                viewBox="0 0 384 512">
                                <path d="M36 32.2C18.4 30.1 2.4 42.5 .2 60S10.5 93.6 28 95.8l7.9 1c16 2 28 15.6 28 31.8V160H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64V384c0 53 43 96 96 96h32c106 0 192-86 192-192V256c0-53-43-96-96-96H272c-17.7 0-32 14.3-32 32s14.3 32 32 32h16c17.7 0 32 14.3 32 32v32c0 70.7-57.3 128-128 128H160c-17.7 0-32-14.3-32-32V224h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H128V128.5c0-48.4-36.1-89.3-84.1-95.3l-7.9-1z" /></svg>
                            <span>BDT</span>
                        </li>

                        <li onClick={() => setCurrency('INR')} className='dropdown-items hover:bg-gray-50 flex items-center space-x-1'>
                            <FaRupeeSign className="w-3 text-gray-400" />
                            <span>INR </span>


                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default LanguageAndCurrency;