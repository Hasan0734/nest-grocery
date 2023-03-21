import React from 'react';
import slugify from 'slugify';
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
    const [selectedCategory, setCategory] = React.useState('All')
    return (
        <section>
            <div className='max-w-8xl mx-auto px-4 2xl:px-0'>
                <div
                    className='flex flex-col md:flex-row gap-8
                    justify-start md:justify-between md:items-center'>
                    <h2
                        className='text-[#253d4e] font-bold text-[32px] 
                        leading-[30px]'>Daily Best Sells</h2>
                    <ul className='flex gap-4 flex-wrap'>
                        {categoris.map((category: any) => (<li
                            key={category.id}
                            onClick={() => setCategory(slugify(category.name, '-'))}>
                            <a
                                className={`text-[#253d4e] font-semibold
                                 text-[15px] cursor-pointer hover:text-[#3bb77e]
                                 hover:-translate-y-[3px] block duration-300
                                 ${slugify(category.name, ('-')) === selectedCategory ? 'text-[#3bb77e]' : ""}`}>
                                {category.name}
                            </a>
                        </li>))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default DailyBestSells;