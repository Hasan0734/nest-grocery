import React from 'react';
import Link from "next/link";

const WelcomeDashboard = () => {
    return (
        <>
            <div>
                <h3 className={'text-3xl font-bold'}>Hello Jahid!</h3>
                <p className={'text-gray-500 text-[16px] mt-6'}>From your account dashboard. you can easily check
                    & view your <Link className={'text-primary'} href={'/my-account'}>recent orders</Link>,
                    manage your <Link className={'text-primary'} href='/my-account'>shipping and billing
                        addresses</Link> and <Link className={'text-primary'} href={'/my-account'}>edit your
                        password and account
                        details.</Link></p>
            </div>
        </>
    );
};

export default WelcomeDashboard;
