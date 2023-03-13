import HomeBanner from '@/components/Banner/HomeBanner'
import FeaturedCategories from '@/components/FeaturedCategories/FeaturedCategories'
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
        <FeaturedCategories/>
      </Layout>


    </>
  )
}

export default Home
