import React from 'react';

const BannerForm = () => {
    return (
        <div className='flex lg:block justify-center'>
            <form className='relative w-[85%]'>
                <input className='bg-white rounded-full py-4 w-full pl-4 pr-32 outline-none' type="text" placeholder='Your email address' />
                <input className='absolute right-0 bg-[#3bb77e] px-6 py-4 font-semibold rounded-full text-white' type="submit" value={"Subscribe"} />
            </form>
        </div>
    );
};

export default BannerForm;