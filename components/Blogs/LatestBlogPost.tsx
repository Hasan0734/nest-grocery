import React from 'react';
import ShopCardContainer from "@/components/Shared/ShopCardContainer";
import Link from "next/link";
import BlogCard2 from "@/components/Blogs/BlogCard2";
import {blogs} from "@/pages/blogs";

const LatestBlogPost = () => {
    return (
        <ShopCardContainer title={"Latest Posts"}>

            <div className={'space-y-6'}>
                {blogs.slice(3,8).map(blog => (
                    <BlogCard2 key={blog.id} blog={blog}/>
                ))}

            </div>
        </ShopCardContainer>
    );
};

export default LatestBlogPost;
