import React from 'react';
import CategoryListBox from "@/components/Shared/CategoryListBox";
import RangeSlider from "@/components/Shared/RangeSlider";
import Checkbox from "@/components/Shared/Checkbox";
import {FunnelIcon} from "@heroicons/react/24/outline";
import FilterByPrice from "@/components/Shared/FilterByPrice";
const categories = [
    {
        id: 1,
        name: "Baking material",
        sub: null,
        icon: "/assets/icons/category/category-2.png"
    },
    {
        id: 2,
        name: "Bread and Juice",
        sub: null,
        icon: "/assets/icons/category/category-11.png"
    },
    {
        id: 3,
        name: "Clothing & beauty",
        sub: null,
        icon: "/assets/icons/category/category-3.png"
    },
    {
        id: 4,
        name: "Dals of The Day",
        sub: null,
        icon: "/assets/icons/category/category-1.png"
    },
    {
        id: 5,
        name: "Fresh Seafood",
        sub: null,
        icon: "/assets/icons/category/category-10.png"
    },
    {
        id: 6,
        name: "Milks and Dairies",
        sub: null,
        icon: "/assets/icons/category/category-6.png"
    },

]

const VendorSidebar = () => {
    return (
        <>
            <div className='min-w-[300px]'>
                <div>
                    <img className='w-full rounded-xl' src="/assets/banner-10.jpg" alt="" />
                </div>

                {/* product categories */}
                <div className='mt-8 border border-gray-200 rounded-2xl
                            shadow-[8px_5px_10px_rgba(0,0,0,0.05)] p-5 lg:p-8'>
                    <h1
                        className='text-gray-black text-2xl font-bold
                                border-b border-gray-200 pb-4 relative before:absolute
                                before:w-20 before:left-0 before:bottom-0
                                before:bg-primary before:h-[1px]'>
                        Categories
                    </h1>

                    <div className='mt-10'>

                        <ul className='mt-6'>
                            {categories.map((category) => (
                                <CategoryListBox
                                    key={category.id}
                                    category={category} />
                            ))}

                        </ul>
                    </div>

                </div>

                {/* price filter */}
                <FilterByPrice/>

                <div className='mt-8 relative'>
                    <img className='w-full rounded-xl' src="/assets/banner-11.png" alt="" />
                    <div className='absolute top-16 left-10 max-w-[120px] z-10 '>
                        <span className='text-[#adadad] text-sm'>Organic</span>
                        <h2 className='text-2xl text-gray-black font-bold hover:-translate-y-1 duration-300'>
                            Save 17% on <span className='text-primary'>Organic</span> Juice
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VendorSidebar;
