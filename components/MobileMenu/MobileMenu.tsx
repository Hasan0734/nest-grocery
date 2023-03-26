import { CreditCardIcon, HeartIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import { Home, Repeat, User } from 'react-feather';


const menus = [
    { id: 1, name: "Home", icon: <Home color='#253d4e' size={23} />, link: '/' },
    { id: 2, name: "Wishlist", icon: <HeartIcon color='#253d4e' width={23} />, link: '/wishlist' },
    { id: 3, name: "Compare", icon: <Repeat color='#253d4e' size={23} />, link: '/compare' },
    { id: 4, name: "Checkout", icon: <CreditCardIcon color='#253d4e' width={23} />, link: '/checout' },
    { id: 5, name: "Acount", icon: <User color='#253d4e' size={23} />, link: '/acount' },
]

const MobileMenu = () => {


    const [navScroll, setNavScroll] = React.useState(false);

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            const changeNave = () => {
                const scroll = 400;
                // console.log(window.scrollY)
                if (scroll <= window.scrollY) {
                    setNavScroll(true);
                } else {
                    setNavScroll(false);
                }
            };
            window.addEventListener("scroll", changeNave);
        }

    }, [])

    console.log(navScroll)
    return (
        <div className={`fixed w-full bottom-0 px-2 py-[10px]
         bg-white z-50 duration-300 ${navScroll ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 translate-y-5'} 
               
         lg:invisible lg:opacity-0 lg:translate-y-5`}>
            <ul className='flex justify-between'>
                {menus.map((menu: any) => <li key={menu.id} >

                    <Link href={menu.link} className="flex px-3 flex-col justify-center items-center">
                        {menu.icon}
                        <span
                            className='text-[#253d4e] font-semibold text-[12px]'>
                            {menu.name}
                        </span>
                    </Link>
                </li>)}

            </ul>
        </div>
    );
};

export default MobileMenu;