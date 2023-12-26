import React from 'react';
import Select from 'react-select'

const options = [
    { value: 'Aldi', label: 'Aldi' },
    { value: 'Adidas', label: 'Adidas' },
    { value: 'Burbe', label: 'Burbe' },
    { value: 'Chanel', label: 'Chanel' },
    { value: 'Prada', label: 'Prade' },
    { value: 'Kroger', label: 'Kroger' },
    { value: 'Traders', label: 'Traders' },
    { value: 'Publix', label: 'Publix' },
    { value: 'Harris', label: 'Harris' },
    { value: 'Costco', label: 'Costco' },
    { value: 'Targets', label: 'Targets' },
    { value: 'Green-Tea', label: 'Green Tea' },
    { value: 'iSnack', label: 'iSnack' },
    { value: 'Pambox', label: 'Pambox' },
]




const ShopProductFilter = () => {
    return (
        <div className='flex gap-3 my-5 bg-white border border-gray-200 rounded-lg py-2 px-2'>
            <div className='z-20'>
                <h4 className='my-2 font-semibold text-[16px]'>By Vendors</h4>
                <Select options={options} className="w-[250px]" />
            </div>
            <div className='z-20'>
                <h4 className='my-2 font-semibold text-[16px]'>By Price</h4>
                
            </div>
        </div>
    );
};

export default ShopProductFilter;