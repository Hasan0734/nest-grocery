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
        <MainNavbar/>
      </header>
    <button className='p-8 bg-orange-400'>Hello</button>
      
    </>

  )
}
