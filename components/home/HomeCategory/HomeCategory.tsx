import Link from 'next/link';
import React from 'react';
import CategoryCard2 from './CategoryCard2';
import { motion } from "framer-motion"

const HomeCategory = () => {

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
            viewport={{ once: true }}
            transition={{
                delay: 0.4,
                y: { duration: 0.4 },
            }}

            className='py-4'>
            <div className='max-w-8xl mx-auto px-4 2xl:px-0'>
                <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-5 top-2'

                >
                    <CategoryCard2
                        title={"Everyday Fresh & Clean with Our Products"}
                        parentLink={'vegatebles'}
                        image="/assets/banner-1.png"
                    />
                    <CategoryCard2
                        title={"Make your Breakfast Healthy and Easy"}
                        parentLink={'Milks And Dairies'}
                        image="/assets/banner-2.png"

                    />
                    <CategoryCard2
                        title={"The Organic Product Online"}
                        parentLink={'vegatebles'}
                        image="/assets/banner-3.png"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default HomeCategory;