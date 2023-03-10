import React from 'react';


import Link from 'next/link';

const menus = [
    { id: 1, title: 'About us', link: "/about-us" },
    { id: 2, title: 'My Account', link: "/my-account" },
    { id: 3, title: 'Wishlist', link: "/wishlist" },
    { id: 4, title: 'Order Tracking', link: "/order-tracking" },
]
const HeaderMenu = () => {
    return (
        <ul className='flex space-x-4'>
            {menus.map((item: any) => <li className={`relative  
                        ${menus?.length !== item.id && "before:block before:absolute before:-right-2 before:w-[1px] before:h-[12px] before:top-4 before:bg-gray-200"}`} key={item.id}
            >
                <Link href={item.link} legacyBehavior>
                    <a className='block py-1 my-2 text-[#7e7e7e] font-normal tracking-wide text-[13px] font-roboto'>{item.title}</a>
                </Link>
            </li>)}
        </ul>
    );
};

export default HeaderMenu;