import React from 'react';
import ProductRating from '../Shared/ProductRating';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import CounterBox from './CounterBox';
import Countdown from 'react-countdown'

const CardContent = () => {
    return (
        <>
            <div className='deals_card_content absolute
             left-7 right-7 -bottom-[88px]'>


                <Countdown
                    date={new Date("Jan 5, 2024 15:37:25").getTime()}
                    renderer={CounterBox}
                />

                <div className=' bg-white rounded-lg  p-7 deals_content'>
                    <h4 className='font-bold text-gray-500 text-[16px]'>Organic Cage Grade A Large Eggs</h4>
                    <div className='flex space-x-1'>
                        <ProductRating rating={5} />
                        <span className='text-gray-400'>1</span>
                    </div>
                    <h6 className='font-medium my-3'>
                        <span className='text-[#b6b6b6]'>By{" "}</span>
                        <Link
                            href="/"
                            className='text-[#3bb77e]'>
                            Hambger Hel</Link>
                    </h6>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-x-3 mt-2'>
                            <h5 className='text-[#3bb77e] text-[18px] font-bold underline'>$25.55</h5>
                            <h5 className='text-gray-300 line-through text-[15px] font-bold decoration-2'>$25.55</h5>
                        </div>
                        <Link className='text-[#3bb77e] px-[10px] py-1 gap-1 rounded flex bg-[#3bb77e]/20' href={'/'}>
                            <ShoppingCartIcon className='' width={18} /> Add</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardContent;