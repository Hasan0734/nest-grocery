import Layout from '@/components/Layout';
import OurAdvantage from '@/components/OurAdvantage/OurAdvantage';
import BreadCrumbs from '@/components/Shared/BreadCrumbs';
import Subscribe from '@/components/Subscribe/Subscribe';
import { ChevronRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Home } from 'react-feather';

const vendors = () => {
    return (
        <>
            <Head>
                <title>Nest - vendor lists</title>
                <link rel="icon" href="/favicon.ico" />
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
                        <li className=' flex space-x-5 items-center'>
                            <span className='font-medium text-sm'>Vebdirs List</span>
                        </li>
                    </ul>
                </BreadCrumbs>

                <section className='mt-10'>
                    <div className='max-w-2xl mx-auto px-4 md:px-0'>
                        <h1 className='mb-12 text-center text-gray-black text-[72px] font-bold'>Vendors List</h1>

                        <form className='relative mb-20'>
                            <input
                                className='border-[1px] border-green-black/50 
                                rounded-full py-[18px] bg-white outline-none
                                 pl-5 w-full drop-shadow-[0_5px_8px_rgba(0,0,0,0.09)]'
                                type="text"
                                placeholder='Search vendors (by name or ID)...' />
                            <button className='bg-white hover:bg-green-black hover:text-white focus:text-white focus:bg-green-black
                            bottom-[1px] top-[1px] py-[17px] px-8 right-[1px] rounded-full absolute duration-200'>
                                <MagnifyingGlassIcon strokeWidth={2} width={25} className='' />
                            </button>
                        </form>

                    </div>
                </section>

                <Subscribe />
                <OurAdvantage />
            </Layout>
        </>
    );
};

export default vendors;