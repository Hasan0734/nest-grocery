
import BreadCrumbs from '@/components/Shared/BreadCrumbs'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Home } from 'react-feather'
import { Swiper, SwiperSlide } from 'swiper/react'
import Layout from '../components/Layout'
import { Navigation } from 'swiper';


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
            <div className='px-4 md:px-0'>
              <div>
                <h2 className='text-[40px] text-[#253D4E] font-bold mb-4' >Welcome to Nest</h2>
                <p className='text-[#7E7E7E] text-sm leading-5 font-normal'>
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
                  left-0 w-full flex justify-between'>
                    <button onClick={() => swiperRef.current?.slidePrev()}
                      className='bg-white w-9 h-9 hover:bg-[#3bb77e] hover:text-white rounded-full p-2 banner_prev'>
                      <ChevronLeftIcon className='w-full' />
                    </button>
                    <button onClick={() => swiperRef.current?.slideNext()}
                      className='bg-white w-9 h-9 hover:bg-[#3bb77e] hover:text-white rounded-full p-2 banner_next' >
                      <ChevronRightIcon className='w-full' />
                    </button>
                  </div>

                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='max-w-5xl mx-auto px-4 2xl:px-0'>
            <h2 className='text-[#253D4E] text-[40px] 
            font-bold text-center about_wave'>
              What We Provide?</h2>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default About
