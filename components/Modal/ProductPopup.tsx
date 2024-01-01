import React from 'react';
import Countdown from "react-countdown";
import CounterBox from "@/components/Modal/CounterBox";
import ProductRating from "@/components/Shared/Rating";
import {ShoppingCartIcon} from "@heroicons/react/24/outline";

const ProductPopup = () => {
    return (
        <>
            <div className="p-2 xs:p-4 bg-right-bottom bg-no-repeat bg-contain bg-[url('/assets/popup-1.png')]">
                <h4 className='text-[#fdc040] text-[16px] font-bold'>Deal of the Day</h4>
                <a href={'/products/12'} className='' tabIndex={-1}>
                    <span
                        className='mb-2 sm:mb-5 block text-gray-black text-3xl xs:text-4xl sm:text-[45px] sm:leading-[60px] xs:max-w-[80%] md:max-w-[59%] font-bold'>
                        Seeds of change Organic Red Rice
                    </span>
                </a>
                <div className='flex space-x-4 items-center mb-2 sm:mb-5'>
                    <h4 className='text-primary text-4xl sm:text-[50px] font-bold'>$28.85</h4>
                    <h4 className='text-[#b6b6b6] text-xl sm:text-[28px] font-bold line-through decoration-[3px]'>$32.80</h4>
                </div>
                <div className='mb-3 sm:mb-8'>
                    <h5 className='text-[16x] text-light-gray mb-5 font-semibold'>Hurry Up! Offer End In:</h5>
                    <Countdown
                        date={new Date("Jan 5, 2026 15:37:25").getTime()}
                        renderer={CounterBox}
                    />

                </div>
                <div className='flex items-center space-x-2 mb-5'>
                    <ProductRating rating={0}/>
                    <span className="text-light-gray text-sm">(0)</span>
                </div>
                <button className='flex items-center gap-2 bg-primary hover:bg-orange-light duration-300 py-3 sm:py-4 px-4 rounded-md text-white'>
                    <ShoppingCartIcon width={20}/>
                    <span className='font-semibold'>Add to cart</span>
                </button>
            </div>
        </>
    );
};

export default ProductPopup;
