import React from 'react';
import CardContent from './CardContent';
const Fade = require("react-reveal/Fade")

const DealCard = ({ deal }: any) => {
    return (
        <>
        <Fade bottom>
            <div className='relative mb-20 deals_card'>
                <img className='rounded-xl' src={deal.image} alt="" />
                <CardContent  deal={deal}/>
            </div>
            </Fade>
        </>
    );
};

export default DealCard;