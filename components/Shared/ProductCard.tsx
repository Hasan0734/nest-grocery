import { EyeIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import { Shuffle } from 'react-feather';
import { NumericFormat } from 'react-number-format';
import ProductRating from './ProductRating';

const ProductCard = () => {
    return (
        <>
            <div className=' product_card border 
         border-gray-200 duration-300 rounded-[15px] overflow-hidden p-5 relative'>
                <div className='relative'>
                    <div className='relative flex justify-center'>
                        <div className='flex justify-center'>
                            <img className='card_image1 w-[75%] md:w-full' src="/assets/popular-product/product-1-1.jpg" alt="" />
                            <img className='card_image2 w-[75%] md:w-full' src="/assets/popular-product/product-1-2.jpg" alt="" />
                        </div>
                    </div>
                    <ul className=' absolute left-1/2  product_action
                 top-[36%] flex bg-white divide-x-2 z-10
                  rounded-md border border-[#bce3c9] divide-[#3bb77e]/20' >
                        <li className='relative'>
                            <button className='px-[10px] py-[10px] text-[#3bb77e] hover:text-orange-500 relative cursor-pointer'>
                                <EyeIcon width={18} />

                            </button>
                            <small className='
                        '>Quick view</small>
                        </li>
                        <li className='relative'>
                            <button className='px-[10px] py-[10px] text-[#3bb77e] hover:text-orange-500 relative cursor-pointer'>
                                <Shuffle size={18} />

                            </button>
                            <small className='
                        '>Compare</small>
                        </li>
                        <li className='relative'>
                            <button className='px-[10px] py-[10px] text-[#3bb77e] hover:text-orange-500 relative cursor-pointer'>
                                <HeartIcon width={18} />
                            </button>
                            <small className='
                        '>Wishlist</small>
                        </li>
                    </ul>

                </div>
                {/* content */}
                <div>
                    <Link href={"/"} className="text-[#adadad] text-[12px] ">
                        Fresh Fruit
                    </Link>
                    {/* title */}
                    <h3 className='text-[#253d4e] text-[16px] font-bold leading-5 my-2'>
                        <Link href={"/"}>
                            Sees of Change Organic Red Rice
                        </Link>
                    </h3>

                    {/* rating */}
                    <div className='flex gap-1'>
                        <ProductRating rating={2} />
                        <span>1</span>
                    </div>

                    <h6 className='font-medium my-3'>
                        <span className='text-[#b6b6b6]'>By{" "}</span>
                        <Link
                            href="/"
                            className='text-[#3bb77e]'>
                            {"jahid hasan"}</Link>
                    </h6>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-x-3 mt-2'>
                            <h5
                                className='text-[#3bb77e] 
                            text-[18px] font-bold underline'>
                                <NumericFormat
                                    displayType='text'
                                    value={20.5}
                                    decimalScale={2}
                                    prefix="$"
                                    fixedDecimalScale={true}
                                />
                            </h5>

                            <h5
                                className='text-gray-300 
                            line-through text-[15px] font-bold
                             decoration-2'>
                                <NumericFormat
                                    displayType='text'
                                    value={22.55}
                                    decimalScale={2}
                                    prefix="$"
                                    fixedDecimalScale={true}
                                />

                            </h5>
                        </div>
                        <Link
                            className='text-[#3bb77e] px-[10px] 
                        py-1 gap-1 rounded flex bg-[#3bb77e]/20' href={'/'}>
                            <ShoppingCartIcon className='' width={18} /> Add</Link>
                    </div>
                </div>


                {/* product offer */}
                <div className='absolute top-0 left-0 z-10'>
                    <div className='bg-[#3bb77e] px-5 py-2 text-white font-semibold text-[12px] rounded-br-2xl'>10%</div>
                </div>
                <div className='absolute top-0 right-0 z-10'>
                    <div className='bg-[#3bb77e] px-5 py-2 text-white font-semibold text-[12px] rounded-bl-2xl'>10%</div>
                </div>
            </div >
        </>
    );
};

export default ProductCard;