import React from 'react';
import {cn} from "@/utls/utils";

const BannerForm = ({className}:{className?: String}) => {
    return (
        <div className='flex md:block justify-start pr-2 pl-2'>
            <form className={cn('relative w-full sm:w-[85%]', className)}>
                <input
                    className='bg-white rounded-full 
                    py-2 md:py-4 w-full pl-4 pr-20 md:pr-32 outline-none'
                    type="text"
                    placeholder='Your email address' />
                <input
                    className='absolute bottom-0 top-0 right-0 bg-[#3bb77e] text-sm md:text-[20px]
                    px-2 md:px-6 py-[8px] md:py-[18px] font-semibold rounded-full text-white'
                    type="submit"
                    value={"Subscribe"} />
            </form>
        </div>
    );
};

export default BannerForm;