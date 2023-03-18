import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { useRef } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CategoryCard from './CategoryCard';
import { motion } from "framer-motion"

const simpleCategory = [
    { id: 1, name: "Cake & Milk" },
    { id: 2, name: "Coffes & Teas" },
    { id: 3, name: "Pet Foods" },
    { id: 4, name: "Vegetables" },
]

const featuredCat = [
    {
        id: 1,
        name: "Cake & Milk",
        image: "/assets/category/cat-13.png",
        background: "#f2fce4",
        items: 11
    },
    {
        id: 2,
        name: "Organic Kiwi",
        image: "/assets/category/cat-12.png",
        background: "#fffceb",
        items: 6
    },
    {
        id: 3,
        name: "Peach",
        image: "/assets/category/cat-11.png",
        background: "#ecffec",
        items: 6
    },
    {
        id: 4,
        name: "Read Apple",
        image: "/assets/category/cat-9.png",
        background: "#feefea",
        items: 10
    },
    {
        id: 5,
        name: "Snacks",
        image: "/assets/category/cat-3.png",
        background: "#fff3eb",
        items: 12
    },
    {
        id: 6,
        name: "Vegetables",
        image: "/assets/category/cat-1.png",
        background: "#fff3ff",
        items: 6
    },
    {
        id: 7,
        name: "Strawberry",
        image: "/assets/category/cat-2.png",
        background: "#f2fce4",
        items: 10
    },
    {
        id: 8,
        name: "Black plum",
        image: "/assets/category/cat-4.png",
        background: "#feefea",
        items: 5
    },
    {
        id: 9,
        name: "Custard apple",
        image: "/assets/category/cat-5.png",
        background: "#f2fce4",
        items: 10
    },
    {
        id: 10,
        name: "Coffee & Tea",
        image: "/assets/category/cat-14.png",
        background: "#feefea",
        items: 6
    },
    {
        id: 11,
        name: "Headphone",
        image: "/assets/category/cat-15.png",
        background: "#ecffec",
        items: 15
    },
]

const FeaturedCategories = () => {
    const swiperRef: any = useRef()
    return (
        <motion.div

            initial={
                {
                    opacity: 0,
                    y: 30
                }
            }
            whileInView={
                {
                    opacity: 1,
                    y: 0
                }
            }
            viewport={{ once: false }}
            transition={{
                delay: 0.4,
                y: { duration: 0.4 },
            }}
            className=''>
            <div className='max-w-8xl mx-auto px-4 2xl:px-0 mt-10'>

                <div className='flex justify-between '>
                    <div className='flex flex-col md:flex-row gap-8 justify-start md:items-center'>
                        <h2 className='text-[#253d4e] font-bold text-[32px] leading-[30px]'>Featured Categories</h2>
                        <ul className='flex gap-4 flex-wrap'>
                            {simpleCategory.map((category: any) => (<li key={category.id}>

                                <Link href={"/"} legacyBehavior>
                                    <a className='text-[#253d4e] font-semibold text-[15px] '>{category.name}</a>
                                </Link>
                            </li>))}
                        </ul>
                    </div>
                    <div className='hidden lg:flex gap-4 '>
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className='w-10 h-10 p-[10px] rounded-full text-[#253d4e] hover:text-white bg-gray-200 hover:bg-[#3bb77e] duration-300'>

                            <ArrowLeftIcon className='w-full' />
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className='w-10 h-10 p-[10px] rounded-full text-[#253d4e] hover:text-white bg-gray-200 hover:bg-[#3bb77e] duration-300'>

                            <ArrowRightIcon className='w-full' />
                        </button>
                    </div>
                </div>
                <div className=''>
                    <Swiper
                        slidesPerView={1}
                        slidesPerGroup={1}
                        speed={200}
                        // loop={true}
                        spaceBetween={20}
                        onBeforeInit={(swiper: any) => {
                            swiperRef.current = swiper
                        }}

                        modules={[Navigation]}
                        className=""

                        breakpoints={{
                            320: {
                                slidesPerView: 2
                            },

                            768: {
                                slidesPerView: 4,

                            },
                            1020: {
                                slidesPerView: 6,

                            },
                            1200: {
                                slidesPerView: 8,

                            }
                        }}
                    >

                        {featuredCat.map((category: any) => <SwiperSlide key={category.id} className='py-5'> <CategoryCard category={category} />
                        </SwiperSlide>
                        )}

                    </Swiper>
                </div>
            </div>
        </motion.div>
    );
};

export default FeaturedCategories;