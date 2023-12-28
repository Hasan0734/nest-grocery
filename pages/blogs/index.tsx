import React from 'react';
import Head from "next/head";
import Layout from "@/components/Layout";
import BreadCrumbs from "@/components/Shared/BreadCrumbs";
import Link from "next/link";
import {Home} from "react-feather";
import { ChevronRightIcon} from "@heroicons/react/24/outline";
import Subscribe from "@/components/Subscribe/Subscribe";
import OurAdvantage from "@/components/OurAdvantage/OurAdvantage";
import BlogSidebar from "@/components/Blogs/BlogSidebar";

import BlogCard from "@/components/Blogs/BlogCard";
import Pagination from "@/components/Shared/Pagination";

export const blogs = [
    {
        id: 1,
        title: 'The Easy Italian Chicken Dinner',
        description: 'Tortor, lobortis semper viverra ac, molestie tortor laoreet amet euismod et diam quis aliquam consequat porttitor integer a nisl, in faucibus nunc et aenean turpis dui dignissim nec scelerisque',
        images: '/assets/blogs/blog-1.png',
        slug: ''
    },
    {
        id: 2,
        title: 'The litigants on the screen are not actors',
        description: "Tortor, lobortis semper viverra ac, molestie tortor laoreet amet euismod et diam quis aliquam consequat porttitor integer a nisl, in faucibus nunc et aenean turpis dui dignissim nec scelerisque",
        images: '/assets/blogs/blog-2.png',
        slug: ''
    },
    {
        id: 3,
        title: 'How I Prep a Week Summer Meals',
        description: "Tortor, lobortis semper viverra ac, molestie tortor laoreet amet euismod et diam quis aliquam consequat porttitor integer a nisl, in faucibus nunc et aenean turpis dui dignissim nec scelerisque",
        images: '/assets/blogs/blog-3.png',
        slug: ''
    },
    {
        id: 4,
        title: 'Baked Mozzarella Chicken Rolls',
        description: "Tortor, lobortis semper viverra ac, molestie tortor laoreet amet euismod et diam quis aliquam consequat porttitor integer a nisl, in faucibus nunc et aenean turpis dui dignissim nec scelerisque",
        images: '/assets/blogs/blog-4.png',
        slug: ''
    },
    {
        id: 5,
        title: 'The Best Soft Chocolate Chip Cookies',
        description: "Tortor, lobortis semper viverra ac, molestie tortor laoreet amet euismod et diam quis aliquam consequat porttitor integer a nisl, in faucibus nunc et aenean turpis dui dignissim nec scelerisque",
        images: '/assets/blogs/blog-5.png',
        slug: ''
    },
    {
        id: 6,
        title: 'Sticky Ginger Rice Bowls with Pickled',
        description: "Tortor, lobortis semper viverra ac, molestie tortor laoreet amet euismod et diam quis aliquam consequat porttitor integer a nisl, in faucibus nunc et aenean turpis dui dignissim nec scelerisque",
        images: '/assets/blogs/blog-15.png',
        slug: ''
    },
    {
        id: 7,
        title: 'The Absolute Easiest Spinach and Pizza',
        description: "Tortor, lobortis semper viverra ac, molestie tortor laoreet amet euismod et diam quis aliquam consequat porttitor integer a nisl, in faucibus nunc et aenean turpis dui dignissim nec scelerisque",
        images: '/assets/blogs/blog-7.png',
        slug: ''
    },
    {
        id: 8,
        title: 'Sticky Ginger Rice Bowls with Pickled Veg',
        description: "Tortor, lobortis semper viverra ac, molestie tortor laoreet amet euismod et diam quis aliquam consequat porttitor integer a nisl, in faucibus nunc et aenean turpis dui dignissim nec scelerisque",
        images: '/assets/blogs/blog-8.png',
        slug: ''
    },
    {
        id: 9,
        title: 'Smoky Beans & Greens Tacos with Aji Verde',
        description: "Tortor, lobortis semper viverra ac, molestie tortor laoreet amet euismod et diam quis aliquam consequat porttitor integer a nisl, in faucibus nunc et aenean turpis dui dignissim nec scelerisque",
        images: '/assets/blogs/blog-9.png',
        slug: ''
    },
    {
        id: 10,
        title: 'Almond Butter Chocolate Chip Zucchini Bars',
        description: "Tortor, lobortis semper viverra ac, molestie tortor laoreet amet euismod et diam quis aliquam consequat porttitor integer a nisl, in faucibus nunc et aenean turpis dui dignissim nec scelerisque",
        images: '/assets/blogs/blog-11.png',
        slug: ''
    },
    {
        id: 11,
        title: 'Harissa Chickpeas with Whipped Feta',
        description: "Tortor, lobortis semper viverra ac, molestie tortor laoreet amet euismod et diam quis aliquam consequat porttitor integer a nisl, in faucibus nunc et aenean turpis dui dignissim nec scelerisque",
        images: '/assets/blogs/blog-13.png',
        slug: ''
    },
    {
        id: 12,
        title: 'Caprese Chicken with Smashed Potatoes',
        description: "Tortor, lobortis semper viverra ac, molestie tortor laoreet amet euismod et diam quis aliquam consequat porttitor integer a nisl, in faucibus nunc et aenean turpis dui dignissim nec scelerisque",
        images: '/assets/blogs/blog-14.png',
        slug: ''
    },
    {
        id: 13,
        title: 'Summer Quinoa Salad Jars with Lemon Dill',
        description: "Tortor, lobortis semper viverra ac, molestie tortor laoreet amet euismod et diam quis aliquam consequat porttitor integer a nisl, in faucibus nunc et aenean turpis dui dignissim nec scelerisque",
        images: '/assets/blogs/blog-15.png',
        slug: ''
    },

]


const Blogs = () => {
    return (
        <>
            <Head>
                <title>Blogs -Nest </title>

            </Head>

            <Layout>
                <BreadCrumbs>
                    <ul className='flex items-center gap-3'>
                        <li className=' flex space-x-3 items-center' >
                            <Link href={"/"} className="flex gap-1 items-center text-[#3bb77e] hover:text-orange-300">
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
                        <div className='flex flex-col lg:flex-row  gap-5 xl:gap-10 items-start' >
                            <div className={'w-full flex flex-col gap-8'}>

                                {blogs.map( blog => ( <BlogCard key={blog.id} blog={blog}/>))}
                                <Pagination totalItem={blogs?.length }/>
                            </div>
                        <BlogSidebar/>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    );
};

export default Blogs;
