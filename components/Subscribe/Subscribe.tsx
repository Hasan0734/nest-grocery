import React from 'react';
import BannerForm from '../Shared/BannerForm';
import { delay, motion } from "framer-motion";

const Subscribe = () => {
    return (
        <motion.div
            initial={
                {
                    opacity: 0,
                    y: 10
                }
            }
            whileInView={
                {
                    opacity: 1,
                    y: 0,
                    
                }

            }
            viewport={{ once: true }}
            transition={{
                delay: 0.3,
                y: { duration: 0.6, },
            }}

            className='py-5'>
            <div className='max-w-8xl mx-auto px-4 2xl:px-0'>
                <div className='relative
                rounded-[30px] min-h-[350px]
                 lg:min-h-[469px]'
                    style={{ backgroundImage: 'url(/assets/banner-10-min.png)' }}>

                    <div
                        className='text-center sm:text-left 
                        w-full sm:w-3/5 lg:w-[45%] xl:w-[60%] absolute
                        left-2 px-2 sm:left-[5%] translate-y-[10%]
                        md:translate-y-[14%] top-0 z-10'>

                        <h1
                            className='text-[22px] lg:text-[40px] text-start
                            2xl:text-[70px] leading-[28px] lg:leading-[50px]
                             2xl:leading-[80px]
                            font-bold text-[#253d4e] mb-4 lg:mb-8'>

                            Stay home & get your daily
                            needs from our shop
                        </h1>

                        <p
                            className='font-semibold text-[13px] 
                            lg:text-[25px] text-[#7e7e7e] mb-5 lg:mb-9
                            xl:mb-12 2xl:mb-16'>

                            Start Your Daily Shopping with <span className='text-primary'>Nest Mart</span>
                        </p>
                        <BannerForm className={"sm:w-1/2"}/>
                    </div>
                    <div className='absolute right-10 bottom-0 flex justify-end'>
                        <img className='w-full md:w-[65%]' src="/assets/banner-9-min.png" alt="" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Subscribe;