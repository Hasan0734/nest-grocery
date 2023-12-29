import React from 'react';
import Rating from "@/components/Shared/Rating";

const ReviewCard = ({review}:{review:any}) => {
    return (
        <div className={'border border-gray-200 hover:-translate-y-1 p-5 flex items-start gap-4 duration-300 rounded-lg'}>
            <div className={'flex-row'}>
                <img className={'w-40 h-40 rounded-full'} src={review.img} alt={'author image'}/>
                <h3 className={'text-lg font-bold text-center text-primary'}>{review.name}</h3>
            </div>
            <div>
               <div className={'flex items-center justify-between'}>
                   <span className={'text-gray-300 text-sm'}>December 4, 2022 at 3:12 pm</span>
                   <Rating/>
               </div>
                <p>{review.message}</p>
            </div>
        </div>
    );
};

export default ReviewCard;
