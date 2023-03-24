import React from 'react';
import AdvantageCard from './AdvantageCard';


const advantages = [
    {
        id: 1,
        title: 'Best price & Offers',
        icon: '/assets/icons/icon-1.png',
        offectY: 30,
        duration: 500
    },
    {
        id: 2,
        title: 'Free delivery',
        icon: '/assets/icons/icon-2.png',
        offectY: 50,
        duration: 1000
    },
    {
        id: 3,
        title: 'Great daily deal',
        icon: '/assets/icons/icon-3.png',
        offectY: 70,
        duration: 1500
    },
    {
        id: 4,
        title: 'Wide assortment',
        icon: '/assets/icons/icon-4.png',
        offectY: 90,
        duration: 2000
    },
    {
        id: 5,
        title: 'Easy returns',
        icon: '/assets/icons/icon-5.png',
        offectY: 110,
        duration: 2500
    },
    {
        id: 6, title: 'Safe delivery',
        icon: '/assets/icons/icon-6.svg',
        offectY: 120,
        duration: 3000
    },
]
const OurAdvantage = () => {
    return (
        <section>
            <div className='max-w-8xl mx-auto px-4 2xl:px-0'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5'>
                    {advantages.map((advantage) => <AdvantageCard
                        key={advantage.id}
                        advantage={advantage} />)}
                </div>
            </div>
        </section>
    );
};

export default OurAdvantage;