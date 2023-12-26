import Link from 'next/link';
import React from 'react';

const CategoryCard = ({ category }: any) => {
    return (
        <>
            <div className='cat_card py-5 rounded-[12px]' style={{ background: category.background }}>
                <div className='mb-2 cat_card_img'>
                    <Link href={"/"} legacyBehavior>
                        <a className='flex justify-center'>
                            <img className='w-[60%]' src={category.image} />
                        </a>
                    </Link>
                </div>
                <div>
                    <Link href={"/"} legacyBehavior>
                        <a
                            className='text-center block text-[#253d4e] font-bold
                                        '>{category.name}</a>
                    </Link>
                    <span className='block text-center
                                     text-[#7e7e7e] text-[16px]'>
                        {category.items} items
                    </span>
                </div>
            </div>
        </>
    );
};

export default CategoryCard;