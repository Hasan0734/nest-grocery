import React, {useState} from 'react';
import Layout from "@/components/Layout";
import Head from "next/head";
import BreadCrumbs from "@/components/Shared/BreadCrumbs";
import Link from "next/link";
import {Home} from "react-feather";
import {ChevronRightIcon} from "@heroicons/react/24/outline";
import Container from "@/components/Shared/Container";
import {FaRegTrashAlt} from "react-icons/fa";
import ShopCartData from "@/components/ShopCart/ShopCart";

const ShopCart = () => {

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
                            <span className='font-medium text-sm'>Cart</span>
                        </li>
                    </ul>
                </BreadCrumbs>

                <Container className={'mt-10'}>

                    <div className={'grid grid-cols-1 lg:grid-cols-8 gap-14'}>
                        <div className={'lg:col-span-5'}>
                            <h1 className={'text-3xl md:text-5xl font-bold'}>Your Cart</h1>
                            <div className={'flex items-center justify-between'}>
                                <p className={' font-semibold text-gray-400 mt-4'}>There are 3 products in your cart</p>
                                <span
                                    className={' font-semibold cursor-pointer text-gray-400 mt-5 flex items-center gap-2'}>
                            <FaRegTrashAlt size={18}/> <span>Clear Cart</span>
                        </span>
                            </div>
                        </div>
                    </div>
                    <ShopCartData/>

                </Container>
            </Layout>
        </>
    );
};

export default ShopCart;
