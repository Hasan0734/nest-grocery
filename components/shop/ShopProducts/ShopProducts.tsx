import React from 'react';
import ProductCard from '../../Shared/ProductCard';

const ShopProducts = () => {
    return (
        <>

            <div className='self-start grid grid-cols-1
                            gap-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-2
                            xl:grid-cols-3 2xl:grid-cols-4 pl-0 lg:pl-2' >
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </>
    );
};

export default ShopProducts;