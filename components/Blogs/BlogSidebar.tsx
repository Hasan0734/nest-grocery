import React from 'react';
import ShopTags from "@/components/shop/ShopTags/ShopTags";
import BlogCategories from "@/components/Blogs/BlogCategories";
import LatestBlogPost from "@/components/Blogs/LatestBlogPost";

const BlogSidebar = () => {
    return (
        <>
            <div className='w-full lg:max-w-[350px] pr-0 lg:pr-4'>

                {/* search bar */}
                <div className='mb-10'>

                    <form>
                        <label className='block mb-2 text-gray-black text-[18px] font-bold' htmlFor='searchText'>Search</label>
                        <div className='relative'>
                            <input
                                className='border border-gray-200 rounded-xl
                              outline-none py-[15px] pl-2 pr-[100px] w-full'
                                type="text"
                                id='searchText' />
                            <input className='absolute right-0 bg-green-black text-sm font-bold text-white rounded-xl py-[18px] px-6' type="submit" value="Search" />
                        </div>


                    </form>
                </div>

                <LatestBlogPost/>

                <BlogCategories/>

                {/* tag clouds */}
                <ShopTags />
            </div>
        </>
    );
};

export default BlogSidebar;
