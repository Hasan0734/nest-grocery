import React from 'react';
import ShopCategories from '../ShopCategories/ShopCategories';
import ShopTags from '../ShopTags/ShopTags';
import ShopTopRatedProduct from '../ShopTopRatedProduct/ShopTopRatedProduct';
import ShopTrendingProduct from '../ShopTrendingProduct/ShopTrendingProduct';

const ShopSidebar = () => {
    return (
        <>
            <div className='order-2 md:order-1 min-w-full sm:min-w-[400px] pr-0 lg:pr-4'>

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

                {/* product categories */}
                <ShopCategories />

                {/* Trending now */}
                <ShopTrendingProduct />

                {/* top rated products */}
                <ShopTopRatedProduct />

                {/* tag clouds */}
                <ShopTags />
            </div>
        </>
    );
};

export default ShopSidebar;