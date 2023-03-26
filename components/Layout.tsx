import React from 'react';
import Footer from './Footer/Footer';
import MainNavbar from './MainNavbar/MainNavbar';
import MobileMenu from './MobileMenu/MobileMenu';
import SecondHeader from './SecondHeader/SecondHeader';
import TopHeader from './TopHeader/TopHeader';

const Layout = ({ children }: any) => {
    return (
        <>
            <TopHeader />
            <SecondHeader />
            <MainNavbar />
            {children}
            <Footer />
            <MobileMenu />
        </>
    );
};

export default Layout;