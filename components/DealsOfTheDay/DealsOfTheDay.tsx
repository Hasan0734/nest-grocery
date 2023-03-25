
import React from 'react';
import DealCard from './DealCard';
const Fade = require("react-reveal/Fade")

const deals = [
    {
        id: 1,
        image: '/assets/daily-deal/banner-5-min.png',
        name: "Organic Cage Grade A Large Eggs",
        rating: 2,
        vendor: 'Hambger Hel',
        price: 24.00,
        new_price: 21.12
    },
    {
        id: 2,
        image: '/assets/daily-deal/banner-6-min.png',
        name: "Naturally Flavored Cinnamon Vanilla",
        rating: 4,
        vendor: 'Hambger Hel',
        price: 55.32,
        new_price: 51.55
    },
    {
        id: 3,
        image: '/assets/daily-deal/banner-7-min.png',
        name: "Seeds of Change Organic Watermelon",
        rating: 5,
        vendor: 'Hambger Hel',
        price: 66.12,
        new_price: 61.50
    },
    {
        id: 4,
        image: '/assets/daily-deal/banner-8-min.png',
        name: "Dried fruit: apricots, figs, prunes",
        rating: 5,
        vendor: 'USA Noodle Soup',
        price: 66.00,
        new_price: 61.5
    },
]


const DealsOfTheDay = () => {
    return (
        <section className='pt-8'>
            <div className='max-w-8xl mx-auto px-4 2xl:px-0'>
                <div
                    className='flex flex-col md:flex-row gap-8
                    justify-start md:justify-between md:items-center'>
                    <h2
                        className='text-[#253d4e] font-bold text-[32px] 
                        leading-[30px]'>Deals Of The Day</h2>

                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                    {deals.map((deal: any, i) => <Fade bottom>
                        <DealCard

                            key={deal.id} deal={deal} />
                    </Fade>)}

                </div>

            </div>
        </section>
    );
};

export default DealsOfTheDay;