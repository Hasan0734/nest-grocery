import { returnPaginationRange } from '@/utls/appUtls';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import React from 'react';

const Pagination = ({ totalPage, page, limit = 5, siblings, onPageChange }: any) => {

    const array = returnPaginationRange(totalPage, page, limit, siblings);

    console.log(array)

    return (
        <>
            <ul className='flex items-center gap-3'>
                <li onClick={() => onPageChange('left')}>
                    <span
                        className='page-link hover:bg-green-black hover:text-white
                        duration-200 bg-gray-200'>
                        <ChevronLeftIcon className='' />
                    </span>
                </li>

                {array.map(value => {
                    if (value === page) {
                        return (
                            <li onClick={() => onPageChange(page)} key={value}>
                                <span
                                    className='page-link
                                     bg-green-black text-white'>
                                    {value}
                                </span>
                            </li>
                        )
                    } else {
                        return (
                            <li onClick={() => onPageChange(value)} key={value}>
                                <span
                                    className='page-link hover:bg-green-black hover:text-white
                                    duration-200 bg-gray-200'>
                                    {value}
                                </span>
                            </li>
                        )
                    }
                })}

                <li onClick={() => onPageChange('right')}>
                    <span
                        className='page-link hover:bg-green-black hover:text-white
                        duration-200 bg-gray-200'>
                        <ChevronRightIcon className='' />
                    </span>
                </li>
            </ul>
        </>
    );
};

export default Pagination;