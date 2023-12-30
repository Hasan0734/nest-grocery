import React from 'react';
import ReviewCard from "@/components/ProductDetails/ReviewCard";
import Rating from "@/components/Shared/Rating";
import Link from "next/link";


const reviews = [
    {
        id: 1, rating: 5,
        name: 'Sienna',
        img: '/assets/author/author-2.png',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?',
        replay: [{
            id: 1,
            rating: 4,
            name: 'Brenna',
            img: '/assets/author/author-3.png',
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?',
        }],

    },
    {
        id: 2,
        rating: 5,
        name: 'Gemma',
        img: '/assets/author/author-4.png',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?',
    }
];


const ratings = [
    {id:1, title: '5', average: '50%'},
    {id:2, title: '4', average: '25%'},
    {id:3, title: '3', average: '45%'},
    {id:4, title: '2', average: '65%'},
    {id:5, title: '1', average: '85%'},
]
const ProductReview = () => {
    return (
        <div className={'w-full mt-6 flex flex-col 2xl:flex-row items-start justify-between gap-6 '}>
            <div>
                <h2 className={'font-semibold text-xl '}>Customer questions & answers</h2>
                <div className={'space-y-5 mt-5'}>
                    {reviews.map((review) => <>
                        <ReviewCard key={review.id} review={review}/>
                        {review?.replay  && (
                           review?.replay.map((rep) => (
                               <div className={'ml-5 md:ml-10'}>
                                   <ReviewCard key={rep.id} review={rep}/>
                               </div>
                           ))
                        )}
                    </>)}
                </div>
            </div>
            <div className={'min-w-[300px] xl:min-w-[335px]'}>
                <h2 className={'font-semibold text-xl '}>Customer reviews</h2>
                <div className={'mt-5'}>
                    <div className={'flex items-center gap-4'}>
                        <Rating/>
                        <div className={' font-bold'}>4.8 out of 5</div>
                    </div>
                    <div className={'mt-5'}>
                        <ul className={'space-y-3'}>
                            {ratings.map((rating) => (
                                <li key={rating.id} className={'flex items-center gap-3'}>
                                <span className={' text-sm text-gray-400 whitespace-nowrap basis-12'}>
                                    {rating.title} star
                                </span>
                                    <div className={' w-full flex items-center flex-col relative overflow-hidden'}>
                                        <span className={'bg-gray-200 w-full h-3 inline-block rounded '}></span>
                                        <span className={`bg-primary h-3 inline-block rounded absolute top-0 left-0 text-[9px] text-center text-white leading-[12px] z-10`} style={{width: rating.average}}>{rating.average}</span>
                                    </div>

                                </li>
                            ))}
                        </ul>
                    </div>
                  <div className={'mt-5'}>
                      <Link href={'/'} className={'text-sm text-gray-400 '}>How are ratings calculated?</Link>
                  </div>
                </div>

            </div>
        </div>
    );
};

export default ProductReview;
