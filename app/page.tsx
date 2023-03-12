
import HomeBanner from '@/components/Banner/HomeBanner'
import MainNavbar from '@/components/MainNavbar/MainNavbar'
import SecondHeader from '@/components/SecondHeader/SecondHeader'
import TopHeader from '@/components/TopHeader/TopHeader'
import React from 'react'


export default function Home() {
  return (
    <>
      <header>
        <TopHeader />
        <SecondHeader />
        <MainNavbar />
      </header>
      <HomeBanner />

    </>

  )
}
