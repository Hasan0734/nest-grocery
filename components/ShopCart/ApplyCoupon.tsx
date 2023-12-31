import React from 'react';
import { MdOutlineLabel } from "react-icons/md";
const ApplyCoupon = () => {
    return (
        <div className={'mb-5'}>
            <h3 className={'text-2xl font-bold '}>Apply Coupon</h3>
            <span className={'text-lg font-semibold text-gray-400 mt-2 block'}>Using A Promo Code?</span>
            <div className={'flex items-center gap-2 mt-3'}>
                <input className={'px-3 py-2 outline-0  border border-gray-200 rounded-lg'} placeholder={'Enter Your Coupon'} type={'text'}/>
                <button className={'text-white bg-primary px-4 hover:bg-warning duration-300 py-2 flex items-center gap-2 font-semibold rounded'}>
                    <span className={'-rotate-90'}><MdOutlineLabel />
                    </span>
                    Apply</button>
            </div>
        </div>
    );
};

export default ApplyCoupon;
