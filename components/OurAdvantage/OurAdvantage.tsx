import React from 'react';
import AdvantageCard from './AdvantageCard';


const advantages = [
    {id:1, title: 'Best price & Offers', icon: '/assets/icons/icon-1.png'},
    {id:2, title: 'Free delivery', icon: '/assets/icons/icon-2.png'},
    {id:3, title: 'Great daily deal', icon: '/assets/icons/icon-3.png'},
    {id:4, title: 'Wide assortment', icon: '/assets/icons/icon-4.png'},
    {id:5, title: 'Easy returns', icon: '/assets/icons/icon-5.png'},
    {id:6, title: 'Safe delivery', icon: '/assets/icons/icon-6.svg'},
]
const OurAdvantage = () => {
    return (
        <section>
            <div className='container mx-auto px-4'>
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