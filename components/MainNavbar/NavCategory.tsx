import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { ChevronDownIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const categories = [
    { id: 1, name: "Baking material", icon: "/assets/icons/category/category-2.png" },
    { id: 2, name: "Bread and Juice", icon: "/assets/icons/category/category-11.png" },
    { id: 3, name: "Clothing & beauty", icon: "/assets/icons/category/category-3.png" },
    { id: 4, name: "Dals of The Day", icon: "/assets/icons/category/category-1.png" },
    { id: 5, name: "Fresh Fruit", icon: "/assets/icons/category/category-7.png" },
    { id: 6, name: "Fresh Seafood", icon: "/assets/icons/category/category-10.png" },
    { id: 7, name: "Milks and Dairies", icon: "/assets/icons/category/category-6.png" },
    { id: 8, name: "Uncategorized", icon: "/assets/icons/category/category-2.png" },
    { id: 9, name: "Vegetables", icon: "/assets/icons/category/category-8.png" },
    { id: 10, name: "Wines & Drinks", icon: "/assets/icons/category/category-9.png" },
]


const NavCategory = () => {

    const [openCategory, setOpenCategory] = useState(false)

    return (
        <>
            <div className='relative'>
                <OutsideClickHandler
                    onOutsideClick={() => setOpenCategory(false)}
                >
                    <button
                        onClick={() => setOpenCategory(!openCategory)}
                        className='rounded flex gap-1 bg-[#3BB77E] px-6 2xl:px-4 py-3 items-center'>
                        <Squares2X2Icon strokeWidth={2} className='w-4 text-white' />
                        <span className='text-white font-bold font-quicksand'>Browse All Categories</span>
                        <ChevronDownIcon strokeWidth={2} className='w-4 text-white' />
                    </button>

                    <div className={`${openCategory ? "visible opacity-100  top-[50px]" : "invisible opacity-0  top-[60px]"} duration-300 rounded-lg border left-0 border-[#3BB77E]  p-5 z-40 bg-gray-50
                                 absolute  w-[400px]`}>
                        <ul className='grid grid-cols-2 gap-3'>
                            {categories.map((category) => <li key={category.id}
                                className=''>
                                <Link href={"/"} legacyBehavior>
                                    <a
                                        className=' border border-gray-200 rounded
                                                     p-2 flex gap-2 text-sm items-center hover:bg-white/80 duration-200 hover:drop-shadow-md'>
                                        <img className='w-6 h-6' src={category.icon} alt={category.name} />
                                        <span> {category.name}</span>
                                    </a>
                                </Link>
                            </li>)}

                        </ul>
                    </div>

                </OutsideClickHandler>

            </div>
        </>
    );
};

export default NavCategory;