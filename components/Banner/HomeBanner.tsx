'use client'

import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";

const HomeBanner = () => {
    return (
        <>
            <section className='container mx-auto pt-10'>

                {/* <div className='mx-4 overflow-hidden'> */}
                    <Swiper
                        slidesPerView={1}
                        slidesPerGroup={1}
                        speed={1500}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            waitForTransition: true,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true

                        }}
                        pagination={{
                            clickable: true,
                            bulletActiveClass: "banner_paginate_bullet_active",
                            bulletClass: "banner_paginate_bullet"
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySlider"
                    >

                        <SwiperSlide>
                            <div className='banner_slider'
                                style={{ backgroundImage: 'url(/assets/slider-1-min.png)' }}>
                                <h1>Hello wrold</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='banner_slider'
                                style={{ backgroundImage: 'url(/assets/slider-2-min.png)' }}>
                                <h1>Hello wrold</h1>
                            </div>
                        </SwiperSlide>
            
                    </Swiper>
              {/* </div> */}
            </section>
        </>
    );
};

export default HomeBanner;