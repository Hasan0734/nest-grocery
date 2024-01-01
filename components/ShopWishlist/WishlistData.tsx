import React from 'react';
import Link from "next/link";
import {FaArrowLeftLong} from "react-icons/fa6";
import WishlistTableRow from "@/components/ShopWishlist/WishlistTableRow";

const wishlists = [
    {id:1, name: "Field Roast Chao Cheese Creamy Original", image: '/assets/popular-product/product-1-1.jpg' , rating: 2, status: 'out stock', price: 5.33 },
    {id:2, name: "Blue Diamond Almonds Lightly Salted", image: '/assets/popular-product/product-2-1.jpg' , rating: 2, status: 'in stock', price: 5.33 },
    {id:3, name: "Fresh Organic Mustard Leaves Bell Pepper", image: '/assets/popular-product/product-3-1.jpg' , rating: 2, status: 'in stock', price: 5.33 },
    {id:4, name: "Angie’s Boomchickapop Sweet & Salty", image: '/assets/popular-product/product-4-1.jpg' , rating: 2, status: 'in stock', price: 5.33 },
    {id:4, name: "Foster Farms Takeout Crispy Classic", image: '/assets/popular-product/product-5-1.jpg' , rating: 2, status: 'out stock', price: 5.33 },
]

const WishlistData = () =>
{
    return (
        <div>
            <div className={'md:col-span-5'}>
                <div className="flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto scrollbar sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <table className={'min-w-full'}>
                                <thead>
                                <tr className={''}>
                                    <td
                                        className={'font-bold py-3 px-4 bg-gray-200 rounded-l-lg whitespace-nowrap max-w-sm'}
                                        >Product
                                    </td>
                                    <td className={'font-bold py-3 px-4 text-center bg-gray-200 whitespace-nowrap'}>
                                        Price
                                    </td>
                                    <td className={'font-bold py-3 px-4 text-center bg-gray-200 whitespace-nowrap'}>Stock Status</td>
                                    <td className={'font-bold py-3 px-4 text-center bg-gray-200 whitespace-nowrap'}>Action</td>
                                    <td className={'font-bold py-3 px-4 text-center bg-gray-200 rounded-r-lg whitespace-nowrap'}>Remove</td>
                                </tr>
                                </thead>
                                <tbody className={''}>
                                {wishlists.map((product:any) => <WishlistTableRow key={product.id} product={product}/>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WishlistData;
