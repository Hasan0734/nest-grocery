import Link from 'next/link';
import React from 'react';
import { NumericFormat } from 'react-number-format';


const TrendingProductCard = ({ product }: any) => {
    return (
        <>
            <div className='my-[10px] gap-3 flex'>
                <Link href='/' className='max-w-[66px] lg:max-w-[77px] h-[66px] block'>
                    <img className='w-full' src={product.image} alt="" />
                </Link>
                <div className=''>
                    <h6 className='my-1 line-clamp-2'>
                        <Link href='/'
                            className='leading-6 line-clamp-2 text-[15px] font-bold text-gray-black hover:text-green-black'>
                            {product.name}
                        </Link>
                    </h6>

                    {!product.price_range && <div className='flex gap-x-2 mt-2 items-center'>
                        <h5
                            className='text-light-gray
                         line-through text-[15px] font-medium
                          decoration-1'>

                            <NumericFormat
                                displayType='text'
                                value={product.old_price}
                                decimalScale={2}
                                prefix="$"
                                fixedDecimalScale={true}
                            />
                        </h5>
                        <h5
                            className='text-green-black
                         text-[16px] font-bold'>
                            <NumericFormat
                                displayType='text'
                                value={product.new_price}
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

export default TrendingProductCard;