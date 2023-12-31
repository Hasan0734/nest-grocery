import React, {useState} from 'react';
import Rating from "@/components/Shared/Rating";
import {cn} from "@/utls/utils";
import {IoCartOutline} from "react-icons/io5";
import {CiHeart} from "react-icons/ci";
import {IoShuffleOutline} from "react-icons/io5";
import Link from "next/link";
import ProductImages from "@/components/ProductDetails/ProductImages";
import ProductQuantity from "@/components/Shared/ProductQuantity";

const variants = [
    {id: 1, weight: '50g', size: null},
    {id: 2, weight: '60g', size: null},
    {id: 3, weight: '80g', size: null},
    {id: 4, weight: '100g', size: null},
    {id: 5, weight: '150g', size: null},
]
const Product = () => {
    const [selectSize, setSelectSize] = useState('50g')
    const [quantity, setQuantity] = useState(1)
    return (

            <div className={'flex flex-col xl:flex-row justify-between gap-14 w-full'}>
                <ProductImages/>
                <div className={'space-y-8'}>
                    <span className={'text-rose bg-softRose font-bold px-3 py-1.5 rounded'}>Sale Off</span>
                    <h3 className={'text-4xl font-bold text-primary-text'}>Seeds of Change Organic Quinoa, Brown</h3>
                    <div className={'flex items-center gap-2'}>
                        <Rating/>
                        <span className={'text-sm text-gray-400 font-medium'}>(32) Reviews</span>
                    </div>
                    <div className={'flex items-center gap-4'}>
                        <h2 className={'text-5xl text-primary font-bold'}>$32</h2>
                        <div>
                            <h4 className={''}>
                                <span className={'line-through text-2xl font-bold text-gray-300'}>$52</span>
                                <sup className={'text-warning font-semibold -top-3 ml-1'}>26% Off</sup></h4>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis
                        minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.</p>

                    <div className={'flex items-center gap-3'}>
                        <span className={'text-gray-400 font-bold text-sm'}>Size / Weight:</span>
                        <div className={'flex items-center gap-0.5 flex-wrap '}>
                            {variants.map(variant => (
                                <button onClick={() => setSelectSize(variant.weight)} key={variant.id}
                                        className={cn('text-gray-400 hover:text-white hover:bg-primary px-2 py-1.5 rounded text-sm font-medium duration-300', {
                                            'bg-primary text-white': variant.weight === selectSize
                                        })}
                                >{variant.weight}</button>
                            ))}
                        </div>
                    </div>
                    <div className={'flex items-center gap-2 flex-wrap'}>
                       <ProductQuantity setQuantity={setQuantity} quantity={quantity}/>
                        <button
                            className={'bg-primary text-white flex items-center px-4 py-3 rounded gap-2 hover:brightness-95 duration-300 '}>
                            <IoCartOutline size={22}/>
                            <span className={'text-xl font-bold'}>Add to cart</span>
                        </button>
                        <button
                            className={'px-3.5 py-3.5 rounded hover:bg-primary hover:text-white text-gray-400 border border-gray-200 duration-300 hover:-translate-y-1'}>
                            <CiHeart size={23}/>
                        </button>
                        <button
                            className={'px-3.5 py-3.5 rounded hover:bg-primary hover:text-white text-gray-400 border border-gray-200 duration-300 hover:-translate-y-1'}>
                            <IoShuffleOutline size={23}/>
                        </button>
                    </div>
                    <div>
                        <ul className={'text-sm font-semibold grid grid-cols-2 gap-2'}>
                            <li className={'flex items-center gap-1'}>
                                <span className={'text-gray-400'}>Type:</span>
                                <span className={'text-primary'}>Organic</span>
                            </li>
                            <li className={'flex items-center gap-1'}>
                                <span className={'text-gray-400'}>SKU:</span>
                                <span className={'text-primary'}>FWM15VKT</span>
                            </li>
                            <li className={'flex items-center gap-1'}>
                                <span className={'text-gray-400'}>MFG:</span>
                                <span className={'text-primary'}>Jun 4.2022</span>
                            </li>
                            <li className={'flex items-center gap-1'}>
                                <span className={'text-gray-400'}>Tags:</span>
                                <span className={'text-primary'}> <Link href={'/products/tag/snack'}>Snack</Link>, <Link
                                    href={'/products/tag/organic'}>Organic</Link>, <Link
                                    href={'/products/tag/brown'}>Brown</Link></span>
                            </li>
                            <li className={'flex items-center gap-1'}>
                                <span className={'text-gray-400'}>LIFE:</span>
                                <span className={'text-primary'}>70 days</span>
                            </li>
                            <li className={'flex items-center gap-1'}>
                                <span className={'text-gray-400'}>Stock:</span>
                                <span className={'text-primary'}>8 Items In Stock</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

    );
};

export default Product;
