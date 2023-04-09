import Layout from '@/components/Layout';
import OurAdvantage from '@/components/OurAdvantage/OurAdvantage';
import BreadCrumbs from '@/components/Shared/BreadCrumbs';
import Subscribe from '@/components/Subscribe/Subscribe';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { BookOpen, Home } from 'react-feather';

const FortgotPassword = () => {
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    return (
        <>
            <Head>
                <title>Nest - Grocery Store SPA Website</title>
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
                            <span className='font-medium text-sm'>Forgot Password</span>
                        </li>
                    </ul>
                </BreadCrumbs>
                <section className='py-14 md:py-28'>
                    <div className='max-w-lg mx-auto px-4 sm:px-0'>
                        <form className=''>
                            <div>
                                <img className='w-[85px] h-[85px] mb-5' src="/assets/forgot_password.svg" alt="" />

                                <h2 className='text-[40px] mb-3 font-bold text-gray-black'>Forgot your password?</h2>

                                <p className='text-[16px] font-medium text-light-gray leading-7'>Not to worry, we got you! Let's get you a new password. Please enter your email address or your Username</p>

                            </div>
                            <div className='mt-6'>
                                <input
                                    className='placeholder:text-[#838383]  w-full rounded-lg py-4 px-3 border border-gray-200 outline-none my-2'
                                    type="text"
                                    placeholder='Username or Email *' />

                                <div className='flex  justify-start md:justify-between items-center my-2 gap-4'>

                                    <input

                                        className='placeholder:text-[#838383] rounded-lg py-4 px-3
                                            border border-gray-200 outline-none '
                                        type="text"
                                        placeholder='Security code *' />

                                    <div className='bg-[#BCE3C9] px-4 xs:px-10 py-4 rounded-lg'>
                                        <div className='text-2xl font-bold '>
                                            {code
                                                .split('')
                                                .map(co => (
                                                    <span
                                                        className='
                                                        first:text-green-black
                                                        [&:nth-child(2)]:text-orange-light
                                                        [&:nth-child(3)]:text-blue-500
                                                        [&:nth-child(4)]:text-red-500'>
                                                        {co} {" "}
                                                    </span>
                                                ))}

                                        </div>
                                    </div>

                                </div>

                                <div className='flex items-center justify-between mt-8 mb-10'>
                                    <div className='flex items-center gap-1'>
                                        <input
                                            className='focus:ring-0 checked:text-pink-500 focus:ring-offset-0 bg-gray-300 border-2 border-gray-400 p-2 md:p-3 cursor-pointer'
                                            type="checkbox"
                                            name=""
                                            id="remember" />
                                        <label
                                            className='text-sm'
                                            htmlFor="remember"
                                        >I agree to terms & Policy.
                                        </label>
                                    </div>
                                    <Link
                                        className='text-green-black text-sm flex items-center gap-2'
                                        href={'/forgot-passwrod'}
                                    >
                                        <BookOpen size={23} />
                                        <span>
                                            Learn more
                                        </span>
                                    </Link>
                                </div>

                                <div>
                                    <button
                                        className="bg-gray-black px-9 py-3 hover:bg-green-black duration-300 hover:-translate-y-1 rounded-lg text-white font-bold">Reset password</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </section>

                <Subscribe />
                <OurAdvantage />
            </Layout>
        </>
    );
};

export default FortgotPassword;