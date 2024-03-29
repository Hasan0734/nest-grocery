import Link from 'next/link';
import React from 'react';
import ProductRating from '../Shared/Rating';
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { FaArrowRight } from 'react-icons/fa';

const ListCard = ({ background = "bg-primary",
    top = "top-0", position = "left-0",
    radius = "rounded-br-2xl", vendor }: any) => {


    return (
        <div className=' border border-gray-200 hover:border-primary/50 duration-300
        hover:shadow-[0_5px_8px_rgba(0,0,0,0.06)] p-5 rounded-2xl relative overflow-hidden'>
            <div className='flex gap-5  lg:items-center flex-col lg:flex-row'>
                <div className=''>

                    <img
                        className='max-w-[144px]'
                        src={vendor.image} alt="" />
                    <div className='mt-4'>
                        <button className='bg-[#DEF9EC] px-4 py-2
                         text-primary font-bold rounded-md text-sm'>

                            {vendor.total_products} products</button>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <span className='text-[#B6B6B6] text-sm font-medium'>
                            Since {vendor.created_at}</span>

                    </div>
                    <div className=''>

                        <h3 className='text-2xl text-gray-black font-bold mb-1'>
                            <Link href={"/index/id"}>{vendor.name}</Link>
                        </h3>

                        <div className='flex gap-2 items-center'>
                            <ProductRating rating={vendor.rating} />
                            <span className='text-sm text-[#B6B6B6] text-semibold'>(4.0)</span>
                        </div>


                    </div>
                    <ul className='mt-4'>
                        <li className='text-[15px] text-[#b6b6b6] my-3'>
                            <MapPinIcon className='h-5 w-5 inline mb-1 mr-2 text-primary' />

                            <strong>Address: </strong><span>5171 W Campbell Ave Kent, Utah 53127 United States</span>

                        </li>
                        <li className='text-[15px] text-[#b6b6b6] my-3'>
                            <PhoneIcon className='  h-5 w-5 inline mb-1 mr-2 text-primary' />
                            <strong>Call Us: </strong><span>(+91) - 540-025-123456</span>
                        </li>
                    </ul>
                    <div className='mt-8 mb-4'>
                        <Link href={'/store-listing/id'} className='font-bold text-white text-sm bg-primary px-3 py-2 rounded-md'>
                            <span> Visit Store</span> <FaArrowRight className='w-3 h-3 inline' />
                        </Link>
                    </div>
                </div>

                {/* extra information store-listing type*/}

                {/* <div className='absolute top-0 left-0 z-10'>
                <div className='bg-primary px-5 py-2
                text-white font-semibold text-[12px] rounded-br-2xl'>10%</div>
                </div> */}

                {vendor?.type && <div className={`absolute ${top} ${position} z-10`}>
                    <div className={`${vendor.type === 'Mall' ?
                        "bg-pink-500" : vendor.type === 'Preferred' ? "bg-orange-500" :
                            background} ${radius} px-5 py-2
 text-white font-semibold text-[12px]
  `}>{vendor.type}</div>
                </div>}
            </div>


        </div>
    );
};

export default ListCard;