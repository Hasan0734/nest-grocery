import React, {useRef} from 'react';
import Container from "@/components/Shared/Container";
import TopProductCard from "@/components/Shared/TopProducts/TopProductCard";
import {Swiper, SwiperSlide,useSwiper} from "swiper/react";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
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
    {
        id: 4,
        name: 'Organic Cage Grade A Large  Eggs',
        image: '/assets/popular-product/product-7-1.jpg',
        rating: 4,
        new_price: 25.22,
        old_price: 35.55,
        price_range: null
    },
    {
        id: 5,
        name: "Naturally Flavored Cinnamon Vanilla",
        image: '/assets/popular-product/product-8-1.jpg',
        rating: 2,
        new_price: 32.22,
        old_price: 36.55,
        price_range: null
    },
]
const RecentViewedProduct = () => {

    const swiperRef:any = useRef();
    return (
        <Container className='mt-14'>
            <div className={'border-2 border-dashed border-gray-200 p-5 rounded-lg'}>
             <div className={'flex items-center justify-between'}>
                 <h2 className={'text-2xl text-primary-text font-semibold'}>Recent Viewed Product</h2>
                 {recentlyAdded?.length > 4 && <div className={'flex items-center gap-2'}>
                     <button
                         onClick={() => swiperRef.current.slidePrev()}
                         className={'bg-gray-200 text-gray-600 rounded-full p-2 hover:bg-primary duration-300 hover:text-white'}
                     >
                         <FaArrowLeft/>
                     </button>
                     <button onClick={() => swiperRef.current.slideNext()}
                             className={'bg-gray-200 text-gray-600 rounded-full p-2 hover:bg-primary duration-300 hover:text-white'}>
                         <FaArrowRight/>
                     </button>
                 </div>}
             </div>

             <div className={'mt-6'}>
                 <Swiper
                          slidesPerView={1}
                         spaceBetween={15}
                         slidesPerGroup={1}
                         speed={1500}
                         onSwiper={(swiper) => {
                              swiperRef.current = swiper;
                           }}
                        breakpoints={{
                            677: {
                                slidesPerView: 2
                            },
                            940: {
                                slidesPerView: 3

                            },
                            1240: {
                                slidesPerView: 4
                            },


                        }}
                 >
                     {recentlyAdded.map((product: any) => (
                             <SwiperSlide>
                                 <div key={product.id} className={'border-2 border-dashed border-gray-200 rounded-lg'}>
                                     <div className={'hover:-translate-y-1 duration-300'}>
                                         <TopProductCard
                                             product={product}/>
                                     </div>
                                 </div>
                             </SwiperSlide>
                         )
                     )}
                 </Swiper>

             </div>

            </div>
        </Container>
    );
};

export default RecentViewedProduct;
