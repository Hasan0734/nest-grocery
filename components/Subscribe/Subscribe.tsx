import React from 'react';
import BannerForm from '../Shared/BannerForm';
import { motion } from "framer-motion";

const Subscribe = () => {
    return (
        <motion.div
            initial={
                {
                    opacity: 0,
                    y: 5
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
                y: { duration: 0.6 },
            }}

            className='py-5'>
            <div className='container mx-auto px-4'>
                <div className='relative
                rounded-[30px] min-h-[350px]
                 lg:min-h-[450px] 2xl:min-h-[538px]'
                    style={{ backgroundImage: 'url(/assets/banner-10-min.png)' }}>

                    <div
                        className='text-center lg:text-left 
                        w-full lg:w-[45%] xl:w-[50%] 2xl:w-[45%] absolute
                        left-2 px-2 lg:left-[8%]  translate-y-[10%]
                        md:translate-y-[30%] top-0 z-20'>

                        <h1
                            className='text-[22px] lg:text-[40px] text-start
                            2xl:text-[72px] leading-[28px] lg:leading-[50px]
                             2xl:leading-[80px]
                            font-bold text-[#253d4e] mb-4 lg:mb-8'>

                            Stay home & get your daily
                            needs from our shop
                        </h1>

                        <p
                            className='font-semibold text-[13px] 
                            lg:text-[25px] text-[#7e7e7e] mb-5 lg:mb-9
                            xl:mb-12 2xl:mb-16'>

                            Start Your Daily Shopping with <span className='text-[#3bb77e]'>Nest Mart</span>
                        </p>
                        <BannerForm />
                    </div>
                    <div className='absolute right-10 bottom-0 flex justify-end'>
                        <img className='w-full md:w-[50%]' src="/assets/banner-9-min.png" alt="" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Subscribe;