import React from 'react';
import { Headphones } from 'react-feather';

const Contact = () => {
    return (
        <>
            <div className='gap-2 items-center hidden  2xl:flex'>
                <Headphones size={25} color="gray" />
                <div>
                    <h3>017XXXXXXX</h3>
                    <p>24/7 Support Center</p>
                </div>
            </div>   
        </>
    );
};

export default Contact;