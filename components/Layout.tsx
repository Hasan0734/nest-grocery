import { useRouter } from 'next/router';
import React from 'react';
import Footer from './Footer/Footer';
import MainNavbar from './MainNavbar/MainNavbar';
import MobileMenu from './MobileMenu/MobileMenu';
import SecondHeader from './SecondHeader/SecondHeader';
import TopHeader from './TopHeader/TopHeader';
import ScrollToTop from 'react-scroll-to-top';
import { ArrowUpIcon } from '@heroicons/react/24/outline';


const Layout = ({ children }: any) => {

    const router = useRouter();

    return (
        <>
            <TopHeader />
            <SecondHeader />
            <MainNavbar />
            {children}
            <Footer />
            {router.pathname === '/' && <MobileMenu />}

            <ScrollToTop
                    className='flex items-center justify-center duration-300 hover:bg-green-black hover:text-white'
                    smooth 
                    component={<ArrowUpIcon className='w-5 h-5'/>}
                    />
        </>
    );
};

export default Layout;