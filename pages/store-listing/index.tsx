import Layout from '@/components/Layout';
import OurAdvantage from '@/components/OurAdvantage/OurAdvantage';
import BreadCrumbs from '@/components/Shared/BreadCrumbs';
import Subscribe from '@/components/Subscribe/Subscribe';
import { ChevronDownIcon, ChevronRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Grid, Home, List } from 'react-feather';
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import Vendors from '@/components/StoreVendors/Vendors';


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
    { name: "Preferred" },
    { name: "Total items" },
    { name: 'Avg. Rating' },
]

const index = () => {
    const [selected, setSelected] = useState(showNumber[0]);
    const [selectSort, setSelectSort] = useState(sorts[0]);
    const [layout, setLayout] = useState('GRID')
    return (
        <>
            <Head>
                <title>Nest - vendor lists</title>
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

                        <form className='relative'>
                            <input
                                className='border-[1px] border-green-black/50 
                                rounded-full py-[18px] bg-white outline-none
                                 pl-5 w-full drop-shadow-[0_5px_8px_rgba(0,0,0,0.09)]'
                                type="text"
                                placeholder='Search index (by name or ID)...' />
                            <button className='bg-white hover:bg-green-black hover:text-white focus:text-white focus:bg-green-black
                            bottom-[1px] top-[1px] py-[17px] px-8 right-[1px] rounded-full absolute duration-200'>
                                <MagnifyingGlassIcon strokeWidth={2} width={25} className='' />
                            </button>
                        </form>

                    </div>
                </section>

                {/* view  type */}
                <section className='my-10'>

                    <div className='max-w-5xl px-4 2xl:px-0 mx-auto 
                    flex justify-between items-center flex-wrap gap-8'>
                        <div>
                            <p>We have <strong className='text-green-black'>780</strong> index now</p>
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
                </section>

                {/* index */}
                <Vendors layout={layout} />

                <Subscribe />
                <OurAdvantage />

              
            </Layout>

        </>
    );
};

export default index;