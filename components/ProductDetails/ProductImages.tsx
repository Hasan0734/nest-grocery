import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Navigation, Thumbs, Zoom} from "swiper";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa6";
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';

const ProductImages = () => {

    const images = [
        'https://swiperjs.com/demos/images/nature-1.jpg',
        'https://swiperjs.com/demos/images/nature-2.jpg',
        'https://swiperjs.com/demos/images/nature-3.jpg',
        'https://swiperjs.com/demos/images/nature-4.jpg',
        'https://swiperjs.com/demos/images/nature-5.jpg',
        'https://swiperjs.com/demos/images/nature-6.jpg',
        'https://swiperjs.com/demos/images/nature-7.jpg',
        'https://swiperjs.com/demos/images/nature-8.jpg',
        'https://swiperjs.com/demos/images/nature-9.jpg',
    ]
    const [thumbsSwiper, setThumbsSwiper]: any = useState();

    const swiperRef: any = useRef();

    return (
        <div className={'mx-w-full md:max-w-xl md:pr-10'}>
            <div className={'border rounded-lg border-gray-200 p-1 md:p-6'}>
                <Swiper
                    zoom={true}
                    thumbs={{swiper: swiperRef?.current}}
                    spaceBetween={40}
                    speed={1400}
                    slidesPerView={1}
                    navigation={false}
                    modules={[Zoom, Thumbs, Navigation, FreeMode,]}
                    className={'h-auto md:h-[500px] rounded'}
                    loop={true}
                >
                    {images.map(img => (
                        <SwiperSlide
                            key={img}
                        >
                            <div     className={'swiper-zoom-container'}>
                                <img className={'w-full h-full'} src={img}/>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className={'relative group mt-5'}>
                <Swiper
                    spaceBetween={15}
                    slidesPerView={2}
                    modules={[Thumbs, Navigation, FreeMode]}
                    loop={true}
                    speed={600}
                    watchSlidesProgress={true}
                    thumbs={{slideThumbActiveClass: "border border-primary"}}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    className={'h-[130px] product_thumb_swiper'}
                    breakpoints={{
                        550: {
                            slidesPerView: 3
                        },
                        800: {
                            slidesPerView: 4
                        }
                    }}
                >

                    {images.map(img => <SwiperSlide key={img}>
                        <img className={'rounded-lg w-full h-full'} src={img}/>
                    </SwiperSlide>)}

                </Swiper>
                <div
                    className={'flex items-center gap-2 absolute -left-4 -right-4 top-0 bottom-0 justify-between group-hover:visible invisible'}>
                    <button
                        onClick={() => swiperRef.current.slidePrev()}
                        className={'bg-gray-200 text-gray-600 rounded-full p-2 hover:bg-primary duration-300 hover:text-white z-10'}
                    >
                        <FaArrowLeft/>
                    </button>
                    <button onClick={() => swiperRef.current.slideNext()}
                            className={'bg-gray-200 text-gray-600 rounded-full p-2 hover:bg-primary duration-300 hover:text-white  z-10'}>
                        <FaArrowRight/>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ProductImages;
