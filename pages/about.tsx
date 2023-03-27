
import BreadCrumbs from '@/components/Shared/BreadCrumbs'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Home } from 'react-feather'
import Layout from '../components/Layout'


const About: NextPage = () => {

  return (
    <>
      <Head>
        <title>About -Nest </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <BreadCrumbs>
          <ul className='flex items-center gap-5'>
            <li className=' flex space-x-5 items-center' >
              <Link href={"/"} className="flex gap-1 items-center text-[#3bb77e] hover:text-orange-300">
                <Home size={15} />
                <span className='font-medium'>Home</span>
              </Link>
              <ChevronRightIcon width={12} />
            </li>
            <li className=' flex space-x-5 items-center'>
              <span className='font-medium'>About</span>
            </li>
          </ul>
        </BreadCrumbs>


        <section>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-10 max-w-5xl mx-auto px-4 2xl:px-0'>
            <div>
              <img className='rounded-xl' src="/assets/about/about-1.png" alt="" />
            </div>
            <div>
              <h2 className='text-[40px] text-[#253D4E] font-bold mb-4' >Welcome to Nest</h2>
              <p className='text-[#7E7E7E] text-sm leading-5 font-normal'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.
                <br />
                <br />
                Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default About
