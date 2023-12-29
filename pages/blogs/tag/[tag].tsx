import React from 'react';
import Head from "next/head";
import Layout from "@/components/Layout";
import BreadCrumbs from "@/components/Shared/BreadCrumbs";
import Link from "next/link";
import {Home} from "react-feather";
import {ChevronRightIcon} from "@heroicons/react/24/outline";
import BlogCard from "@/components/Blogs/BlogCard";
import BlogSidebar from "@/components/Blogs/BlogSidebar";
import Subscribe from "@/components/Subscribe/Subscribe";
import OurAdvantage from "@/components/OurAdvantage/OurAdvantage";
import {blogs} from "@/pages/blogs";


const BlogByCategory = () => {
    return (
        <>
            <Head>
                <title>Blog by category -Nest </title>

            </Head>

            <Layout>
                <BreadCrumbs>
                    <ul className='flex items-center gap-3'>
                        <li className=' flex space-x-3 items-center' >
                            <Link href={"/"} className="flex gap-1 items-center text-primary hover:text-orange-300">
                                <Home size={15} />
                                <span className='font-medium text-sm'>Home</span>
                            </Link>
                            <ChevronRightIcon strokeWidth={2.5} width={10} />
                        </li>
                        <li className=' flex space-x-5 items-center'>
                            <span className='font-medium text-sm'>Blogs</span>
                        </li>
                    </ul>
                </BreadCrumbs>

                <section className={'my-10'}>
                    <div className='max-w-xl md:max-w-3xl lg:max-w-8xl mx-auto px-4 2xl:px-0'>
                        <div className='flex flex-col lg:flex-row  gap-5 xl:gap-10'>
                            <div className={'w-full flex flex-col gap-8'}>

                                {blogs.map( blog => ( <BlogCard key={blog.id} blog={blog}/>))}
                            </div>
                            <BlogSidebar/>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    );
};

export default BlogByCategory;

