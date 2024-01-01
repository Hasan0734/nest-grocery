import React from 'react';
import Head from "next/head";
import Layout from "@/components/Layout";
import BreadCrumbs from "@/components/Shared/BreadCrumbs";
import Link from "next/link";
import {Home} from "react-feather";
import {ChevronRightIcon} from "@heroicons/react/24/outline";
import Container from "@/components/Shared/Container";

import WishlistData from "@/components/ShopWishlist/WishlistData";



const ShopWishlist = () => {
    return (
        <>
            <Head>
                <title>Shopping Cart - Nest</title>
            </Head>
            <Layout>
                <BreadCrumbs>
                    <ul className='flex items-center gap-3'>
                        <li className=' flex space-x-3 items-center'>
                            <Link href={"/"} className="flex gap-1 items-center text-primary hover:text-orange-300">
                                <Home size={15}/>
                                <span className='font-medium text-sm'>Home</span>
                            </Link>
                            <ChevronRightIcon strokeWidth={2.5} width={10}/>
                        </li>
                        <li className=' flex space-x-5 items-center'>
                            <span className='font-medium text-sm'>Wishlist</span>
                        </li>
                    </ul>
                </BreadCrumbs>

                <Container className={'mt-10 max-w-7xl'}>
                    <div className={'mb-5'}>
                        <div className={''}>
                            <h1 className={'text-3xl md:text-5xl font-bold'}>Your Wishlist</h1>
                            <div className={''}>
                                <p className={' font-semibold text-gray-400 mt-4'}>There are 5 products in this list</p>

                            </div>
                        </div>
                    </div>
                    <WishlistData/>
                </Container>
            </Layout>
        </>
    );
};

export default ShopWishlist;
