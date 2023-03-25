import HomeBanner from '@/components/Banner/HomeBanner'
import DailyBestSells from '@/components/DailyBestSells/DailyBestSells'
import DealsOfTheDay from '@/components/DealsOfTheDay/DealsOfTheDay'
import FeaturedCategories from '@/components/FeaturedCategories/FeaturedCategories'
import HomeCategory from '@/components/HomeCategory/HomeCategory'
import OurAdvantage from '@/components/OurAdvantage/OurAdvantage'
import PopularProduct from '@/components/PopularProduct/PopularProduct'
import Subscribe from '@/components/Subscribe/Subscribe'
import TopProducts from '@/components/TopProducts/TopProducts'
import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'


const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Nest - Grocery Store SPA Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <HomeBanner />
        <FeaturedCategories />
        <HomeCategory />
        <PopularProduct />
        <DailyBestSells/>
        <DealsOfTheDay/>
        <TopProducts/>
        <Subscribe />
        <OurAdvantage/>
      </Layout>
    </>
  )
}

export default Home
