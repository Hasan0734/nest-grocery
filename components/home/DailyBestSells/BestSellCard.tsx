import { EyeIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import { Shuffle } from 'react-feather';
import { NumericFormat } from 'react-number-format';
import ProductRating from '../../Shared/Rating';

const BestSellCard = () => {
    return (
        <div className=' product_card border h-[520px]
         border-gray-200 duration-300 rounded-[15px] overflow-hidden p-5 relative'>
            <div className='relative'>
                <div className='relative flex justify-center'>
                    <div className='flex justify-center'>
                        <img className='card_image1 w-[230px] h-[230px]' src="/assets/popular-product/product-1-1.jpg" alt="" />
                        <img className='card_image2 w-[230px] h-[230px]' src="/assets/popular-product/product-1-2.jpg" alt="" />
                    </div>
                </div>
                <ul className=' absolute left-1/2 product_action
                 top-[36%] flex bg-white divide-x-2 z-10
                  rounded-md border border-[#bce3c9] divide-[#3bb77e]/20' >
                    <li className='relative'>
                        <button className='px-[10px] py-[10px] text-primary hover:text-orange-500 relative cursor-pointer'>
                            <EyeIcon width={18} />

                        </button>
                        <small className='
                        '>Quick view</small>
                    </li>
                    <li className='relative'>
                        <button className='px-[10px] py-[10px] text-primary hover:text-orange-500 relative cursor-pointer'>
                            <Shuffle size={18} />

                        </button>
                        <small className='
                        '>Compare</small>
                    </li>
                    <li className='relative'>
                        <button className='px-[10px] py-[10px] text-primary hover:text-orange-500 relative cursor-pointer'>
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
                {/* price */}
                <div className='flex gap-x-4 mt-2 items-center'>
                    <h5
                        className='text-primary 
                         text-[18px] font-bold underline'>
                        <NumericFormat
                            displayType='text'
                            value={20.55}
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
                            value={25.55}
                            decimalScale={2}
                            prefix="$"
                            fixedDecimalScale={true}
                        />
                    </h5>
                </div>
                {/* progress bar */}
                <div className='mt-3 mb-2'>
                    <div className='bg-gray-100 h-[6px] w-full rounded-md 
                    relative before:absolute before:w-[70%] 
                    before:h-full before:left-0 before:top-0 
                    before:bg-primary before:rounded-l-md'>

                    </div>

                </div>
                <span
                    className='text-[#253d4e] text-[13px] 
                font-semibold'>Sold: 243/356</span>

                <button
                    className='mt-4 bg-primary
                 hover:bg-warning duration-500 font-bold text-[14px]
                 flex justify-center items-center gap-2 rounded text-white 
                 px-4 py-[14px] w-full text-center'>

                    <ShoppingCartIcon strokeWidth={2} width={20} />
                    Add to Cart
                </button>
            </div>

            {/* product offer */}
            <div className='absolute top-0 left-0 z-10'>
                <div className='bg-primary px-5 py-2 text-white font-semibold text-[12px] rounded-br-2xl'>10%</div>
            </div>
        </div >
    );
};

export default BestSellCard;