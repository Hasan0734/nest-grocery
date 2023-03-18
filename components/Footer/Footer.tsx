import { MapPinIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import { Clock, Headphones } from 'react-feather';

const Footer = () => {
    return (
        <footer className=''>
            <div>
                <section className=' max-w-8xl mx-auto px-4 2xl:px-0  my-12'>
                    <div className='flex justify-between'>
                        <div className='max-w-[315px]'>
                            <img className='w-[70%] mb-5'
                                src="/assets/logo.png" alt="" />
                            <p className='font-semibold text-[17px] text-[#253d4e]'>Awesome grocery store website template</p>
                            <ul className='mt-8'>
                                <li className='flex gap-x-2 items-start'>
                                    <MapPinIcon className='w-10 text-[#33b77e]' />
                                    <div>
                                        <strong className='mr-2'>Address:</strong>
                                        5171W Campbell Ave Kent, utah 53127 United States

                                    </div>

                                </li>
                                <li className='flex gap-x-2 flex-wrap'>
                                    <div className="flex gap-x-2">
                                        <Headphones className='w-5 text-[#33b77e]' />
                                        <strong>Call Us:</strong>
                                    </div>
                                    (+880) - 017XXXXXXX
                                </li>
                                <li className='flex gap-x-2 flex-wrap'>
                                    <div className="flex gap-x-2">
                                        <PaperAirplaneIcon className='w-5 text-[#33b77e]' />
                                        <strong>Email:</strong>
                                    </div>
                                    sale@nest.com
                                </li>
                                <li className='flex gap-x-2 flex-wrap'>
                                    <div className="flex gap-x-2">
                                        <Clock className='w-5 text-[#33b77e]' />
                                        <strong>Hours:</strong>
                                    </div>
                                    10:00 - 18:00, Mon - Sat
                                </li>
                            </ul>
                        </div>
                        <div className='max-w-[286px]'>
                            <h3 className='text-[24px] text-[#253d4e] font-bold'>Install App</h3>
                            <p className='text-sm font-medium text-gray-600'>From App Store of Google Play</p>
                            <div className='flex gap-4 mt-6'>
                                <Link href={'/app-store'}>
                                    <img  src="/assets/app-store.jpg" alt="" />
                                </Link>
                                <Link href={'/app-store'} >
                                    <img  src="/assets/google-play.jpg" alt="" />
                                </Link>
                            </div>
                            <div>
                                <p className='mt-10 text-sm font-medium text-gray-600'>
                                    Secured Payment Gateway
                                </p>
                                <img className='mt-3 w-[75%]' src="/assets/payment-method.png" alt="" />
                            </div>
                        </div>
                    </div>

                </section>
                <section>

                </section>
            </div>
        </footer>
    );
};

export default Footer;