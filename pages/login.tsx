import Layout from '@/components/Layout';
import OurAdvantage from '@/components/OurAdvantage/OurAdvantage';
import BreadCrumbs from '@/components/Shared/BreadCrumbs';
import Checkbox from '@/components/Shared/Checkbox';
import Subscribe from '@/components/Subscribe/Subscribe';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Home } from 'react-feather';

const Login = () => {



    const code = Math.floor(1000 + Math.random() * 9000).toString();


    return (
        <>
            <Head>
                <title>Login -Nest </title>

            </Head>

            <Layout>
                <BreadCrumbs>
                    <li className=' flex space-x-5 items-center'>
                        <span className='font-medium text-sm'>Login</span>
                    </li>
                </BreadCrumbs>

                <section className='py-14 md:py-28'>
                    <div className='max-w-4xl mx-auto px-4 2xl:px-0'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                            <div className='px-6 hidden md:block'>
                                <img className='w-ful rounded-xl' src="/assets/login-1.png" alt="" />
                            </div>
                            <div className=''>
                                <form>
                                    <h2 className='text-[50px] mb-3 font-bold text-gray-black'>Login</h2>
                                    <p className='text-[16px] text-light-gray font-normal'>Don't have an account? <Link
                                        className='text-primary hover:text-orange-light'
                                        href={'/register'}>Create here</Link></p>

                                    <div className='w-full mt-6'>
                                        <input
                                            className='placeholder:text-[#838383]  w-full rounded-lg py-4 px-3 border border-gray-200 outline-none my-2'
                                            type="text"
                                            placeholder='Username or Email *' />

                                        <input
                                            className='placeholder:text-[#838383]  w-full rounded-lg py-4 px-3 border border-gray-200 outline-none my-2'
                                            type="password"
                                            placeholder='Your Password *' />

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
                                                                className='first:text-primary
                                                                 [&:nth-child(2)]:text-orange-light
                                                                  [&:nth-child(3)]:text-blue-500
                                                                  [&:nth-child(4)]:text-red-500'>
                                                                {co} {" "}
                                                            </span>
                                                        ))}

                                                </div>
                                            </div>

                                        </div>

                                        <div className='flex items-center justify-between mt-3 mb-10'>
                                            <div className='flex items-center gap-1'>
                                            
                                                <Checkbox
                                                    title={'Remember me'}
                                                    name={'remember'}     
                                                />
                                            </div>
                                            <Link
                                                className='text-light-gray text-sm'
                                                href={'/forgot-password'}
                                            >Forgot password?</Link>
                                        </div>
                                        <div>
                                            <button 
                                            className="bg-gray-black px-9 py-3 hover:bg-primary duration-300 hover:-translate-y-1 rounded-lg text-white font-bold">Log in</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    );
};

export default Login;