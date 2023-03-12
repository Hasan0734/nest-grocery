'use client'

import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css/pagination";
import BannerForm from './BannerForm';


const HomeBanner = () => {

    return (
        <>
            <section className='container mx-auto pt-10'>

                <div className='mx-4 overflow-hidden'>
                    <Swiper
                        slidesPerView={1}
                        slidesPerGroup={1}
                        speed={2000}
                        loop={true}
                        spaceBetween={20}
                        navigation={true}
                        autoplay={{
                            delay: 3000,
                            waitForTransition: true,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true

                        }}
                        pagination={{
                            clickable: true,
                            // bulletActiveClass: "banner_paginate_bullet_active",
                            // bulletClass: "banner_paginate_bullet"
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="py-[70px]"
                    >

                        <SwiperSlide>
                            <div className='banner_slider relative min-h-[350px] lg:min-h-[538px]'
                                style={{ backgroundImage: 'url(/assets/slider-1-min.png)' }}>

                                <div
                                    className='text-center lg:text-left w-full lg:w-[60%] xl:w-[55%] 2xl:w-[45%] absolute left-2 lg:left-[8%]  translate-y-[40%] md:translate-y-[30%] top-0'>
                                    
                                    <h1
                                        className='text-[32px] lg:text-[60px] xl:text-[72px] leading-[40px] lg:leading-[80px] font-bold text-[#253d4e] mb-4 lg:mb-8'>
                                        
                                        Don't miss amazing grocery deals
                                    </h1>

                                    <p
                                        className='font-semibold text-[16px] lg:text-[30px] text-[#7e7e7e] mb-5 lg:mb-9 xl:mb-12 2xl:mb-16'>
                                        
                                        Sign up for daily newsletter
                                    </p>
                                    <BannerForm />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div
                                className='banner_slider relative min-h-[350px] lg:min-h-[538px]'

                                style={{ backgroundImage: 'url(/assets/slider-2-min.png)' }}>

                                <div
                                    className='text-center lg:text-left w-full lg:w-[60%] xl:w-[55%] 2xl:w-[45%] absolute left-2 lg:left-[8%]  translate-y-[40%] md:translate-y-[30%] top-0'>
                                    
                                    <h1
                                        className='text-[32px] lg:text-[60px] xl:text-[72px] leading-[40px] lg:leading-[80px] font-bold text-[#253d4e] mb-4 lg:mb-8'>
                                        
                                        Fresh Vegetables Big discount
                                    </h1>
                                    
                                    <p
                                        className='font-semibold text-[16px] lg:text-[30px] text-[#7e7e7e] mb-5 lg:mb-9 xl:mb-12 2xl:mb-16'>
                                        Save up to 50% off on your first order
                                    </p>

                                    <BannerForm />
                                </div>

                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default HomeBanner;