import Link from 'next/link';
import React from 'react';
import CategoryCard2 from './CategoryCard2';

const HomeCategory = () => {
    return (
        <div className='my-8'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-3 gap-5'>
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
        </div>
    );
};

export default HomeCategory;