import React from 'react';
import Head from "next/head";
import Layout from "@/components/Layout";
import BreadCrumbs from "@/components/Shared/BreadCrumbs";
import Link from "next/link";
import {Home} from "react-feather";
import {ArrowLeftIcon, ArrowRightIcon, ChevronRightIcon} from "@heroicons/react/24/outline";
import Fade from "react-reveal/Fade";
import {Swiper, SwiperSlide} from "swiper/react/swiper-react";
import {Navigation} from "swiper";
import WhatWeProvideCard from "@/components/WhatWeProvideCard/WhatWeProvideCard";
import RecordsCountUp from "@/components/RecordsCountUp/RecordsCountUp";
import {FaFacebookF, FaInstagram, FaSkype, FaTwitter} from "react-icons/fa";
import Subscribe from "@/components/Subscribe/Subscribe";
import OurAdvantage from "@/components/OurAdvantage/OurAdvantage";

const Blogs = () => {
    return (
        <>
            <Head>
                <title>Blogs -Nest </title>

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
                            <span className='font-medium text-sm'>Blogs</span>
                        </li>
                    </ul>
                </BreadCrumbs>


                <Subscribe />
                <OurAdvantage/>
            </Layout>
        </>
    );
};

export default Blogs;
