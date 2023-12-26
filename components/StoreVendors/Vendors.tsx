import React from 'react';
import GridCard from './GridCard';
import ListCard from './ListCard';

const vendors = [
    {
        id: 1,
        name: 'Nature Food',
        created_at: '2012',
        rating: 5,
        total_products: 200,
        image: '/assets/vendors/vendor-1.png',
        type: 'Mall'
    },
    {
        id: 2,
        name: 'Country Crock',
        created_at: '2013',
        rating: 4,
        total_products: 100,
        image: '/assets/vendors/vendor-2.png',
        type: 'Preferred'
    },
    {
        id: 3,
        name: 'Hambger Hel',
        created_at: '2010',
        rating: 2,
        total_products: 150,
        image: '/assets/vendors/vendor-3.png',
        type: 'Mall'
    },
    {
        id: 4,
        name: "Totino's Pizza",
        created_at: '2015',
        rating: 1,
        total_products: 560,
        image: '/assets/vendors/vendor-4.png',
        type: 'Mall'
    },
    {
        id: 5,
        name: 'Maruchan Ramen',
        created_at: '2020',
        rating: 3,
        total_products: 120,
        image: '/assets/vendors/vendor-5.png',
        type: null
    },
    {
        id: 6,
        name: 'USA Noodle Soup',
        created_at: '2022',
        rating: 4,
        total_products: 230,
        image: '/assets/vendors/vendor-6.png',
        type: null
    },
    {
        id: 7,
        name: 'Red Baron Pizza',
        created_at: '2021',
        rating: 5,
        total_products: 120,
        image: '/assets/vendors/vendor-7.png',
        type: null
    },
    {
        id: 8,
        name: "Mrs. Smith's Pie",
        created_at: '2023',
        rating: 5,
        total_products: 500,
        image: '/assets/vendors/vendor-8.png',
        type: null
    },
    {
        id: 9,
        name: 'Dove Promises',
        created_at: '2021',
        rating: 4,
        total_products: 1000,
        image: '/assets/vendors/vendor-9.png',
        type: null
    },
    {
        id: 10,
        name: 'Mrs. Dash',
        created_at: '2013',
        rating: 2,
        total_products: 850,
        image: '/assets/vendors/vendor-10.png',
        type: null
    },
    {
        id: 11,
        name: 'Lindt Grocery A1',
        created_at: '2015',
        rating: 3,
        total_products: 700,
        image: '/assets/vendors/vendor-11.png',
        type: null
    },
    {
        id: 12,
        name: "Snyder's-Lance",
        created_at: '2016',
        rating: 2,
        total_products: 250,
        image: '/assets/vendors/vendor-12.png',
        type: null
    },
    {
        id: 13,
        name: "Dreyer's/Edy's",
        created_at: '2017',
        rating: 1,
        total_products: 200,
        image: '/assets/vendors/vendor-13.png',
        type: null
    },
    {
        id: 14,
        name: 'Wonderful',
        created_at: '2018',
        rating: 3,
        total_products: 50,
        image: '/assets/vendors/vendor-14.png',
        type: null
    },
    {
        id: 15,
        name: 'Almonds',
        created_at: '2017',
        rating: 5,
        total_products: 20,
        image: '/assets/vendors/vendor-15.png',
        type: null
    },
    {
        id: 16,
        name: 'Pistachios',
        created_at: '2016',
        rating: 5,
        total_products: 560,
        image: '/assets/vendors/vendor-1.png',
        type: null
    },
]

const Vendors = ({ layout }: any) => {
    console.log(layout)
    return (
        <section className='py-16'>
            <div className='max-w-8xl mx-auto px-4 2xl:px-0'>
                <div className={`grid grid-cols-1 ${layout === 'GRID' ? 'xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' :
                  'md:grid-cols-2'} gap-x-6 gap-y-10`}>
                    {vendors?.map((vendor: any) => (
                        (layout === 'GRID' ? <GridCard
                            position="right-0"
                            radius="rounded-bl-xl"
                            vendor={vendor}
                        /> : <ListCard
                            position="right-0"
                            radius="rounded-bl-xl"
                            vendor={vendor}
                        />)

                    ))}
                </div>
            </div>
        </section>
    );
};

export default Vendors;