import React from 'react';
import ShopCardContainer from '../Shared/ShopCardContainer';
import TrendingProductCard from '../Shared/TrendingProductCard';


const trendingProduct = [
    {
        id: 1,
        name: 'Organic Cage Grade A Large Eggs',
        image: '/assets/popular-product/product-20-4-min.jpg',
        rating: 4,
        new_price: 25.22,
        old_price: 35.55,
        price_range: null
    },
    {
        id: 2,
        name: "Naturally Flavored Cinnamon Vanilla",
        image: '/assets/popular-product/product-15-1.jpg',
        rating: 2,
        new_price: 32.22,
        old_price: 36.55,
        price_range: null
    },
    {
        id: 3,
        name: "Seeds of Change Organic Watermelon",
        image: '/assets/popular-product/product-20-2-min.jpg',
        rating: 2,
        new_price: 32.22,
        old_price: 36.55,
        price_range: null
    },
    {
        id: 4,
        name: "Dried fruit: apricots, figs, prunes",
        image: '/assets/popular-product/product-11-1.jpg',
        rating: 5,
        new_price: 32.22,
        old_price: 36.55,
        price_range: null
    },
    {
        id: 5,
        name: "Pre-protioned, low-fat ice cream yoyurt",
        image: '/assets/popular-product/product-20-3-min.jpg',
        rating: 8,
        new_price: 32.22,
        old_price: 36.55,
        price_range: null
    },
]

const ShopTopRatedProduct = () => {
    return (


        <ShopCardContainer title="Top rated products">
            {trendingProduct.map((product) => <TrendingProductCard key={product.id} product={product} />)}

        </ShopCardContainer>

    );
};

export default ShopTopRatedProduct;