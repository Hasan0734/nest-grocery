import React, {useState} from 'react';
import Link from "next/link";
import Rating from "@/components/Shared/Rating";
import ProductQuantity from "@/components/Shared/ProductQuantity";
import {FaRegTrashAlt} from "react-icons/fa";

const CartTableRow = () => {
    const [quantity, setQuantity] = useState(1)

    return (
        <>
            <tr className={'border'}>
                <td className={'py-3 px-4'}
                    colSpan={2}>
                    <div className={'flex items-center gap-4'}>
                        <div className={'min-w-[70px] basis-24 border rounded-lg overflow-hidden p-1'}>
                            <img className={'w-full rounded-lg'}
                                 src={'/assets/popular-product/product-1-1.jpg'}
                                 alt={'product image'}/>
                        </div>
                        <div>
                            <Link className={'text-lg font-semibold text-primary-text line-clamp-1'}
                                  href={'/products/23'}>Field Roast Chao Cheese Creamy
                                Original</Link>
                            <div className={'flex items-center gap-2'}>
                                <Rating/>
                                <span className={'text-gray-400 text-sm font-medium'}>(5.0)</span>
                            </div>
                        </div>
                    </div>
                </td>
                <td className={'text-center font-bold text-2xl text-gray-400 py-3 px-4'}>
                    $2.51
                </td>
                <td>
                    <ProductQuantity setQuantity={setQuantity} quantity={quantity}/>
                </td>
                <td className={'text-center font-bold text-2xl text-primary py-3 px-4'}>
                    $2.51
                </td>
                <td >
                    <div className={'flex justify-center items-center'}>
                        <button className={'px-2 py-2 rounded text-gray-400'}>
                            <FaRegTrashAlt size={18}/>
                        </button>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default CartTableRow;
