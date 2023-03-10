import React from 'react';

const BannerForm = () => {
    return (
        <div className='flex lg:block justify-center pr-2 pl-2'>
            <form className='relative w-full md:w-[85%]'>
                <input
                    className='bg-white rounded-full 
                    py-1 md:py-4 w-full pl-4 pr-20 md:pr-32 outline-none'
                    type="text"
                    placeholder='Your email address' />
                <input
                    className='absolute right-0 bg-[#3bb77e] text-sm md:text-[18px]
                    px-2 md:px-6 py-[6px] md:py-4 font-semibold rounded-full text-white'
                    type="submit"
                    value={"Subscribe"} />
            </form>
        </div>
    );
};

export default BannerForm;