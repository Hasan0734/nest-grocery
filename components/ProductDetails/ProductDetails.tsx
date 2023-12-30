import React from 'react';
import ProductInfo from "@/components/ProductDetails/ProductInfo";
import Product from "@/components/ProductDetails/Product";

const ProductDetails = () => {
    return (

        <div className={'w-full px-6 md:px-0'}>
            <Product/>
            <ProductInfo/>
        </div>
    );
};

export default ProductDetails;
