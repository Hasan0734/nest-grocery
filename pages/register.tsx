import Layout from '@/components/Layout';
import OurAdvantage from '@/components/OurAdvantage/OurAdvantage';
import BreadCrumbs from '@/components/Shared/BreadCrumbs';
import Checkbox from '@/components/Shared/Checkbox';
import InputBox from '@/components/Shared/InputBox';
import RadioBtn from '@/components/Shared/RadioBtn';
import Subscribe from '@/components/Subscribe/Subscribe';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { BookOpen, Home } from 'react-feather';
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa';

const Register = () => {
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    return (
        <>
            <Head>
                <title>Login -Nest </title>

            </Head>

            <Layout>
                <BreadCrumbs>
                    <li className=' flex space-x-5 items-center'>
                        <span className='font-medium text-sm'>Register</span>
                    </li>
                </BreadCrumbs>

                <section className='py-14 md:py-28'>
                    <div className='max-w-4xl mx-auto px-4 2xl:px-0'>

                        <div className=''>
                            <form>
                                <h2 className='text-3xl sm:text-[50px] 
                                mb-3 font-bold text-gray-black'>Create an Account</h2>

                                <p
                                    className='text-[16px] text-light-gray 
                                 font-normal'>Already have an account? <Link
                                        className='text-primary hover:text-orange-light'
                                        href={'/login'}>Login</Link></p>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                                    <div className='mt-6'>

                                        <InputBox
                                            type="text"
                                            placeholder="Username *"
                                            name="userName"
                                        />
                                        <InputBox
                                            type="text"
                                            placeholder="Email *"
                                            name="email"
                                        />

                                        <InputBox
                                            type="password"
                                            placeholder="Password *"
                                            name="password"
                                        />
                                        <InputBox
                                            type="password"
                                            placeholder="Confirm Password *"
                                            name="cofirm_password"
                                        />


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

                                        <div className='mb-10 mt-4 ml-1'>

                                            <div className='mt-3 flex'>
                                                <RadioBtn
                                                    label="I am a customer"
                                                    name="role"
                                                    id="customer"
                                                />
                                            </div>


                                            <div className="mt-3 flex">
                                                <RadioBtn
                                                    label="I am a vendor"
                                                    name="role"
                                                    id="vendor"
                                                />
                                            </div>
                                        </div>

                                        <div className='flex items-center justify-between mt-3 mb-10'>
                                            <div className='flex items-center gap-1'>

                                                <Checkbox
                                                    title={'I agree to terms & Policy.'}
                                                    name={'agree'}
                                                />
                                            </div>
                                            <Link
                                                className='text-primary text-sm flex items-center gap-2'
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
                                                className=" px-9 py-3 bg-primary duration-300
                                                 hover:-translate-y-1 rounded-lg text-white font-bold">
                                                Submit & Register
                                            </button>
                                        </div>


                                        <div className='mt-8'>
                                            <p className='text-xs text-light-gray text-justify leading-5'><strong>Note</strong>:Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy</p>
                                        </div>
                                    </div>

                                    <div className='self-start 
                                    mt-6 p-5 sm:p-12 border border-gray-200 rounded-xl
                                    '>
                                        <div className='mb-3'>
                                            <button
                                                className='bg-blue-500 hover:-translate-y-[2px] duration-300 px-5 py-3 flex items-center gap-2
                                         text-white w-full text-xl font-bold rounded-lg'>
                                                <FaFacebook size={24} />
                                                <span>
                                                    Continue with Facebook
                                                </span>
                                            </button>
                                        </div>

                                        <div className='mb-3'>
                                            <button
                                                className='bg-white hover:-translate-y-[2px] duration-300 px-5 py-3 flex items-center gap-2
                                         text-gray-black w-full text-xl font-bold rounded-lg'>
                                                <img src='/assets/logo-google.svg' alt="" />
                                                <span>
                                                    Continue with Google
                                                </span>
                                            </button>
                                        </div>
                                        <div className='mb-3'>
                                            <button
                                                className='bg-gray-900 hover:-translate-y-[2px] duration-300 px-5 py-3 flex items-center gap-2
                                         text-white w-full text-xl font-bold rounded-lg'>
                                                <FaApple size={24} />
                                                <span>
                                                    Continue with Apple
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </section>

            </Layout>
        </>
    );
};

export default Register;