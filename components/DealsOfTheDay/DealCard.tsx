import React from 'react';
import CardContent from './CardContent';

const DealCard = ({deal}:any) => {
    return (
        <>
            <div className='relative mb-20'>
                <img className='rounded-xl' src={deal.image} alt="" />
                <CardContent />
            </div>
        </>
    );
};

export default DealCard;