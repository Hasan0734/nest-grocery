import React from 'react';
import ShopCardContainer from "@/components/Shared/ShopCardContainer";
import Link from "next/link";
import {XMarkIcon} from "@heroicons/react/24/outline";

const  categories = [
    {id:1, name: 'Breakfast', slug: 'breakfast'},
    {id:1, name: 'Dairy Free', slug: 'dairy-free'},
    {id:1, name: 'Dessert', slug: 'dessert'},
    {id:1, name: 'Gluten Free', slug: 'gluten-free'},
    {id:1, name: 'Salad', slug: 'salad'},
    {id:1, name: 'Uncategorized', slug: 'uncategorized'},
]
const BlogCategories = () => {
    return (
        <ShopCardContainer title={"Categories"}>
            <div className='mt-4'>
                <ul className='space-y-2'>
                    {categories.map((category) => <li key={category.id}>
                        <Link
                            href={`/blogs/category/${category.slug}`}
                            className="text-primary-text hover:text-primary duration-300 font-medium hover:font-semibold py-1" >
                            <span className='font-semibold text-[15px]'>{category.name}</span>
                        </Link>
                    </li>)}
                </ul>
            </div>
        </ShopCardContainer>
    );
};

export default BlogCategories;
