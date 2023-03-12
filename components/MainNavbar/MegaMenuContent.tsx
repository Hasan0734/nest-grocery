import Link from 'next/link';
import React from 'react';
import slugify from 'slugify';

const megaMenuData = [
    {
        id: 1, title: "Products 10% Discount",
        items: [
            { id: 1, title: 'Canada Dry Ginger Ale - 2 L Bottle' },
            { id: 2, title: 'Cauliflower Species Brassica the genus' },
            { id: 3, title: 'Nestle Original mate Coffee Creamer' },
            { id: 4, title: 'Onion hybrid varieties genus Allium' },
            { id: 5, title: 'Seeds of  Change Organic Red Rice' },
        ]
    },
    {
        id: 2, title: "Products 20% Discount",
        items: [
            { id: 1, title: 'All Natural Style Chickern Meatballs' },
            { id: 2, title: "Angie's Sweet & Salty Kettle Corn staple" },
            { id: 3, title: 'Blue Almonds Lightly Salted Vegetables' },
            { id: 4, title: 'Butter fat and protein churned cream' },
            { id: 5, title: 'Chobani Complete Vanilla Greek Yogurt' },
        ]
    },
    {
        id: 3, title: "Products 30% Discount",
        items: [
            { id: 1, title: 'Collared Nikky Printed Men Neck T-Shirt' },
            { id: 2, title: 'Crabs are decapod crustaceans fraorder' },
            { id: 3, title: 'Encore Seafoods Stuffedthe occasional' },
            { id: 4, title: 'Foster Farms Takeout Crispy Classic' },
            { id: 5, title: 'Fresh mango smoothies whit a Blender' },
        ]
    },
]

const MegaMenuContent = () => {
    return (
        <>
            <div className='nav_item_content z-20 invisible absolute left-0 container  opacity-0 px-4 duration-500'>
                <div className='w-full bg-white grid grid-cols-12 gap-10 p-5 rounded-b-lg'>
                    <div className='flex justify-between col-span-9'>
                        {megaMenuData.map((menu: any) => (<div key={menu.id}>
                            <h2 className='text-[20px] font-quicksand text-[#3BB77E] font-bold'>{menu.title}</h2>
                            <ul className='mt-4'>
                                {menu.items.map((item: any) => (<li className='my-2' key={item.id}>
                                    <Link href={`/${slugify(item.title, '-')}`} legacyBehavior>
                                        <a className='text-[#7e7e7e] font-semibold'>{item.title}</a>
                                    </Link>
                                </li>))}
                            </ul>
                        </div>))}
                    </div>
                    <div className='col-span-3'>
                        <Link href="/shop" legacyBehavior>
                            <a className='relative'>
                                <img className='max-w-full h-[220px] rounded-lg skew-x-1' src="/assets/banner-1.png" alt="" />

                                <div className='absolute top-2/4 z-10 -translate-y-[50%] px-12'>
                                    <span className='text-[#adadad] block pb-3'>Organic</span>

                                    <h4 className='text-2xl leading-7 font-bold mb-3 min-w-[100px] text-[#253d4e]'>

                                        Everyday Fresh & Clean with Our Products
                                    </h4>

                                    <button className='bg-[#3bb77e] px-2 py-[6px] text-white font-semibold text-xs rounded'>
                                        Shop Now →
                                    </button>
                                </div>
                            </a>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    );
};

export default MegaMenuContent;