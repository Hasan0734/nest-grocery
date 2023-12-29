import React from 'react';
import ProductRating from "@/components/Shared/Rating";
import {MapPinIcon, PhoneIcon} from "@heroicons/react/24/outline";
import {FaFacebookF, FaInstagram, FaPinterest, FaTwitter} from "react-icons/fa";

const VendorHeader = () => {
    return (
        <>
            <section className='py-8'>
                <div className='max-w-8xl mx-auto px-4 2xl:px-0'>
                    <div
                        className='vendor-conver p-6 md:p-12 rounded-2xl flex flex-col md:flex-row gap-5'
                        style={{ backgroundImage: 'url(/assets/vendors/vendor-header-bg-min.png)' }}>

                        <div className='w-[136px]'>
                            <img
                                className='w-full'
                                src="/assets/vendors/vendor-17.png"
                                alt="" />
                        </div>

                        <div className='text-white w-full'>
                            <span className='text-[#b6b6b6] text-sm block mb-1'>Since 2012</span>
                            <h2 className='text-[32px] leading-9 font-bold mb-3'>Nest Food Ltd.</h2>
                            <div className='flex gap-2 items-center mb-4'>
                                <ProductRating rating={3} />
                                <span className='text-sm text-[#b6b6b6]'>(4.0)</span>
                            </div>
                            <div className='flex flex-col lg:flex-row gap-8'>
                                <div className='max-w-[450px]'>
                                    <p className='text-sm font-medium leading-6'>
                                        Got a smooth, buttery spread in your fridge? Chances are good that it's Good Chef. This brand made Lionto's list of the most popular grocery brands across the country.
                                    </p>
                                </div>
                                <div className='max-w-[300px]'>
                                    <ul className=''>
                                        <li className='text-sm font-medium leading-6'>
                                            <MapPinIcon className='h-5 w-5 inline mb-1 mr-2 text-primary' />

                                            <strong>Address: </strong><span>5171 W Campbell Ave Kent, Utah 53127 United States</span>

                                        </li>
                                        <li className='text-sm font-medium leading-6'>
                                            <PhoneIcon className='  h-5 w-5 inline mb-1 mr-2 text-primary' />
                                            <strong>Call Us: </strong><span>(+91) - 540-025-123456</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className='text-[16px] font-bold'>Follow Us</h4>
                                    <ul className='flex gap-3 items-center mt-3'>
                                        <li>

                                            <a href='http://twitter.com/' target='_blank'>
                                                <FaTwitter className='w-8 h-8 p-2 bg-[#55ace3] rounded-full' />
                                            </a>

                                        </li>
                                        <li>

                                            <a href='http://facebook.com/' target='_blank'>
                                                <FaFacebookF className='w-8 h-8 p-2 bg-[#4e6297] rounded-full' />
                                            </a>

                                        </li>
                                        <li>

                                            <a href="http://instagram.com/" target='_blank'>
                                                <FaInstagram className='w-8 h-8 p-2 bg-[#fd1d1d] rounded-full' />
                                            </a>

                                        </li>
                                        <li>

                                            <a href="http://pinterest.com/" target='_blank' >
                                                <FaPinterest className='w-8 h-8 p-2 bg-[#e60023] rounded-full' />
                                            </a>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default VendorHeader;
