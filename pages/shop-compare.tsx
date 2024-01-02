import React from 'react';
import Head from "next/head";
import Layout from "@/components/Layout";
import BreadCrumbs from "@/components/Shared/BreadCrumbs";
import Link from "next/link";
import {ChevronRightIcon} from "@heroicons/react/24/outline";
import Container from "@/components/Shared/Container";
import Rating from "@/components/Shared/Rating";
import {cn} from "@/utls/utils";
import {GoTrash} from "react-icons/go";
import {IoBagAddOutline} from "react-icons/io5";

const products = [
    {
        id: 1,
        name: "J.Crew Mercantile Women's Short",
        price: '12.00',
        rating: 2,
        totalReview: 232,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: 'out of stock',
        weight: 232,
        dimensions: null,
        image: '/assets/popular-product/product-1-1.jpg'

    }, {
        id: 2,
        name: "Amazon Essentials Women's Tanks",
        price: '14.00',
        rating: 5,
        totalReview: 32,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: 'in stock',
        weight: 370,
        dimensions: null,
        image: '/assets/popular-product/product-2-1.jpg'

    }, {
        id: 3,
        name: "Amazon Brand - Daily Ritual Wom",
        price: '15.00',
        rating: 5,
        totalReview: 124,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: 'in stock',
        weight: 334,
        dimensions: null,
        image: '/assets/popular-product/product-3-1.jpg'

    },
    {
        id: 3,
        name: "Amazon Brand - Daily Ritual Wom",
        price: '15.00',
        rating: 5,
        totalReview: 124,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: 'in stock',
        weight: 334,
        dimensions: null,
        image: '/assets/popular-product/product-3-1.jpg'

    },
    {
        id: 3,
        name: "Amazon Brand - Daily Ritual Wom",
        price: '15.00',
        rating: 5,
        totalReview: 124,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        status: 'in stock',
        weight: 334,
        dimensions: null,
        image: '/assets/popular-product/product-3-1.jpg'

    },
]
const ShopCompare = () => {
    return (
        <>
            <Head>
                <title>Shop Compare</title>

            </Head>
            <Layout>
                <BreadCrumbs>
                    <li className='flex space-x-3 items-center'>
                        <Link href={"/shop"} className="flex gap-1 items-center text-primary hover:text-orange-300">

                            <span className='font-medium text-sm'>Shop</span>
                        </Link>
                        <ChevronRightIcon strokeWidth={2.5} width={10}/>
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

                    <div className={'mt-7 flow-root'}>
                        <div className=" overflow-x-auto scrollbar">
                            <div className="inline-block min-w-full py-2 align-middle">
                                <table className={'w-full compare_table border'}>
                                    <tbody className={'antialiased'}>
                                    <tr>
                                        <td className={'md:min-w-[180px] table_title'}>Preview</td>
                                        {products.map(product => <td
                                            className={'border-t-0 border-b border-x md:border '}>
                                            <div className={'flex justify-center'}>
                                                <Link href={'/products/23'}>
                                                    <img className={'max-w-[300px]'} src={product.image}
                                                         alt={'product image'}/>
                                                </Link>
                                            </div>
                                        </td>)}
                                    </tr>
                                    <tr>
                                        <td className={'md:min-w-[140px] table_title'}>Name</td>
                                        {products.map(product => <td
                                            className={'border-t-0 border-b border-x md:border'}>
                                            <Link className={'text-lg text-primary-text font-semibold '}
                                                  href={'/products/23'}>
                                                {product.name}
                                            </Link>
                                        </td>)}
                                    </tr>
                                    <tr>
                                        <td className={' md:min-w-[140px] table_title'}>Price</td>
                                        {products.map(product => <td
                                            className={'border-t-0 border-b border-x  md:border'}>
                                            <span
                                                className={' text-2xl font-bold text-primary'}> ${product.price}</span>
                                        </td>)}
                                    </tr>
                                    <tr>
                                        <td className={'md:min-w-[140px] table_title'}>Rating</td>
                                        {products.map(product => <td
                                            className={'border-t-0 border-b border-x md:border'}>
                                            <div className={'flex items-center justify-center gap-2'}>
                                                <Rating rating={product.rating}/> <span
                                                className={'text-gray-400'}>({product.totalReview})</span>
                                            </div>
                                        </td>)}
                                    </tr>
                                    <tr>
                                        <td className={'md:min-w-[140px] table_title'}>Description</td>
                                        {products.map(product => <td
                                            className={'border-t-0 border-b border-x  md:border '}>
                                            <p className={'line-clamp-4 text-sm font-medium text-gray-500'}>{product.description}</p>
                                        </td>)}
                                    </tr>
                                    <tr>
                                        <td className={'md:min-w-[140px] table_title'}>Stock
                                            status
                                        </td>
                                        {products.map(product => <td
                                            className={'border-t-0 border-b border-x md:border first-letter:uppercase'}>
                                            {product.status === 'in stock' && <span
                                                className={'text-primary bg-primary-soft px-2 py-1.5 rounded-md'}>{product.status}</span>}
                                            {product.status === 'out of stock' && <span
                                                className={'text-rose bg-softRose px-2 py-1.5 rounded-md'}>{product.status}</span>}
                                        </td>)}
                                    </tr>
                                    <tr>
                                        <td className={' md:min-w-[140px] table_title'}>Weight</td>
                                        {products.map(product => <td
                                            className={'border-t-0 border-b border-x  md:border'}>
                                            <span className={' text-primary-text'}>{product.weight} gram</span>
                                        </td>)}
                                    </tr>
                                    <tr>
                                        <td className={' md:min-w-[140px] table_title'}>Dimensions</td>
                                        {products.map(product => <td
                                            className={cn('border-t-0 border-b border-x  md:border ')}>
                                    <span
                                        className={cn('text-gray-400', {'text-primary-text': product.dimensions})}> {product.dimensions ? product.dimensions : 'N/A'}</span>
                                        </td>)}
                                    </tr>
                                    <tr>
                                        <td className={' md:min-w-[140px] table_title'}>Buy now</td>
                                        {products.map(product => <td
                                            className={'border-t-0 border-b border-x md:border'}>
                                            <div className={'flex justify-center'}>
                                                {product.status === 'in stock' && <button
                                                    className={'bg-primary brightness-95 hover:brightness-100 px-4 py-2 rounded-md text-white flex items-center gap-2'}>
                                                    <IoBagAddOutline/> <span>Add to cart</span>
                                                </button>}

                                                {product.status === 'out of stock' && <button
                                                    className={'bg-gray-700 brightness-95 hover:bg-gray-900 px-4 py-2 rounded-md text-white flex items-center gap-2'}>
                                                    <IoBagAddOutline/> <span>Contact us</span>
                                                </button>}
                                            </div>
                                        </td>)}
                                    </tr>
                                    <tr>
                                        <td className={'md:min-w-[140px] table_title'}>Action</td>
                                        {products.map(product => <td
                                            className={'border-t-0 border-b border-x border-b md:border '}>
                                            <button className={'border p-2 rounded hover:bg-warning hover:text-white'}>
                                                <GoTrash/>
                                            </button>
                                        </td>)}
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </Container>
            </Layout>
        </>
    );
};

export default ShopCompare;
