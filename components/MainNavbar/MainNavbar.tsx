import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Contact from './Contact';
import Menu from './Menu';
import NavCategory from './NavCategory';

const MainNavbar = () => {

    const [navScroll, setNavScroll] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const changeNave = () => {
                const scroll = 200;
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

    return (
        <nav
            className={`border hidden lg:block border-gray-200  z-20            
        ${navScroll ? "nav_stick" : ""} `}>
            <div className='max-w-8xl mx-auto px-4 2xl:px-0  relative '>
                <div className='flex gap-5 items-center justify-between'>
                    <div className='flex gap-3 2xl:gap-7'>
                        <div className='flex gap-10 2xl:gap-6 items-center'>

                            <NavCategory />

                            <Link href="/hot-deals" legacyBehavior>
                                <a className='flex items-center gap-1 font-bold font-quicksand text-gray-600 text-[15px] px-3 py-2
                                    hover:text-[#3BB77E]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                                        <g>
                                            <path d="M13.6667 3.91049C12.6667 3.06299 11.6367 2.18382 10.5942 1.14466L10 0.554657L9.41667 1.14549C7.54 3.02716 6.65333 5.91632 6.26833 7.64966C5.97364 7.19291 5.75497 6.6914 5.62083 6.16466L5.26833 4.80382L4.24333 5.76716C2.4475 7.45299 1.25 9.12549 1.25 11.8038C1.23323 13.7357 1.86243 15.6178 3.03768 17.1512C4.21292 18.6845 5.86681 19.7813 7.73667 20.2672C8.30006 20.4042 8.87509 20.4879 9.45417 20.5172C9.63522 20.5401 9.8175 20.552 10 20.553C10.0958 20.553 10.1892 20.5447 10.2825 20.5388C12.5526 20.4705 14.7068 19.5203 16.2877 17.8897C17.8686 16.2591 18.7519 14.0766 18.75 11.8055C18.75 8.22716 16.3942 6.22716 13.6667 3.91049ZM10.1667 18.8722C10.0833 18.8722 10 18.8805 9.91166 18.8797C9.1616 18.8567 8.44982 18.5431 7.92671 18.0051C7.40361 17.4671 7.11014 16.7467 7.10833 15.9963C7.10833 14.9397 7.675 14.413 8.9575 13.3213C9.28083 13.0463 9.6325 12.7472 10.0025 12.4047C10.3267 12.6988 10.6417 12.9655 10.9325 13.213C12.2208 14.3063 12.8933 14.9272 12.8933 15.9938C12.8919 16.7309 12.6088 17.4396 12.1019 17.9747C11.5949 18.5098 10.9026 18.8309 10.1667 18.8722ZM14.35 17.3963L14.3333 17.408C14.4829 16.9523 14.5594 16.4759 14.56 15.9963C14.56 14.1088 13.3217 13.0572 12.0117 11.9447C11.5475 11.5513 11.0683 11.1447 10.59 10.6663L10 10.0772L9.41083 10.6663C8.87083 11.2055 8.3425 11.6555 7.87666 12.0522C6.57 13.1638 5.44083 14.1247 5.44083 15.9963C5.44261 16.4965 5.52708 16.9929 5.69083 17.4655C4.82338 16.7994 4.12164 15.9418 3.64041 14.9597C3.15918 13.9776 2.91148 12.8975 2.91667 11.8038C2.90296 10.3415 3.46895 8.93326 4.49083 7.88716C4.66685 8.24426 4.87552 8.58432 5.11417 8.90299C5.28847 9.13819 5.52778 9.31725 5.80261 9.41809C6.07744 9.51893 6.37577 9.53714 6.66083 9.47049C6.95082 9.40593 7.21608 9.25921 7.42489 9.04789C7.63371 8.83656 7.77724 8.56956 7.83833 8.27882C8.18726 6.36353 8.94193 4.54505 10.0517 2.94549C10.9308 3.77882 11.8017 4.51632 12.5875 5.18382C15.1975 7.40049 17.0875 9.00216 17.0875 11.8088C17.0895 12.8877 16.8437 13.9526 16.3689 14.9214C15.8941 15.8902 15.2031 16.7369 14.3492 17.3963H14.35Z" fill="#3BB77E" />
                                        </g>
                                        <defs>
                                            <clipPath>
                                                <rect width={20} height={20} fill="white" transform="translate(0 0.517151)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>Hot Deals</span>
                                </a>
                            </Link>

                        </div>
                        <Menu />
                    </div>
                    <Contact />
                </div>
            </div>
        </nav>
    );
};

export default MainNavbar;