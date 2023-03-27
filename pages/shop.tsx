import Layout from '@/components/Layout';
import BreadCrumbs from '@/components/Shared/BreadCrumbs';
import CategoryListBox from '@/components/Shared/CategoryListBox';
import ProductCard from '@/components/Shared/ProductCard';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Home } from 'react-feather';



const categories = [
    {
        id: 1,
        name: "Baking material",
        sub: null,
        icon: "/assets/icons/category/category-2.png"
    },
    {
        id: 2,
        name: "Bread and Juice",
        sub: null,
        icon: "/assets/icons/category/category-11.png"
    },
    {
        id: 3,
        name: "Clothing & beauty",
        sub: null,
        icon: "/assets/icons/category/category-3.png"
    },
    {
        id: 4,
        name: "Dals of The Day",
        sub: null,
        icon: "/assets/icons/category/category-1.png"
    },
    {
        id: 5,
        name: "Fresh Fruit",
        sub: [
            { id: 1, name: 'Fresh Fruit', icon: '/assets/icons/category/category-7.png' },
            { id: 2, name: 'Uncategorized', icon: '/assets/icons/category/category-7.png' },
        ],
        icon: "/assets/icons/category/category-7.png"
    },
    {
        id: 6,
        name: "Fresh Seafood",
        sub: null,
        icon: "/assets/icons/category/category-10.png"
    },
    {
        id: 7,
        name: "Milks and Dairies",
        sub: null,
        icon: "/assets/icons/category/category-6.png"
    },
    {
        id: 8,
        name: "Uncategorized",
        sub: null,
        icon: "/assets/icons/category/category-2.png"
    },
    {
        id: 9,
        name: "Vegetables",
        sub: null,
        icon: "/assets/icons/category/category-8.png"
    },
    {
        id: 10,
        name: "Wines & Drinks",
        sub: null,
        icon: "/assets/icons/category/category-9.png"
    },
]

const shop: NextPage = () => {
    return (
        <>
            <Head>
                <title>Nest - Grocery Store SPA Website</title>
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
                            <span className='font-medium text-sm'>Shop</span>
                        </li>
                    </ul>
                </BreadCrumbs>

                <section className='my-16'>
                    <div className='max-w-8xl mx-auto px-4 2xl:px-0'>
                        <div className='flex gap-10'>
                            <div className='min-w-[400px] pr-4'>

                                {/* search bar */}
                                <div className='mb-10'>

                                    <form>
                                        <label className='block mb-2 text-gray-black text-[18px] font-bold' htmlFor='searchText'>Search</label>
                                        <div className='relative'>
                                            <input
                                                className='border border-gray-200 rounded-xl
                                          outline-none py-[15px] pl-2 pr-[100px] w-full'
                                                type="text"
                                                id='searchText' />
                                            <input className='absolute right-0 bg-green-black text-sm font-bold text-white rounded-xl py-[18px] px-6' type="submit" value="Search" />
                                        </div>


                                    </form>
                                </div>
                                {/* product categories */}
                                <div className='border border-gray-200 rounded-2xl shadow-[8px_5px_10px_rgba(0,0,0,0.05)] p-8'>

                                    <h1 className='text-gray-black text-2xl font-bold border-b border-gray-200 pb-4 relative before:absolute before:w-20 before:left-0 before:bottom-0 before:bg-green-black before:h-[1px]'>Product Categories</h1>


                                    <ul className='mt-6'>
                                        {categories.map((category) => <CategoryListBox key={category.id}
                                            category={category} />)}

                                    </ul>

                                </div>

                            </div>
                            <div className='grid col-span-1 gap-5 md:grid-cols-2
                            lg:grid-cols-4 pl-2' >
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default shop;