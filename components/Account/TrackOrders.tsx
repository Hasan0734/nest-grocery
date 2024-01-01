import React from 'react';

const TrackOrders = () => {
    return (
        <div>
            <h3 className={'text-3xl font-bold'}>Orders tracking</h3>
            <p className={'text-[16px] text-gray-500 mt-5 font-medium'}>To track your order please enter your OrderID in the box below and press "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>

            <form className={'mt-5 space-y-5 max-w-xl'}>
                    <div className={'space-y-2'}>
                        <label className={"text-sm font-medium text-gray-600 inline-block"}>Order ID</label>
                        <input className={'outline-0 px-3.5 py-4 font-semibold text-gray-500 focus:border-primary/80 duration-300 rounded-lg border border-gray-200 block w-full placeholder:font-semibold'} type={'text'} placeholder={'Found in your order confirmation email'}/>
                    </div>
                <div className={'space-y-2'}>
                    <label className={"text-sm font-medium text-gray-600 inline-block"}>Billing Email</label>
                    <input className={'outline-0 px-3.5 py-4 font-semibold text-gray-500 focus:border-primary/80 duration-300 rounded-lg border border-gray-200 block w-full placeholder:font-semibold'} type={'text'} placeholder={'Email you send during checkout'}/>
                </div>
                <button className={'px-6 py-4 rounded-lg text-white bg-gray-800/80 font-semibold text-lg duration-300 hover:bg-primary'}>
                    Track
                </button>
            </form>
        </div>
    );
};

export default TrackOrders;
