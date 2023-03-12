import React from 'react';
import MainNavbar from './MainNavbar/MainNavbar';
import SecondHeader from './SecondHeader/SecondHeader';
import TopHeader from './TopHeader/TopHeader';

const Layout = ({children}:any) => {
    return (
        <>
            <TopHeader />
            <SecondHeader />
            <MainNavbar/>
            { children}
        </>
    );
};

export default Layout;