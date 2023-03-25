import React from 'react';
import TopProductCard from './TopProductCard';

const CardContainer = ({card_name, products}:any) => {
    return (
        <>
            <div>
                <div
                    className='top_products mb-4'>
                   {card_name}
                </div>
                {products.map((product:any) => <TopProductCard
                    key={product.id}
                    product={product} />)}
            </div>
        </>
    );
};

export default CardContainer;