import Layout from '@/components/Layout';
import BreadCrumbs from '@/components/Shared/BreadCrumbs';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Home } from 'react-feather';

const VendorDetail = () => {
    return (
        <>
            <Head>
                <title>Vendor name of  - Nest </title>

            </Head>
            <Layout>
                <BreadCrumbs>
                    <ul className='flex items-center gap-3'>
                        <li className=' flex space-x-3 items-center' >
                            <Link href={"/"} className="flex gap-1 items-center text-[#3bb77e] hover:text-orange-300">
                                <Home size={15} />
                                <span className='font-medium text-sm'>Home</span>
                            </Link>
                            <ChevronRightIcon strokeWidth={2.5} width={10} />
                        </li>
                        <li className=' flex space-x-3 items-center' >
                            <Link href={"/vendors"} className="flex gap-1 items-center text-[#3bb77e] hover:text-orange-300">
                                <span className='font-medium text-sm'>Vendors</span>
                            </Link>
                            <ChevronRightIcon strokeWidth={2.5} width={10} />
                        </li>
                        <li className=' flex space-x-5 items-center'>
                            <span className='font-medium text-sm'>Vendor Details</span>
                        </li>
                    </ul>
                </BreadCrumbs>

        

            </Layout>
        </>
    );
};

export default VendorDetail;