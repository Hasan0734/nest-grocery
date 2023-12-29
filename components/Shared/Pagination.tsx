import { returnPaginationRange } from '@/utls/appUtls';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import queryString from 'query-string';

const Pagination = ({ totalItem, page = 1, limit = 5, siblings = 1, paginateType = "state" }: any) => {


    const router = useRouter();
    const [newPage, setNewPage] = useState(page)
    const [newLimit, setNewLimit] = useState(limit)


    if (router.query.limit && paginateType === "query") {
        setNewLimit(Number(router.query.limit))
    }

    if (router.query.page && paginateType === "query") {
        setNewPage(Number(router.query.page))
    }

    let totalPage = Math.ceil(totalItem / newLimit);

    const array = returnPaginationRange(totalPage, newPage, newLimit, siblings);

    const pushQuery = (qValue: any) => {

        const str = queryString.stringify(qValue, { arrayFormat: "comma", sort: false });
        router.replace({ pathname: `/vendor/${router.query.vendorId}`, query: str });
    }

    const handlePageChange = (value: any) => {
        if (paginateType === 'query') {
            const prevQuery = { ...router.query };
            delete prevQuery.vendorId

            if (value === "... ") {
                pushQuery({ ...prevQuery, page: 1 })

            } else if (value === 'left') {
                if (newPage !== 1) {
                    pushQuery({ ...prevQuery, page: newPage - 1 })
                }
            }
            else if (value === "right") {

                if (newPage !== totalPage) {
                    pushQuery({ ...prevQuery, page: newPage + 1 })
                }
            } else if (value === " ...") {
                pushQuery({ ...prevQuery, page: totalPage })
            }
            else {
                pushQuery({ ...prevQuery, page: value })
            }
        }
        if (paginateType === 'state') {

            if (value === "... ") {
                setNewPage(1)

            } else if (value === 'left') {
                if (newPage !== 1) {
                    setNewPage(newPage - 1)
                }
            }
            else if (value === "right") {

                if (newPage !== totalPage) {
                    setNewPage(newPage + 1)
                }
            } else if (value === " ...") {


                setNewPage(totalPage)
            }
            else {
                setNewPage(value)
            }
        }
    }


    return (
        <>
            <ul className='flex items-center gap-3'>
                <li onClick={() => handlePageChange('left')}>
                    <span
                        className='page-link hover:bg-primary hover:text-white
                        duration-200 bg-gray-200'>
                        <ChevronLeftIcon className='' />
                    </span>
                </li>

                {array.map(value => {
                    if (value === newPage) {
                        return (
                            <li onClick={() => handlePageChange(value)} key={value}>
                                <span
                                    className='page-link
                                     bg-primary text-white'>
                                    {value}
                                </span>
                            </li>
                        )
                    } else {
                        return (
                            <li onClick={() => handlePageChange(value)} key={value}>
                                <span
                                    className='page-link hover:bg-primary hover:text-white
                                    duration-200 bg-gray-200'>
                                    {value}
                                </span>
                            </li>
                        )
                    }
                })}

                <li onClick={() => handlePageChange('right')}>
                    <span
                        className='page-link hover:bg-primary hover:text-white
                        duration-200 bg-gray-200'>
                        <ChevronRightIcon className='' />
                    </span>
                </li>
            </ul>
        </>
    );
};

export default Pagination;