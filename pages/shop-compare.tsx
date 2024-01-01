import React from 'react';
import Head from "next/head";
import Layout from "@/components/Layout";
import BreadCrumbs from "@/components/Shared/BreadCrumbs";
import Link from "next/link";
import {ChevronRightIcon} from "@heroicons/react/24/outline";
import Container from "@/components/Shared/Container";

const ShopCompare = () => {
    return (
        <>
            <Head>
                <title>Shop Compare</title>

            </Head>
            <Layout>
                <BreadCrumbs>
                    <li className='flex space-x-3 items-center' >
                        <Link href={"/shop"} className="flex gap-1 items-center text-primary hover:text-orange-300">

                            <span className='font-medium text-sm'>Shop</span>
                        </Link>
                        <ChevronRightIcon strokeWidth={2.5} width={10} />
                    </li>
                    <li className=' flex space-x-5 items-center'>
                        <span className='font-medium text-sm'>Compare</span>
                    </li>
                </BreadCrumbs>

                <Container className={'max-w-7xl'}>
                    <div className={'mt-8'}>
                        <h3 className={'text-5xl font-bold text-primary-text'}>Products Compare</h3>
                        <p className={'font-semibold text-gray-500 mt-2'}>There are 3 products to compare</p>
                    </div>

                    <div>

                    </div>
                </Container>
            </Layout>
        </>
    );
};

export default ShopCompare;
