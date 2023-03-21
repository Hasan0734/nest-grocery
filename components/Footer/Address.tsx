import React from 'react';
import { Clock, Headphones } from 'react-feather';
import { MapPinIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion'


const Address = () => {
    return (
        <>
            <motion.div

                initial={
                    {
                        opacity: 0.4,
                        y: 60
                    }
                }
                whileInView={
                    {
                        opacity: 1,
                        y: 0
                    }
                }

                viewport={{ once: false }}
                transition={{
                    delay: 0.2,
                    y: { duration: 0.5 },
                }}

                className='md:min-w-[258px] 2xl:min-w-[315px] p-2'>
                <img className='w-[70%] mb-5'
                    src="/assets/logo.png" alt="" />
                <p className='font-semibold text-[17px] text-[#253d4e]'>Awesome grocery store website template</p>
                <ul className='mt-8'>
                    <li className='flex gap-x-2 items-start py-2'>
                        <MapPinIcon className='w-10 text-[#33b77e]' />
                        <div>
                            <strong className='mr-2'>Address: </strong>
                            5171W Campbell Ave Kent, utah 53127 United States

                        </div>

                    </li>
                    <li className='flex gap-x-2 items-start py-2'>
                        <Headphones className='w-5 text-[#33b77e]' />
                        <div>
                            <strong>Call Us: </strong>
                            (+880) - 017XXXXXXX
                        </div>
                    </li>
                    <li className='flex gap-x-2 items-start py-2'>
                        <PaperAirplaneIcon className='w-5 text-[#33b77e]' />
                        <div>
                            <strong>Email: </strong>
                            sale@nest.com
                        </div>
                    </li>
                    <li className='flex gap-x-2 items-start py-2'>
                        <Clock className='w-5 text-[#33b77e]' />
                        <div >
                            <strong>Hours: </strong>
                            10:00 - 18:00, Mon - Sat
                        </div>
                    </li>
                </ul>
            </motion.div>
        </>
    );
};

export default Address;