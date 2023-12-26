import React from 'react';
import CategoryListBox from '../../Shared/CategoryListBox';
import ShopCardContainer from '../../Shared/ShopCardContainer';


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
        name: "Fresh Fruit",
        sub: [
            { id: 1, name: 'Fresh Fruit', icon: '/assets/icons/category/category-9.png' },
            { id: 2, name: 'Uncategorized', icon: '/assets/icons/category/category-8.png' },
        ],
        icon: "/assets/icons/category/category-7.png"
    },
    {
        id: 6,
        name: "Fresh Seafood",
        sub: null,
        icon: "/assets/icons/category/category-10.png"
    },
    {
        id: 7,
        name: "Milks and Dairies",
        sub: null,
        icon: "/assets/icons/category/category-6.png"
    },
    {
        id: 8,
        name: "Uncategorized",
        sub: null,
        icon: "/assets/icons/category/category-2.png"
    },
    {
        id: 9,
        name: "Vegetables",
        sub: null,
        icon: "/assets/icons/category/category-8.png"
    },
    {
        id: 10,
        name: "Wines & Drinks",
        sub: null,
        icon: "/assets/icons/category/category-9.png"
    },
]

const ShopCategories = () => {
    return (
        <>

            <ShopCardContainer title="Categories">

                <ul className='mt-6'>
                    {categories.map((category) => <CategoryListBox key={category.id}
                        category={category} />)}

                </ul>

            </ShopCardContainer>

        </>
    );
};

export default ShopCategories;