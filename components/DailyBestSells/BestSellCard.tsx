import { EyeIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import { NumericFormat } from 'react-number-format';
import ProductRating from '../Shared/ProductRating';

const BestSellCard = () => {
    return (
        <div className='w-[280px] best_sell_card border cursor-pointer
         border-gray-200 duration-300 rounded-[15px] overflow-hidden p-5'>
            <div className='relative'>
                <div className='relative'>
                    <img className='card_image1' src="/assets/popular-product/product-1-1.jpg" alt="" />
                    <img className='card_image2' src="/assets/popular-product/product-1-2.jpg" alt="" />

                </div>
                <ul className='absolute top-4 left-5'>
                    <li>
                        <EyeIcon width={15}/>
                    </li>
                    <li>
                        <EyeIcon width={15}/>
                    </li>
                    <li>
                        <EyeIcon width={15}/>
                    </li>
                </ul>

            </div>
            {/* content */}
            <div>
                <Link href={"/"} className="text-[#adadad] text-[12px] ">
                    Fresh Fruit
                </Link>
                {/* title */}
                <h3 className='text-[#253d4e] text-[16px] font-bold leading-5 my-3'>
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
                <div className='flex gap-x-4 mt-3 items-center'>
                    <h5
                        className='text-[#3bb77e] 
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
                    before:bg-[#3bb77e] before:rounded-l-md'>

                    </div>

                </div>
                <span className='text-[#253d4e] text-[13px] font-semibold'>Sold: 243/356</span>
                <button className='mt-4 bg-[#3bb77e] font-bold text-[14px]
                 flex justify-center items-center gap-2 rounded text-white 
                 px-4 py-3 w-full text-center'>
                    <ShoppingCartIcon strokeWidth={2} width={20} />
                    Add to Cart
                </button>
            </div>

        </div >
    );
};

export default BestSellCard;