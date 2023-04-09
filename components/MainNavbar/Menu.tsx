import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import MegaMenuContent from './MegaMenuContent';



const Menu = () => {
    return (
        <>
            <ul className='flex gap-4 items-center'>
                <li>
                    <Link href={"/"}
                        className='font-bold font-quicksand text-gray-600 text-[15px] px-3 py-2
                                    hover:text-[#3BB77E] flex gap-1 items-center '>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={"/about"}
                        className='font-bold font-quicksand text-gray-600 text-[15px] px-3 py-2
                                    hover:text-[#3BB77E] flex gap-1 items-center '>
                        About


                    </Link>
                </li>
                <li>
                    <Link href={"/shop"}
                        className='font-bold font-quicksand text-gray-600 text-[15px] px-3 py-2
                                    hover:text-[#3BB77E] flex gap-1 items-center '>
                        Shop


                    </Link>
                </li>
                <li>

                    <button className='font-bold font-quicksand text-gray-600 text-[15px] px-3 py-2
                                    hover:text-[#3BB77E] flex gap-1 items-center'>
                        <span>Vendors</span>
                        <ChevronDownIcon className="w-3" />
                    </button>

                </li>
                <li className='nav_item_hover'>

                    <button className='nav_item font-bold font-quicksand text-gray-600 text-[15px] px-3 py-6
                                    hover:text-[#3BB77E] flex gap-1 items-center '>
                        <span>Mega Menu</span>
                        <ChevronDownIcon className="w-3" />
                    </button>
                    <MegaMenuContent />
                </li>
                <li>

                    <button className='font-bold font-quicksand text-gray-600 text-[15px] px-3 py-2
                                    hover:text-[#3BB77E] flex gap-1 items-center '>
                        <span>Blog</span>
                        <ChevronDownIcon className="w-3" />
                    </button>

                </li>
               
                <li>
                    <Link href={"/about"} legacyBehavior>
                        <a className='font-bold font-quicksand text-gray-600 text-[15px] px-3 py-2
                                    hover:text-[#3BB77E] flex gap-1 items-center ' href="">
                            <span>Contact</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </>
    );
};

export default Menu;