import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import MegaMenuContent from './MegaMenuContent';

const menuItems = [
    { id: 1, title: "Home", route: "/" },
    { id: 2, title: "About Us", route: "/about-us" },
    { id: 3, title: "Shop", route: "/shop" },
    { id: 4, title: "Vendors", route: "/vendors" },
    { id: 5, title: "Mega Menu", route: "/mega-menu" },
    { id: 6, title: "Blog", route: "/blog" },
    { id: 7, title: "Contact", route: "/contact" },
]

const Menu = () => {
    return (
        <>
            <ul className='flex gap-4 items-center'>
                <li>
                    <Link href={"/"} legacyBehavior>
                        <a className='font-bold font-quicksand text-gray-600 text-[15px] px-3 py-2
                                    hover:text-[#3BB77E] flex gap-1 items-center ' href="">
                            <span>Home</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={"/about"} legacyBehavior>
                        <a className='font-bold font-quicksand text-gray-600 text-[15px] px-3 py-2
                                    hover:text-[#3BB77E] flex gap-1 items-center ' href="">
                            <span>About</span>
                            {/* <ChevronDownIcon className="w-3" /> */}
                        </a>
                    </Link>
                </li>
                <li>
                    <button className='font-bold font-quicksand text-gray-600 text-[15px] px-3 py-2
                                    hover:text-[#3BB77E] flex gap-1 items-center ' >
                        <span>Shop</span>
                        <ChevronDownIcon className="w-3" />
                    </button>
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

                    <button className='font-bold font-quicksand text-gray-600 text-[15px] px-3 py-2
                                    hover:text-[#3BB77E] flex gap-1 items-center'>
                        <span>Pages</span>
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