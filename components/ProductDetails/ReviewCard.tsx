import React from 'react';
import Rating from "@/components/Shared/Rating";

const ReviewCard = ({review}:{review:any}) => {
    return (
        <div className={'border border-gray-200 hover:-translate-y-1 p-5 flex flex-col xs:flex-row items-start gap-4  duration-300 rounded-lg'}>
            <div className={'w-24 flex flex-col items-center'}>
             <div className={'w-20'}>
                 <img className={'rounded-full'} src={review.img} alt={'author image'}/>
             </div>
                <h3 className={'text-lg font-bold text-primary'}>{review.name}</h3>
            </div>
            <div>
               <div className={'flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-4'}>
                   <span className={'text-gray-400 text-sm'}>December 4, 2022 at 3:12 pm</span>
                   <Rating/>
               </div>
                <p className={'text-sm mt-5'}> {review.message}</p>
            </div>
        </div>
    );
};

export default ReviewCard;
