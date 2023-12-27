import {ChevronDownIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import MegaMenuContent from './MegaMenuContent';

const vendors = [
    {id:1, name: "Dashboard", href: '/dashboard'},
    {id:2, name: "Store Listing", href: '/store-listing'},
    {id:3, name: "Store Details", href: '/store-details'},
    {id:4, name: "My Orders", href: '/my-orders'},
]

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
                <li className={"group relative"}>
                    <button
                        className=' font-bold font-quicksand text-gray-600 text-[15px] px-3  py-6
                                    hover:text-[#3BB77E] flex gap-1 items-center '>
                        <span>  Vendors</span>
                        <ChevronDownIcon className="w-3"/>
                    </button>
                    <div
                        className='group-hover:visible group-hover:opacity-100 top-[72px] w-48 group-hover:left-0 shadow z-20 invisible absolute -left-2 px-4 2xl:px-0 opacity-0 duration-500 bg-white rounded'>
                        <ul className={"p-4 flex flex-col space-y-2 whitespace-nowrap "}>
                            {vendors.map(item => (
                                <li key={item.id}>
                                    <Link href={item.href}
                                          className={"hover:text-primary text-sm font-semibold text-gray-600"}>
                                        {item.name}</Link>
                                </li>
                            ))}


                        </ul>
                    </div>
                </li>
                <li className='nav_item_hover'>

                    <button className='nav_item font-bold font-quicksand text-gray-600 text-[15px] px-3 py-6
                                    hover:text-[#3BB77E] flex gap-1 items-center '>
                        <span>Mega Menu</span>
                        <ChevronDownIcon className="w-3"/>
                    </button>
                    <MegaMenuContent/>
                </li>
                <li>

                    <Link href={'/blogs'} className='font-bold font-quicksand text-gray-600 text-[15px] px-3 py-2
                                    hover:text-[#3BB77E] flex gap-1 items-center '>
                        <span>Blogs</span>

                    </Link>

                </li>

                <li>
                    <Link href={"/"} legacyBehavior>
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