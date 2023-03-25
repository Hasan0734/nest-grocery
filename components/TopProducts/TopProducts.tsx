import React from 'react';
import CardContainer from './CardContainer';

const topSelling = [
    {
        id: 1,
        name: 'Seeds of Change Organic Red Rice',
        image: '/assets/popular-product/product-1-1.jpg',
        rating: 4,
        new_price: 25.22,
        old_price: 35.55,
        price_range: null
    },
    {
        id: 2,
        name: "Angie’s  Sweet & Salty Kettle Corn",
        image: '/assets/popular-product/product-2-1.jpg',
        rating: 2,
        new_price: 32.22,
        old_price: 36.55,
        price_range: null
    },
    {
        id: 3,
        name: "All Natural Style Chicken Meatballs",
        image: '/assets/popular-product/product-3-1.jpg',
        rating: 3,
        new_price: 32.22,
        old_price: 36.55,
        price_range: { min: 27.52, max: 127.55 }
    },
]
const trendingProduct = [
    {
        id: 1,
        name: 'Foster Farms Takeout Crispy Classic',
        image: '/assets/popular-product/product-4-1.jpg',
        rating: 4,
        new_price: 25.22,
        old_price: 35.55,
        price_range: null
    },
    {
        id: 2,
        name: "Haagen  Caramel Cone Ice Cream Boxed",
        image: '/assets/popular-product/product-5-1.jpg',
        rating: 2,
        new_price: 32.22,
        old_price: 36.55,
        price_range: null
    },
    {
        id: 3,
        name: "Gorton’s Beer Battered Fish Fillets",
        image: '/assets/popular-product/product-6-1.jpg',
        rating: 3,
        new_price: 32.22,
        old_price: 36.55,
        price_range: null
    },
]
const recentlyAdded = [
    {
        id: 1,
        name: 'Organic Cage Grade A Large  Eggs',
        image: '/assets/popular-product/product-7-1.jpg',
        rating: 4,
        new_price: 25.22,
        old_price: 35.55,
        price_range: null
    },
    {
        id: 2,
        name: "Naturally Flavored Cinnamon Vanilla",
        image: '/assets/popular-product/product-8-1.jpg',
        rating: 2,
        new_price: 32.22,
        old_price: 36.55,
        price_range: null
    },
    {
        id: 3,
        name: "Seeds of Change Organic Watermelon",
        image: '/assets/popular-product/product-9-1.jpg',
        rating: 3,
        new_price: 32.22,
        old_price: 36.22,
        price_range: null
    },
]

const TopProducts = () => {
    return (
        <section className='py-10'>
            <div className='max-w-8xl mx-auto px-4 2xl:px-0'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    <CardContainer card_name="Top Selling" products={topSelling} />
                    <CardContainer card_name="Trending Products" products={trendingProduct} />
                    <CardContainer card_name="Recently added" products={recentlyAdded} />
                    <CardContainer card_name="Top Rated" products={trendingProduct} />
                </div>
            </div>
        </section>
    );
};

export default TopProducts;