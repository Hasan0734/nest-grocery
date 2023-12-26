import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import ShopCardContainer from '../../Shared/ShopCardContainer';

const tags = [
    { id: 1, name: 'Appetizer' },
    { id: 2, name: 'Brococoli' },
    { id: 3, name: 'Cabbage' },
    { id: 4, name: 'Fruit' },
    { id: 5, name: 'Salad' },
    { id: 6, name: 'Smoothie' },
]

const ShopTags = () => {
    return (
        <ShopCardContainer title="Tag Clouds">
            <div className='mt-5'>
                <ul className='flex gap-[6px] flex-wrap'>
                    {tags.map((tag) => <li key={tag.id}>

                        <Link
                            href={"/"}
                            className="text-green-black hover:text-orange-light duration-200 hover:-translate-y-[4px] flex
                         gap-1 items-center border border-gray-200 rounded-full px-3 py-[7px] shadow-[0_3px_5px_rgba(0,0,0,0.04)]">

                            <XMarkIcon width={19} strokeWidth={1} className="text-light-gray" />

                            <span className='font-semibold text-[15px]'>{tag.name}</span>
                        </Link>
                    </li>)}
                </ul>
            </div>
        </ShopCardContainer>
    );
};

export default ShopTags;