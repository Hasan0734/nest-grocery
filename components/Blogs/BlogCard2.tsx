import React from 'react';
import Link from "next/link";

const BlogCard2 = ({blog}:any) => {
    return (
        <>
            <div className={"flex items-center gap-3"}>

                    <img className={'w-[75px] h-[75px] rounded-lg'} src={blog.images} alt={'blog image'}/>

                <div>
                    <Link className={'font-semibold'} href={'/'}>
                        {blog.title}
                    </Link>

                    <p className={'text-sm text-gray-500 mt-2'}>February 19, 2022</p>
                </div>
            </div>
        </>
    );
};

export default BlogCard2;
