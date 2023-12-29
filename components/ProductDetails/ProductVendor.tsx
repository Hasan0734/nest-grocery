import React from 'react';
import Link from "next/link";
import Rating from "@/components/Shared/Rating";
import {MapPinIcon} from "@heroicons/react/24/outline";
import { TfiHeadphoneAlt } from "react-icons/tfi";
const ProductVendor = () => {
    const performances = [
        {id:1, title: 'Rating', average: "92"},
        {id:2, title: 'Ship on time', average: "100"},
        {id:3, title: 'Chat response', average: "89"},
    ]
    return (
        <div className={'mt-6'}>
            <div className={'flex items-center gap-4'}>
                <img className={'w-14'} src={'/assets/vendors/vendor-1.png/'} alt={'vendor-logo'}/>
            <div>
                <Link href={'/store-listing/12'} className={'hover:text-warning text-primary duration-300 text-xl font-bold'}>Noodles Co.</Link>
              <div className={'flex items-center gap-3'}>
                  <Rating/>
                  <span className={'text-gray-600 text-sm'}>(32 reviews)</span>
              </div>
            </div>
            </div>
            <div className={'space-y-3 mt-8'}>
                <p className={'flex items-center gap-2  text-sm'}>
                    <MapPinIcon className={'w-4 text-primary'}/>
                    <span><b className={'text-primary-text'}>Address:</b> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</span>
                </p>  <p className={'flex items-center gap-2  text-sm'}>
                    <TfiHeadphoneAlt className={'w-4 text-primary'}/>
                    <span><b className={'text-primary-text'}>Contact Seller:</b> (+91) - 540-025-553</span>
                </p>
            </div>
            <div className={'flex gap-4 mt-8 '}>
                {performances.map((per) => (
                    <div key={per.id} className={'space-y-2'}>
                        <span className={'text-primary text-sm font-semibold'}>{per.title}</span>
                        <h3 className={'text-xl font-bold text-primary-text'}>{per.average}%</h3>
                    </div>
                ))}
            </div>
            <p className={'text-sm text-gray-600 mt-8'}>Noodles & Company is an American fast-casual restaurant that offers international and American noodle dishes and pasta in addition to soups and salads. Noodles & Company was founded in 1995 by Aaron Kennedy and is headquartered in Broomfield, Colorado. The company went public in 2013 and recorded a $457 million revenue in 2017.In late 2018, there were 460 Noodles & Company locations across 29 states and Washington, D.C.</p>
        </div>
    );
};

export default ProductVendor;
