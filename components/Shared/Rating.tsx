import { StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as SolidStarIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Ratting = ({ rating }: any) => {

    const ratingarr: number[] = [...Array(5)];
    let inActinve = []

    for (let i = 0; i < ratingarr?.length - rating; i++) {
        inActinve.push(i)
    }

    return (
        <div className='flex '>
            {ratingarr.slice(0, rating).map((rate, i) => <SolidStarIcon className='text-yellow-500' width={15} key={i++} />)}
            {inActinve.map((rate, i) => <StarIcon className='text-gray-400' width={15} key={i++} />)}
        </div>

    );
};

export default Ratting;