import React, {useState} from 'react';
import {cn} from "@/utls/utils";
import ProductDescription from "@/components/ProductDetails/ProductDescription";
import AdditionalInfo from "@/components/ProductDetails/AdditionalInfo";
import ProductVendor from "@/components/ProductDetails/ProductVendor";
import ProductReview from "@/components/ProductDetails/ProductReview";

const ProductInfo = () => {
    const [activeTab, setActiveTab] = useState('description');

    const tabs = [
        {id: 1, key: 'description', title: 'Description', count: null},
        {id: 1, key: 'additional-info', title: 'Additional Info', count: null},
        {id: 1, key: 'vendor', title: 'Vendor', count: null},
        {id: 1, key: 'review', title: 'Reviews', count: 3},

    ]
    const renderComponent = (component:string) => {
        switch (activeTab) {
            case 'description':
               return  <ProductDescription/>
            case 'additional-info':
                return  <AdditionalInfo/>
            case 'vendor':
                return  <ProductVendor/>
            case 'review':
                return  <ProductReview/>
        }
    }


    return (
        <>
            <div className={'border border-gray-200 rounded-xl py-8 px-12'}>

                <div>
                    <ul className={'flex items-center gap-4 flex-wrap'}>
                        {tabs.map(tab => (
                            <li key={tab.key} className={''}>
                                <button
                                    className={cn('border border-gray-200 shadow-[0_8px_10px_rgba(0,0,0,0.05)] rounded-full px-4 py-2 hover:-translate-y-1 duration-300 hover:text-primary text-primary-text font-semibold text-sm',
                                        {
                                            'text-primary': activeTab === tab.key
                                        })}
                                    onClick={() => setActiveTab(tab.key)}>
                                    <span>{tab.title}</span> {tab.count && <span>({tab.count})</span>}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                {renderComponent(activeTab)}
            </div>
        </>
    );
};

export default ProductInfo;
