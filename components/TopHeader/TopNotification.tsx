import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import Link from 'next/link';
const TopNotification = () => {
    return (
        <>
            <div>
                <Swiper
                    loop={true}
                    slidesPerView={1}
                    className=' h-6 overflow-hidden'
                    direction={"vertical"}
                    speed={1000}
                    autoplay={{
                        disableOnInteraction: false
                    }}
                    modules={[Autoplay]}

                >
                    <SwiperSlide >
                        <Link href={"/"} legacyBehavior>
                            <a className='text-primary font-semibold' href="">100% secure delivery without contacting the cuorier</a>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href={"/"} legacyBehavior>
                            <a className='text-primary font-semibold' href="">Supper Value Deals - Save more with coupons</a>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link href={"/"} legacyBehavior>
                            <a className='text-primary font-semibold' href="">Trendy 25 silver jewelry, save 35% off tody</a>
                        </Link>
                    </SwiperSlide>



                </Swiper>
            </div>
        </>
    );
};

export default TopNotification;