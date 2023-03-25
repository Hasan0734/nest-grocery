import React from 'react';
import ProductRating from '../Shared/ProductRating';
import Link from 'next/link';
import { NumericFormat } from 'react-number-format';



const TopProductCard = ({ product }: any) => {
    return (
        <>
            <div className='flex py-3 hover:-translate-y-2 duration-300'>
                <Link href='/'>
                    <img className='w-32 h-full' src={product.image} alt="" />
                </Link>
                <div className='py-2 px-4'>
                    <h6 className='my-1'>
                        <Link href='/'
                            className='leading-6 line-clamp-2 text-[16px] font-bold text-[#253d4e] hover:text-[#3bb77e]'>
                            {product.name}
                        </Link>
                    </h6>
                    <div className='flex space-x-1 items-center'>
                        <ProductRating rating={product.rating} />
                        <span className='text-gray-400'>1</span>
                    </div>
                    {!product.price_range && <div className='flex gap-x-1 mt-2'>
                        <h5
                            className='text-[#3bb77e] 
                         text-[18px] font-bold underline'>
                            <NumericFormat
                                displayType='text'
                                value={product.new_price}
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
                                value={product.old_price}
                                decimalScale={2}
                                prefix="$"
                                fixedDecimalScale={true}
                            />
                        </h5>
                    </div>}
                    {product.price_range && <div className='flex gap-x-1 mt-2'>
                        <h5
                            className='text-[#3bb77e] 
                        text-[18px] font-bold'>
                            <NumericFormat
                                displayType='text'
                                value={product.price_range.min}
                                decimalScale={2}
                                prefix="$"
                                fixedDecimalScale={true}
                            /> -  <NumericFormat
                                displayType='text'
                                value={product.price_range.max}
                                decimalScale={2}
                                prefix="$"
                                fixedDecimalScale={true}
                            />
                        </h5>
                    </div>}

                </div>
            </div>
        </>
    );
};

export default TopProductCard;