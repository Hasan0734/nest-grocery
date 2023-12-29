import Layout from '@/components/Layout';
import OurAdvantage from '@/components/OurAdvantage/OurAdvantage';
import BreadCrumbs from '@/components/Shared/BreadCrumbs';
import ShopProductFilter from '@/components/shop/ShopProductFilter/ShopProductFilter';
import ShopProducts from '@/components/shop/ShopProducts/ShopProducts';
import ShopSidebar from '@/components/shop/ShopSidebar/ShopSidebar';
import Subscribe from '@/components/Subscribe/Subscribe';
import { Listbox } from '@headlessui/react';
import { ChevronDownIcon, ChevronRightIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import { Grid, Home, List } from 'react-feather';


const sorts = [
    { id: 1, name: 'Default sorting' },
    { id: 2, name: 'Sort by popularity' },
    { id: 3, name: 'Sort by average rating' },
    { id: 4, name: 'Sort by latest' },
    { id: 5, name: 'Sort by price: low to high' },
    { id: 6, name: 'Sort by price: high to low' },
]

const shop: NextPage = () => {

    const [layout, setLayout] = useState('GRID');
    const [selectedSort, setSelectedSort] = useState(sorts[0]);


    return (
        <>
            <Head>
                <title>Nest - Grocery Store SPA Website</title>

            </Head>

            <Layout>
                <BreadCrumbs>
                    <ul className='flex items-center gap-3'>
                        <li className=' flex space-x-3 items-center' >
                            <Link href={"/"} className="flex gap-1 items-center text-primary hover:text-orange-300">
                                <Home size={15} />
                                <span className='font-medium text-sm'>Home</span>
                            </Link>
                            <ChevronRightIcon strokeWidth={2.5} width={10} />
                        </li>
                        <li className=' flex space-x-5 items-center'>
                            <span className='font-medium text-sm'>Shop</span>
                        </li>
                    </ul>
                </BreadCrumbs>

                <section className='my-16'>
                    <div className='max-w-xl md:max-w-3xl lg:max-w-8xl mx-auto px-4 2xl:px-0'>
                        <div className='flex flex-col lg:flex-row  gap-5 xl:gap-10'>
                            {/* sidebar */}
                           <ShopSidebar/>

                            <div className='order-1 md:order-2'>

                                <div className='hidden md:flex justify-between pl-0 lg:pl-2 py-2 mb-6'>
                                    <div className='flex items-center gap-4'>
                                        <div className='flex items-center gap-2'>
                                            <button
                                                onClick={() => setLayout('GRID')}

                                                className={`p-[10px] rounded-md hover:bg-primary hover:text-white ${layout === "GRID" ? "bg-primary text-white" : "text-gray-black bg-[#def9ec] "}`}>
                                                <Grid strokeWidth={3} size={20} />
                                            </button>

                                            <button
                                                onClick={() => setLayout('LIST')}

                                                className={`p-[10px] rounded-md hover:bg-primary hover:text-white ${layout === "LIST" ? "bg-primary text-white" : "text-gray-black bg-[#def9ec] "}`}
                                            >
                                                <List strokeWidth={3} size={20} />
                                            </button>
                                        </div>


                                        <button className='border border-gray-200 rounded-full px-4 py-1 flex items-center gap-1 shadow-[0_5px_10px_rgba(0,0,0,0.08)]'>

                                            <FunnelIcon className='text-primary' width={20} />

                                            <span className='text-gray-black text-[16px] font-bold'>Filter</span>

                                        </button>
                                        <div>
                                            <span className='text-light-gray text-[16px] font-semibold'>Showing 1-12 of 16 results</span>
                                        </div>
                                    </div>

                                    {/* product  sort */}
                                    <div className='relative pr-11'>
                                        <Listbox
                                            value={selectedSort}
                                            onChange={setSelectedSort}>

                                            <Listbox.Button
                                                className="border border-gray-200  px-4 py-3 rounded-lg flex items-center justify-between space-x-2">

                                                <span className='block text-sm font-bold text-gray-black w-[115px] overflow-hidden whitespace-nowrap text-ellipsis'>
                                                    {selectedSort.name}
                                                </span>
                                                <ChevronDownIcon width={16} className="text-gray-black" />
                                            </Listbox.Button>


                                            <Listbox.Options

                                                className="absolute top-[45px] bg-white z-20 border max-h-[150px] overflow-y-scroll scrollbar-thin scrollbar-thumb-primary  scrollbar-track-gray-100
                                           scrollbar-thumb-rounded-full 


                                             border-gray-200 w-full rounded-lg p-2">
                                                {sorts.map((sort) => (
                                                    <Listbox.Option
                                                        className="cursor-pointer hover:bg-gray-200 text-sm font-semibold text-gray-black py-2 px-4 "
                                                        key={sort.id}
                                                        value={sort}

                                                    >
                                                        {sort.name}
                                                    </Listbox.Option>
                                                ))}
                                            </Listbox.Options>
                                        </Listbox>
                                    </div>
                                </div>
                                
                                {/* filters */}
                                 <ShopProductFilter/>

                                {/* products */}
                                <ShopProducts />
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    );
};

export default shop;