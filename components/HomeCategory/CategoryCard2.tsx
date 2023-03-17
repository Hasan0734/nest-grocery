import Link from 'next/link';
import React from 'react';
import slugify from 'slugify';

const CategoryCard2 = ({title, parentLink, image}:any) => {
    return (
        <>
            <div className='w-full relative rounded-lg overflow-hidden last:hidden lg:last:block'>
                <Link href={`/product-category/${slugify(parentLink, '-')}`} legacyBehavior>
                    <a className='w-full block'>
                        <img
                            className='w-full h-full' src={image}
                            alt="" />
                        <div
                            className='absolute top-10 left-10 max-w-[215px] sm:max-w-[240px] md:max-w-[215px]'>
                            <h2
                                className='text-[18px] sm:text-[20px] lg:text-[25px] text-[#253d4e] font-bold leading-8 mb-5'>
                                <Link
                                    legacyBehavior
                                    href={`/product/${slugify(parentLink, '-')}`}>
                                    <a >
                                        {title }
                                    </a>
                                </Link>
                            </h2>
                            <button
                                className='text-white bg-[#3bb77e] px-3 py-1 rounded text-sm'>
                                Shop Now →
                            </button>
                        </div>
                    </a>
                </Link>
            </div>
        </>
    );
};

export default CategoryCard2;