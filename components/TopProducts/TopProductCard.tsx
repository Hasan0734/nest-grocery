import React from 'react';
import ProductRating from '../Shared/ProductRating';
import Link from 'next/link';

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
                        className='leading-6 text-[16px] font-bold text-[#253d4e] hover:text-[#3bb77e]'>
                            {product.name}
                        </Link>
                    </h6>
                    <div className='flex space-x-1 items-center'>
                    <ProductRating rating={product.rating} />
                        <span className='text-gray-400'>1</span>
                    </div>
                    {!product.price_range && <div className='flex gap-x-1 mt-2'>
                        <h5 className='text-[#3bb77e] text-[18px] font-bold underline'>$25.55</h5>
                        <h5 className='text-gray-300 line-through text-[15px] font-bold decoration-2'>$25.55</h5>
                    </div>}
                    {product.price_range && <div className='flex gap-x-1 mt-2'>
                        <h5 className='text-[#3bb77e] text-[18px] font-bold'>${product.price_range.min} - {product.price_range.max}</h5>
                    </div>}

                </div>
            </div>
        </>
    );
};

export default TopProductCard;