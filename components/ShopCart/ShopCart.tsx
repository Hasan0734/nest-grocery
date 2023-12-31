import React from 'react';

import CartTableRow from "@/components/ShopCart/TableItem";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import CartCheckoutCard from "@/components/ShopCart/CartCheckoutCard";
import ApplyCoupon from "@/components/ShopCart/ApplyCoupon";
const ShopCartData = () => {

    return (
        <>
            <div className={'grid grid-cols-1 lg:grid-cols-8 mt-5 gap-14'}>
                <div className={'md:col-span-5'}>
                    <div className=" flow-root">
                        <div className="-mx-4 -my-2 overflow-x-auto scrollbar sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <table className={'min-w-full'}>
                                    <thead>
                                    <tr className={''}>
                                        <td
                                            className={'font-bold py-3 px-4  bg-gray-200 rounded-l-lg whitespace-nowrap'}
                                            colSpan={2}>Product
                                        </td>
                                        <td className={'font-bold py-3 px-4 text-center bg-gray-200 whitespace-nowrap'}>Unit
                                            Price
                                        </td>
                                        <td className={'font-bold py-3 px-4 text-center bg-gray-200 whitespace-nowrap'}>Quantity</td>
                                        <td className={'font-bold py-3 px-4 text-center bg-gray-200 whitespace-nowrap'}>Subtotal</td>
                                        <td className={'font-bold py-3 px-4 text-center bg-gray-200 rounded-r-lg whitespace-nowrap'}>Remove</td>
                                    </tr>
                                    </thead>
                                    <tbody className={''}>
                                    <CartTableRow/>
                                    <CartTableRow/>
                                    <CartTableRow/>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                    <div className={'border-t mt-5 pt-5'}>
                        <Link className={''} href={'/shop'}>
                            <button className={'bg-primary px-3 py-2.5 flex items-center gap-3 rounded text-white font-semibold hover:bg-warning duration-300'}>
                                <FaArrowLeftLong />
                                Continue Shopping
                            </button>
                        </Link>

                    </div>
                </div>
                <div className={'md:col-span-3'}>
                    <ApplyCoupon/>
                   <CartCheckoutCard/>
                </div>
            </div>
        </>
    );
};

export default ShopCartData;
