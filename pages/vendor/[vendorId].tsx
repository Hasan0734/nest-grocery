import Layout from '@/components/Layout';
import BreadCrumbs from '@/components/Shared/BreadCrumbs';
import ProductRating from '@/components/Shared/ProductRating';
import { ChevronDownIcon, ChevronRightIcon, FunnelIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import { Grid, Home, List } from 'react-feather';
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import ShopCategories from '@/components/ShopCategories/ShopCategories';
import CategoryListBox from '@/components/Shared/CategoryListBox';

const showNumber = [
    { num: 50 },
    { num: 100 },
    { num: 150 },
    { num: 200 },
    { num: 'All' },
]
const sorts = [
    { name: 'Mall' },
    { name: "Featured" },
    { name: "Prefrred" },
    { name: "Total items" },
    { name: 'Avg. Rating' },
]
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
        name: "Fresh Seafood",
        sub: null,
        icon: "/assets/icons/category/category-10.png"
    },
    {
        id: 6,
        name: "Milks and Dairies",
        sub: null,
        icon: "/assets/icons/category/category-6.png"
    },

]


const VendorDetail = () => {

    const [selected, setSelected] = useState(showNumber[0]);
    const [selectSort, setSelectSort] = useState(sorts[0]);
    const [layout, setLayout] = useState('GRID')

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

                <section className='py-8'>
                    <div className='max-w-8xl mx-auto px-4 2xl:px-0'>
                        <div
                            className='vendor-conver p-6 md:p-12 rounded-2xl flex flex-col md:flex-row gap-5'
                            style={{ backgroundImage: 'url(/assets/vendors/vendor-header-bg-min.png)' }}>

                            <div className='w-[136px]'>
                                <img
                                    className='w-full'
                                    src="/assets/vendors/vendor-17.png"
                                    alt="" />
                            </div>

                            <div className='text-white w-full'>
                                <span className='text-[#b6b6b6] text-sm block mb-1'>Since 2012</span>
                                <h2 className='text-[32px] leading-9 font-bold mb-3'>Nest Food Ltd.</h2>
                                <div className='flex gap-2 items-center mb-4'>
                                    <ProductRating rating={3} />
                                    <span className='text-sm text-[#b6b6b6]'>(4.0)</span>
                                </div>
                                <div className='flex flex-col lg:flex-row gap-8'>
                                    <div className='max-w-[450px]'>
                                        <p className='text-sm font-medium leading-6'>
                                            Got a smooth, buttery spread in your fridge? Chances are good that it's Good Chef. This brand made Lionto's list of the most popular grocery brands across the country.
                                        </p>
                                    </div>
                                    <div className='max-w-[300px]'>
                                        <ul className=''>
                                            <li className='text-sm font-medium leading-6'>
                                                <MapPinIcon className='h-5 w-5 inline mb-1 mr-2 text-green-black' />

                                                <strong>Address: </strong><span>5171 W Campbell Ave Kent, Utah 53127 United States</span>

                                            </li>
                                            <li className='text-sm font-medium leading-6'>
                                                <PhoneIcon className='  h-5 w-5 inline mb-1 mr-2 text-green-black' />
                                                <strong>Call Us: </strong><span>(+91) - 540-025-123456</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className='text-[16px] font-bold'>Follow Us</h4>
                                        <ul className='flex gap-3 items-center mt-3'>
                                            <li>

                                                <a href='http://twitter.com/' target='_blank'>
                                                    <FaTwitter className='w-8 h-8 p-2 bg-[#55ace3] rounded-full' />
                                                </a>

                                            </li>
                                            <li>

                                                <a href='http://facebook.com/' target='_blank'>
                                                    <FaFacebookF className='w-8 h-8 p-2 bg-[#4e6297] rounded-full' />
                                                </a>

                                            </li>
                                            <li>

                                                <a href="http://instagram.com/" target='_blank'>
                                                    <FaInstagram className='w-8 h-8 p-2 bg-[#fd1d1d] rounded-full' />
                                                </a>

                                            </li>
                                            <li>

                                                <a href="http://pinterest.com/" target='_blank' >
                                                    <FaPinterest className='w-8 h-8 p-2 bg-[#e60023] rounded-full' />
                                                </a>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='my-16'>
                    <div className='max-w-xl md:max-w-3xl lg:max-w-8xl mx-auto px-4 2xl:px-0'>
                        <div className='flex flex-col lg:flex-row  gap-5 xl:gap-10'>
                            {/* sidebar */}
                            <div className='w-[300px]'>
                                <div>
                                    <img className='w-full rounded-xl' src="/assets/banner-10.jpg" alt="" />
                                </div>

                                {/* product categories */}
                                <div className='mt-10 border border-gray-200 rounded-2xl 
                            shadow-[8px_5px_10px_rgba(0,0,0,0.05)] p-5 lg:p-8'>
                                    <h1
                                        className='text-gray-black text-2xl font-bold
                                border-b border-gray-200 pb-4 relative before:absolute 
                                before:w-20 before:left-0 before:bottom-0
                                before:bg-green-black before:h-[1px]'>
                                        Categories
                                    </h1>

                                    <div className='mt-10'>

                                        <ul className='mt-6'>
                                            {categories.map((category) => <CategoryListBox key={category.id}
                                                category={category} />)}

                                        </ul>
                                    </div>

                                </div>

                                {/* product categories */}
                                <div className='mt-10 border border-gray-200 rounded-2xl 
                            shadow-[8px_5px_10px_rgba(0,0,0,0.05)] p-5 lg:p-8'>
                                    <h1
                                        className='text-gray-black text-2xl font-bold
                                border-b border-gray-200 pb-4 relative before:absolute 
                                before:w-20 before:left-0 before:bottom-0
                                before:bg-green-black before:h-[1px]'>
                                        Fill by price
                                    </h1>

                                    <div className='mt-10'>
                                        <div className="mt-6">
                                            <h4 className='text-sm text-gray-black font-extrabold'>Color</h4>
                                            <div className='my-3 flex items-center gap-2'>
                                                <input type="checkbox" name="red" id="red" />
                                                <label className='text-sm font-medium' htmlFor="red">Red (10)</label>
                                            </div>
                                            <div className='my-3 flex items-center gap-2'>
                                                <input type="checkbox" name="green" id="green" />
                                                <label className='text-sm font-medium' htmlFor="green">Green (10)</label>
                                            </div>
                                            <div className='my-3 flex items-center gap-2'>
                                                <input type="checkbox" name="blue" id="blue" />
                                                <label className='text-sm font-medium' htmlFor="blue">Blue (52)</label>
                                            </div>

                                        </div>
                                        <div className="mt-6">
                                            <h4 className='text-sm text-gray-black font-extrabold'>item Condition</h4>
                                            <div className='my-3 flex items-center gap-2'>
                                                <input type="checkbox" name="new" id="new" />
                                                <label className='text-sm font-medium' htmlFor="new">New (1506)</label>
                                            </div>
                                            <div className='my-3 flex items-center gap-2'>
                                                <input type="checkbox" name="refurbished" id="refurbished" />
                                                <label className='text-sm font-medium' htmlFor="refurbished">Refurbished (27)</label>
                                            </div>
                                            <div className='my-3 flex items-center gap-2'>
                                                <input type="checkbox" name="used" id="used" />
                                                <label className='text-sm font-medium' htmlFor="used">Used (56)</label>
                                            </div>

                                        </div>
                                        <div className='mt-4'>
                                            <button className='rounded-md text-white flex items-center
                                         gap-1 pl-6 hover:pl-8 duration-300 hover:bg-orange-light pr-4 py-[10px] bg-green-black text-sm'>
                                                <FunnelIcon className='w-4 h-4' strokeWidth={2} />
                                                <span className='font-bold'>Filter</span>
                                            </button>
                                        </div>
                                    </div>

                                </div>



                            </div>

                            <div>
                                {/* view  type */}
                                <div className=''>

                                    <div className='max-w-5xl px-4 2xl:px-0 mx-auto 
                                    flex justify-between items-center flex-wrap gap-8'>
                                        <div>
                                            <p>We have <strong className='text-green-black'>780</strong> vendors now</p>
                                        </div>
                                        <div className='flex gap-4 items-center flex-wrap'>
                                            <div className='flex items-center gap-2'>
                                                <button
                                                    onClick={() => setLayout('GRID')}

                                                    className={`p-[10px] rounded-md hover:bg-green-black hover:text-white ${layout === "GRID" ? "bg-green-black text-white" : "text-gray-400 bg-[#def9ec] "}`}>
                                                    <Grid strokeWidth={3} size={20} />
                                                </button>

                                                <button
                                                    onClick={() => setLayout('LIST')}

                                                    className={`p-[10px] rounded-md hover:bg-green-black hover:text-white ${layout === "LIST" ? "bg-green-black text-white" : "text-gray-400 bg-[#def9ec] "}`}
                                                >
                                                    <List strokeWidth={3} size={20} />
                                                </button>
                                            </div>


                                            {/* limit */}
                                            <Listbox value={selected} onChange={setSelected}>
                                                <div className="relative mt-1">
                                                    <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-4 pr-10 text-left border border-gray-200 flex items-center gap-2 hover:drop-shadow-[0_5px_8px_rgba(0,0,0,0.05)]">
                                                        <Grid size={16} className='text-gray-400' />
                                                        <span className="block truncate">
                                                            Show: {selected.num}
                                                        </span>

                                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                            <ChevronDownIcon
                                                                className="h-4 w-4 text-gray-400"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    </Listbox.Button>

                                                    <Transition
                                                        as={Fragment}
                                                        leave="transition ease-in duration-100"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <Listbox.Options className="z-20 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                            {showNumber.map((number: any, index: number) => (
                                                                <Listbox.Option
                                                                    key={index}
                                                                    className={({ active }) =>
                                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-green-black text-white' : 'text-gray-900'
                                                                        }`
                                                                    }
                                                                    value={number}
                                                                >
                                                                    {({ active, selected }) => (
                                                                        <>
                                                                            <span
                                                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                                    }`}
                                                                            >
                                                                                {number.num}
                                                                            </span>

                                                                            {selected ? (
                                                                                <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-green-black'}`}>
                                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                    {active}

                                                                                </span>
                                                                            ) : null}
                                                                        </>
                                                                    )}
                                                                </Listbox.Option>
                                                            ))}
                                                        </Listbox.Options>
                                                    </Transition>
                                                </div>
                                            </Listbox>
                                            {/* sort */}
                                            <Listbox value={selectSort} onChange={setSelectSort}>

                                                <div className="relative mt-1">
                                                    <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-4 pr-10 text-left border border-gray-200 flex items-center gap-2 hover:drop-shadow-[0_5px_8px_rgba(0,0,0,0.05)]">


                                                        <svg
                                                            fill='currentColor'
                                                            className='text-gray-400 h-4 w-4'

                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        ><g id="_01_align_center" data-name="01 align center"><path d="M0,3v8H11V0H3A3,3,0,0,0,0,3ZM9,9H2V3A1,1,0,0,1,3,2H9Z" /><path d="M0,21a3,3,0,0,0,3,3h8V13H0Zm2-6H9v7H3a1,1,0,0,1-1-1Z" /><path d="M20,21.417V2.586l2.584,2.58L24,3.751,21.121.876a3,3,0,0,0-4.239,0l-2.875,2.87L15.42,5.161,18,2.582V21.416l-2.585-2.582-1.413,1.415,2.879,2.875a3,3,0,0,0,4.239,0L24,20.254l-1.413-1.415Z" /></g></svg>

                                                        <span className="block truncate">
                                                            Sort by: {selectSort.name}
                                                        </span>

                                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                            <ChevronDownIcon
                                                                className="h-4 w-4 text-gray-400"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    </Listbox.Button>

                                                    <Transition
                                                        as={Fragment}
                                                        leave="transition ease-in duration-100"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <Listbox.Options className="z-20 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                            {sorts.map((sort: any, index: number) => (
                                                                <Listbox.Option
                                                                    key={index}
                                                                    className={({ active }) =>
                                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-green-black text-white' : 'text-gray-900'
                                                                        }`
                                                                    }
                                                                    value={sort}
                                                                >
                                                                    {({ active, selected }) => (
                                                                        <>
                                                                            <span
                                                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                                    }`}
                                                                            >
                                                                                {sort.name}
                                                                            </span>

                                                                            {selected ? (

                                                                                <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-green-black'}`}>
                                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                    {active}

                                                                                </span>


                                                                            ) : null}
                                                                        </>
                                                                    )}
                                                                </Listbox.Option>
                                                            ))}
                                                        </Listbox.Options>
                                                    </Transition>
                                                </div>
                                            </Listbox>

                                        </div>
                                    </div>
                                </div>



                                {/* products */}
                            </div>

                        </div>
                    </div>
                </section>

            </Layout>
        </>
    );
};

export default VendorDetail;