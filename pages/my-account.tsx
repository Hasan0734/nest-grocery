import React from 'react';
import Head from "next/head";
import Layout from "@/components/Layout";
import Container from "@/components/Shared/Container";
import AccountSidebar from "@/components/Account/AccountSidebar";

import BreadCrumbs from "@/components/Shared/BreadCrumbs";
import {NextRouter, useRouter} from "next/router";
import WelcomeDashboard from "@/components/Account/WelcomeDashboard";
import MyOrders from "@/components/Account/MyOrders";
import TrackOrders from "@/components/Account/TrackOrders";
import MyAddress from "@/components/Account/MyAddress";
import AccountDetails from "@/components/Account/AccountDetails";

const MyAccount = () => {
    const router:NextRouter = useRouter();


    const renderComponent = () => {
        switch (router.query.tab) {
            case 'dashboard':
                return  <WelcomeDashboard/>
            case 'orders':
                return  <MyOrders/>
            case 'track_orders':
                return <TrackOrders/>
            case 'my_address':
                return <MyAddress/>
            case 'account_details':
                return  <AccountDetails/>
            default:
               return <WelcomeDashboard/>
        }
    }
return (
        <>
            <Head>
                <title>My Account dashboard</title>
            </Head>
            <Layout>
                <BreadCrumbs>
                    <li className=' flex space-x-5 items-center'>
                        <span className='font-medium text-sm'>My Account</span>
                    </li>
                </BreadCrumbs>
                <Container className={'max-w-6xl py-20'}>
                    <div className={'grid md:grid-cols-6 gap-10 md:gap-0 md:space-x-16'}>
                        <AccountSidebar/>
                        <div className={'md:col-span-4 pt-4'}>
                            {renderComponent()}
                        </div>
                    </div>
                </Container>
            </Layout>
        </>
    );
};

export default MyAccount;
