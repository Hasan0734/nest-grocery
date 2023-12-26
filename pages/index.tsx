import HomeBanner from '@/components/home/Banner/HomeBanner'
import DailyBestSells from '@/components/home/DailyBestSells/DailyBestSells'
import DealsOfTheDay from '@/components/home/DealsOfTheDay/DealsOfTheDay'
import FeaturedCategories from '@/components/home/FeaturedCategories/FeaturedCategories'
import HomeCategory from '@/components/home/HomeCategory/HomeCategory'
import OurAdvantage from '@/components/OurAdvantage/OurAdvantage'
import PopularProduct from '@/components/PopularProduct/PopularProduct'
import Subscribe from '@/components/Subscribe/Subscribe'
import TopProducts from '@/components/home/TopProducts/TopProducts'
import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import Modal from '@/components/Modal/Modal'


const Home: NextPage = () => {
  let [isOpen, setIsOpen] = useState(true);

  React.useEffect(() => {
    setIsOpen(true)
  }, [])

  return (
    <>
      <Head>
        <title>Nest - Grocery Store SPA Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Layout>
        <HomeBanner />
        <FeaturedCategories />
        <HomeCategory />
        <PopularProduct />
        <DailyBestSells />
        <DealsOfTheDay />
        <TopProducts />
        <Subscribe />
        <OurAdvantage />
      </Layout>
    </>
  )
}

export default Home
