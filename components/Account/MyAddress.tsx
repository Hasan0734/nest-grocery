import React from 'react';
import Link from "next/link";

const MyAddress = () => {
    return (
        <div>
            <h3 className={'text-3xl font-bold'}>Address </h3>

            <div className={'grid grid-cols-2 mt-4'}>
                <div>
                    <h5 className={'text-xl font-semibold underline underline-offset-4'}>Billing</h5>
                    <div className={'mt-2 text-sm text-gray-500'}>
                        <p>3522 Interstate</p>
                        <p>75 Business Spur,</p>
                        <p>Sault Ste.</p>
                        <p>Marie, MI 49783</p>
                        <p>New York</p>
                        <Link href={'/'} className={'text-sm text-primary'}>Edit</Link>
                    </div>
                </div>
                <div>
                    <h5 className={'text-xl  font-semibold underline underline-offset-4'}>Shipping</h5>
                    <div className={'mt-2 text-sm text-gray-500'}>
                        <p>4299 Express Lane</p>
                        <p>Sarasota,</p>
                        <p>FL 34249 USA</p>
                        <p>Phone: 1.941.227.4444</p>
                        <p>Sarasota</p>
                        <Link href={'/'} className={'text-sm text-primary'}>Edit</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAddress;
