import React from 'react';
import ReviewCard from "@/components/ProductDetails/ReviewCard";


const reviews = [
    {
        id:1, rating: 5,
        name: 'Sienna',
        img: '/assets/author/author-2.png',
        message:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?',
        replay:[ {
            id:1,
            rating: 4,
            name: 'Brenna',
            img: '/assets/author/author-3.png',
            message:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?',
        }],

    },
    {
        id:2,
        rating: 5,
        name: 'Gemma',
        img: '/assets/author/author-4.png',
        message:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?',
    }
]
const ProductReview = () => {
    return (
        <div className={'w-full mt-6 flex items-center justify-between'}>
            <div>
            <h2 className={'font-semibold text-xl '}>Customer questions & answers</h2>

              <div className={'space-y-5'}>
                  {reviews.map((review) => <>
                      <ReviewCard key={review.id} review={review}/>
                  </>)}
              </div>
            </div>
            <div className={'w-[350px]'}>
                <h2 className={'font-semibold text-xl '}>Customer reviews</h2>
            </div>
        </div>
    );
};

export default ProductReview;
