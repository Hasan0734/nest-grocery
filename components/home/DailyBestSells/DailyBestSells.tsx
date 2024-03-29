import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import React from 'react';
import slugify from 'slugify';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BestSellCard from './BestSellCard';

const categoris = [
    {
        id: 1,
        name: "All"
    },
    {
        id: 2,
        name: "Deals Of the Day"
    },
    {
        id: 3,
        name: "Beauty"
    },
    {
        id: 4,
        name: "Bread & Juice"
    },
    {
        id: 5,
        name: "Drinks"
    },
    {
        id: 6,
        name: "Milks"
    },
]

const DailyBestSells = () => {
    const swiperRef: any = React.useRef()
    const [selectedCategory, setCategory] = React.useState('All')
    return (
        <section>
            <div className='max-w-8xl mx-auto px-4 2xl:px-0'>
                <div
                    className='flex flex-col md:flex-row gap-8
                    justify-start md:justify-between md:items-center'>
                    <div className='flex items-center space-x-28'>
                        <h2
                            className='text-[#253d4e] font-bold text-[32px] 
                        leading-[30px]'>Daily Best Sells</h2>
                        <div className='gap-4 hidden lg:flex'>
                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                className='w-10 h-10 p-[10px] rounded-full text-[#253d4e] hover:text-white bg-gray-200 hover:bg-primary duration-300'>

                                <ArrowLeftIcon className='w-full' />
                            </button>
                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                className='w-10 h-10 p-[10px] rounded-full text-[#253d4e] hover:text-white bg-gray-200 hover:bg-primary duration-300'>

                                <ArrowRightIcon className='w-full' />
                            </button>

                        </div>
                    </div>


                    <ul className='flex gap-4 flex-wrap'>
                        {categoris.map((category: any) => (<li
                            key={category.id}
                            onClick={() => setCategory(slugify(category.name, '-'))}>
                            <a
                                className={`text-[#253d4e] font-semibold
                                 text-[15px] cursor-pointer hover:text-primary
                                 hover:-translate-y-[3px] block duration-300
                                 ${slugify(category.name, ('-')) === selectedCategory ? 'text-primary' : ""}`}>
                                {category.name}
                            </a>
                        </li>))}
                    </ul>
                </div>

                <div className='mt-5 flex flex-col sm:flex-row justify-between gap-5 overflow-hidden'>

                    <div className='sm:max-w-[320px] h-[520px] daily_cat_card 
                    p-5 md:p-12 rounded-2xl' >
                        <h3 className='text-[#253d4e] font-bold mb-24 
                        text-[40px] leading-[48px] w-[250px]
                        '>Bring nature into your home</h3>
                        <button className='bg-primary px-3 py-[6px]
                         text-white rounded text-sm font-semibold'>Shop Now →</button>
                    </div>

                    {/* <div className='grid grid-cols-4 gap-4'> */}

                    <Swiper
                        slidesPerView={4}
                        slidesPerGroup={1}
                        spaceBetween={20}
                        speed={2000}
                        loop={true}
                        onBeforeInit={(swiper: any) => {
                            swiperRef.current = swiper
                        }}

                        modules={[Navigation]}

                        className="daily_best_slider w-full"
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },

                            768: {
                                slidesPerView: 2,

                            },

                            920: {
                                slidesPerView: 3,
                            },
                            1350: {
                                slidesPerView: 3,

                            },
                            1500: {
                                slidesPerView: 4,

                            },

                        }}
                    >
                        <SwiperSlide>
                            <BestSellCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BestSellCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BestSellCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BestSellCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BestSellCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BestSellCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BestSellCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BestSellCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BestSellCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BestSellCard />
                        </SwiperSlide>
                    </Swiper>


                    {/* </div> */}
                </div>
            </div>
        </section>
    );
};

export default DailyBestSells;