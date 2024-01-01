import React from 'react';
import Link from "next/link";
import Rating from "@/components/Shared/Rating";
import {FaRegTrashAlt} from "react-icons/fa";

const WishlistTableRow = ({product}:any) => {
    return (
        <>
            <tr className={'border'}>
                <td className={'py-3 px-4 max-w-sm'}
                   >
                    <div className={'flex items-center gap-4'}>
                        <div className={'min-w-[70px] basis-24 border rounded-lg overflow-hidden p-1'}>
                            <img className={'w-full rounded-lg'}
                                 src={product.image}
                                 alt={'product image'}/>
                        </div>
                        <div>
                            <Link className={'text-lg font-semibold text-primary-text line-clamp-1'}
                                  href={'/products/23'}>{product.name}</Link>
                            <div className={'flex items-center gap-2'}>
                                <Rating/>
                                <span className={'text-gray-400 text-sm font-medium'}>(5.0)</span>
                            </div>
                        </div>
                    </div>
                </td>
                <td className={'text-center font-bold text-2xl text-primary py-3 px-4'}>
                    $2.51
                </td>
                <td>
                    <div className={'flex items-center justify-center'}>
                        {product.status === 'out stock'  &&  <span className={'px-2 py-1.5 rounded text-sm font-semibold bg-softRose text-rose capitalize'}>{product.status}</span>}
                        {product.status === 'in stock'  &&
                            <span className={'px-2 py-1.5 rounded text-sm font-semibold bg-primary-soft text-primary capitalize'}>{product.status}</span>}

                    </div>
                </td>
                <td className={''}>
                    <button className={'bg-primary px-4 py-2 text-white whitespace-nowrap rounded font-semibold text-sm'}>Add to cart</button>
                </td>
                <td>
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

export default WishlistTableRow;
