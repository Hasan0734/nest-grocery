import React from 'react';
import Link from "next/link";
import {FaArrowRightLong} from "react-icons/fa6";

const MyComponent = ({blog}:any) => {
    return (
        <>
            <div className={"rounded-2xl border border-primary/20 hover:-translate-y-2 transform translate-y-0 duration-300"}>
                <Link href={`/blogs/${blog.id}`}>
                    <img className={'w-full rounded-2xl h-[450px] object-center object-cover'} src={blog.images} alt={'blog image'}/>
                </Link>
                <div className={'p-8'}>
                    <div>
                        <Link href={`/blogs/${blog.id}`} className={'text-xl  sm:text-2xl md:text-4xl font-bold text-primary-text hover:text-primary duration-300 transition-colors'}>T
                            {blog.title}
                        </Link>
                        <p className={'text-sm my-5 text-gray-400 leading-6' }>
                            {blog.description}
                        </p>
                    </div>
                    <div className={'flex items-center justify-between'}>
                        <div className={'text-sm flex items-center gap-3'}>
                            <span className={' text-gray-600 font-medium'}>February 19, 2022</span>
                            <span className={'flex items-center gap-2'}><span className={'h-1 w-1 rounded-full bg-gray-400 block'}></span> Post a Comment</span>
                            <span className={'text-gray-400'}> Breakfast</span>
                        </div>
                        <div>
                            <Link href={`/blogs/${blog.id}`} className={'flex items-center gap-2 bg-primary px-4 py-2.5 text-white rounded hover:bg-warning hover:text-primary-text'}>
                                <span className={'text-sm font-semibold'}>Read More</span>
                                <FaArrowRightLong size={15} />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default MyComponent;
