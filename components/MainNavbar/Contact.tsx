import React from 'react';
import { Headphones } from 'react-feather';

const Contact = () => {
    return (
        <>
            <div className='gap-2 items-center hidden  2xl:flex'>
                <Headphones size={35} color="black" />
                <div>
                    <a href='tel:017' className='text-[#3bb77e] hover:text-yellow-500 text-2xl font-bold'>017XXXXXXX</a>
                    <p className='text-sm'>24/7 Support Center</p>
                </div>
            </div>   
        </>
    );
};

export default Contact;