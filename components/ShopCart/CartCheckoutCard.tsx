import React from 'react';
import {MdLogout} from "react-icons/md";

const CartCheckoutCard = () => {
    return (
        <>
            <div className={'border border-gray-200 shadow-md bg-white  p-8 rounded-lg'}>
                <table className={'w-full mb-4'}>
                    <tbody>
                    <tr className={'border border-gray-200'}>
                        <td className={'py-2.5 px-2 font-bold text-gray-400'}>Subtotal</td>
                        <td className={'font-bold text-primary text-xl py-2.5 px-2 text-right'}>$12.31</td>
                    </tr>
                    <tr className={'border border-gray-200'}>
                        <td colSpan={2} className={'py-5 px-2 font-bold text-gray-400'}><hr/></td>

                    </tr>
                    <tr className={'border border-gray-200'}>
                        <td className={'py-2.5 px-2 font-bold text-gray-400'}>Shipping</td>
                        <td className={'py-2.5 px-2 font-bold text-primary-text text-right text-xl'}>Free</td>
                    </tr>
                     <tr className={'border border-gray-200'}>
                        <td className={'py-2.5 px-2 font-bold text-gray-400'}>Estimate for</td>
                        <td className={'py-2.5 px-2 font-bold text-primary-text text-right text-xl'}>United Kingdom</td>
                    </tr>
                    <tr className={'border border-gray-200'}>
                        <td colSpan={2} className={'py-5 px-2 font-bold text-gray-400'}><hr/></td>

                    </tr>
                    <tr className={'border border-gray-200'}>
                        <td className={'py-2.5 px-2 font-bold text-gray-400'}>Total</td>
                        <td className={'font-bold text-primary text-xl py-2.5 px-2 text-right'}>$12.31</td>
                    </tr>
                    </tbody>
                </table>
                <button className={'bg-primary w-full px-3 py-2.5 flex items-center justify-center gap-2 rounded text-white font-semibold hover:bg-warning duration-300'}>
                    Proceed to Checkout
                    <MdLogout  size={20}/>
                </button>
            </div>
        </>
    );
};

export default CartCheckoutCard;
