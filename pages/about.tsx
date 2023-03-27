
import BreadCrumbs from '@/components/Shared/BreadCrumbs'
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Home } from 'react-feather'
import { Swiper, SwiperSlide } from 'swiper/react'
import Layout from '../components/Layout'
import { Navigation } from 'swiper';
import WhatWeProvideCard from '@/components/WhatWeProvideCard/WhatWeProvideCard'
const Fade = require('react-reveal/Fade')

const weProvides = [
  {
    id: 1,
    title: 'Best Prices & Offers',
    icon: '/assets/icons/icon-1.png',
    about: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
    fadeDealy: 100
  },
  {
    id: 2,
    title: 'Wide Assortment',
    icon: '/assets/icons/icon-2.png',
    about: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
    fadeDealy: 100
  },
  {
    id: 3,
    title: 'Free Delivery',
    icon: '/assets/icons/icon-3.png',
    about: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
    fadeDealy: 100
  },
  {
    id: 4,
    title: 'Easy Returns',
    icon: '/assets/icons/icon-4.png',
    about: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
    fadeDealy: 200
  },
  {
    id: 5,
    title: '100% Satisfaction',
    icon: '/assets/icons/icon-5.png',
    about: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
    fadeDealy: 200
  },
  {
    id: 6,
    title: 'Great Daily Deal',
    icon: '/assets/icons/icon-6.svg',
    about: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
    fadeDealy: 200
  },
]

const our_history = [
  { id: 1, title: 'Who we area', desc: '' },
  { id: 1, title: 'Our history', desc: '' },
  { id: 1, title: 'Our mission', desc: '' },
]

const About: NextPage = () => {
  const swiperRef: any = React.useRef()

  return (
    <>
      <Head>
        <title>About -Nest </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <BreadCrumbs>
          <ul className='flex items-center gap-3'>
            <li className=' flex space-x-3 items-center' >
              <Link href={"/"} className="flex gap-1 items-center text-[#3bb77e] hover:text-orange-300">
                <Home size={15} />
                <span className='font-medium text-sm'>Home</span>
              </Link>
              <ChevronRightIcon strokeWidth={2.5} width={10} />
            </li>
            <li className=' flex space-x-5 items-center'>
              <span className='font-medium text-sm'>About</span>
            </li>
          </ul>
        </BreadCrumbs>


        <section>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-10 max-w-7xl mx-auto px-4 2xl:px-0'>
            <div>
              <Fade bottom>
                <img className='rounded-xl' src="/assets/about/about-1.png" alt="" />
              </Fade>
            </div>
            <div className='px-4 md:px-0 '>
              <div className='pt-6'>
                <h2 className='text-[40px] text-[#253D4E] font-bold mb-4' >Welcome to Nest</h2>
                <p className='text-[#7E7E7E] text-[16px] leading-6 font-normal'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.
                  <br />
                  <br />
                  Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.
                </p>
              </div>
              <div className='w-full overflow-hidden pt-10 '>

                <Swiper
                  speed={2000}
                  slidesPerView={1}
                  slidesPerGroup={1}
                  modules={[Navigation]}
                  loop={true}
                  spaceBetween={20}
                  onBeforeInit={(swiper: any) => {
                    swiperRef.current = swiper
                  }}
                  breakpoints={{
                    487: {
                      slidesPerView: 3,
                    },
                  }}

                >

                  <SwiperSlide>
                    <div>
                      <img className='w-full' src="/assets/about/about-2.png" alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img className='w-full' src="/assets/about/about-3.png" alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img className='w-full' src="/assets/about/about-4.png" alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img className='w-full' src="/assets/about/about-2.png" alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img className='w-full' src="/assets/about/about-4.png" alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img className='w-full' src="/assets/about/about-3.png" alt="" />
                    </div>
                  </SwiperSlide>
                  <div className='swiper-navigations z-20 absolute top-[50%]
                  -translate-y-[50%]
                  left-0  w-full flex justify-between'>
                    <button onClick={() => swiperRef.current?.slidePrev()}
                      className='bg-white w-9 h-9 hover:bg-[#3bb77e]
                       hover:text-white rounded-full p-2 ml-2'>
                      <ArrowLeftIcon className='w-full' />
                    </button>
                    <button onClick={() => swiperRef.current?.slideNext()}
                      className='bg-white w-9 h-9 hover:bg-[#3bb77e]
                       hover:text-white rounded-full p-2 mr-2' >
                      <ArrowRightIcon className='w-full' />
                    </button>
                  </div>

                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <section className='mt-10'>
          <div className='max-w-7xl mx-auto px-4 2xl:px-0'>
            <h2 className='text-[#253D4E] text-[30px] 
            font-bold text-center about_wave'>
              What We Provide?</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
              {weProvides.map((provide) => <WhatWeProvideCard key={provide.id} provide={provide} />)}

            </div>
          </div>
        </section>
        <section className='mt-16'>
          <div className='max-w-7xl mx-auto px-4 2xl:px-0'>
            <div className='grid grid-cols-2 gap-10'>
              <div>
                <Fade bottom>
                  <img src="/assets/about/about-5.png" alt="" />
                </Fade>
              </div>
              <div className='flex items-center'>
                <div className=''>
                  <h3 className='text-[#3bb77e] text-2xl mb-5 font-bold'>Our performance</h3>
                  <h3 className='text-[#253d4e] text-[30px] mb-5 font-bold leading-8'>
                    Your Partner for <br />e-commerce grocery solution
                  </h3>

                  <div>
                    <p className='text-[#7e7e7e] text-[16px] leading-7 font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam aliquam cum delectus. Iure aliquam quis repellendus eaque ea! Libero odio iusto ad perferendis excepturi cupiditate!
                    </p>
                    <br />
                    <p className='text-[#7e7e7e] text-[16px] leading-7 font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam aliquam cum delectus. Iure aliquam quis repellendus eaque ea! Libero odio
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        <section className='mt-16'>
          <div className='max-w-7xl mx-auto px-4 2xl:px-0'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {our_history.map((history: any) => <div key={history.id}>
                <h2 className='text-[#253d4e] text-[32px] mb-5 font-bold'>
                  {history.title}
                </h2>
                <p className='text-[#7e7e7e] text-[16px] leading-7 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas consequatur nesciunt officiis quas at quam, excepturi earum corporis?</p>
              </div>)}

            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default About
