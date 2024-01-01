import React from 'react';
import Head from "next/head";
import Layout from "@/components/Layout";
import BreadCrumbs from "@/components/Shared/BreadCrumbs";
import Link from "next/link";
import {Home} from "react-feather";
import {ChevronRightIcon} from "@heroicons/react/24/outline";
import BlogSidebar from "@/components/Blogs/BlogSidebar";
import Subscribe from "@/components/Subscribe/Subscribe";
import OurAdvantage from "@/components/OurAdvantage/OurAdvantage";

const BlogDetails = () => {
    return (
        <>
            <>
                <Head>
                    <title>Blogs -Nest </title>

                </Head>

                <Layout>
                    <BreadCrumbs>
                        <li className=' flex space-x-5 items-center'>
                            <Link href={"/blogs"} className="flex gap-1 items-center text-primary hover:text-orange-300">
                                <span className='font-medium text-sm'>Blogs</span>
                            </Link>
                            <ChevronRightIcon strokeWidth={2.5} width={10} />
                        </li>
                        <li className=' flex space-x-5 items-center'>
                            <span className='font-medium text-sm'>The Easy Italian Chicken Dinner</span>
                        </li>
                    </BreadCrumbs>

                    <section className={'my-10'}>
                        <div className='max-w-xl md:max-w-3xl lg:max-w-8xl mx-auto px-4 2xl:px-0'>
                            <div className='flex flex-col lg:flex-row  gap-5 xl:gap-10'>
                                <div className={'w-full px-14 '}>
                                    <div className={'text-primary-text prose-xl prose-p:text-lg prose-p:text-gray-600 prose-h3:font-semibold'}>

                                        <div className={'h-[495px]'}>
                                            <img className={'h-full rounded-2xl object-cover object-center w-full'}
                                                 src={'/assets/blogs/blog-1.png'} alt={"blog images"}/>
                                        </div>
                                        <div className={'px-4 mt-6 '}>
                                            <h3 className={''}>
                                                Helping everyone live happier, healthier lives at home through their kitchen. Kitchn is a daily food magazine on the Web celebrating life in the kitchen through home cooking and kitchen intelligence.</h3>
                                            <p>
                                                We’ve reviewed and ranked all of the best smartwatches on the market right now, and we’ve made a definitive list of the top 10 devices you can buy today. One of the 10 picks below may just be your perfect next smartwatch.</p>
                                            <p>Those top-end wearables span from the Apple Watch to Fitbits, Garmin watches to Tizen-sporting Samsung watches. There’s also Wear OS which is Google’s own wearable operating system in the vein of Apple’s watchOS – you’ll see it show up in a lot of these devices.</p>
                                            <h3>Lorem ipsum dolor sit amet cons</h3>
                                            <div className={"flex items-center justify-between max-w-full gap-10"}>
                                                <img className={'max-w-[50%]'} src={'/assets/blogs/blog-1.png'} alt={'blog'}/>
                                                <img className={'max-w-[50%]'} src={'/assets/blogs/blog-2.png'} alt={'blog'}/>

                                            </div>
                                            <p className={'font-normal'}>
                                                Tortor, lobortis semper viverra ac, molestie tortor laoreet amet euismod et diam quis aliquam consequat porttitor integer a nisl, in faucibus nunc et aenean turpis dui dignissim nec scelerisque ullamcorper eu neque, augue quam quis lacus pretium eros est amet turpis nunc in turpis massa et eget facilisis ante molestie penatibus dolor volutpat, porta pellentesque scelerisque at ornare dui tincidunt cras feugiat tempor lectus</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id enim, libero sit. Est donec lobortis cursus amet, cras elementum libero convallis feugiat. Nulla faucibus facilisi tincidunt a arcu, sem donec sed sed. Tincidunt morbi scelerisque lectus non. At leo mauris, vel augue. Facilisi diam consequat amet, commodo lorem nisl, odio malesuada cras. Tempus lectus sed libero viverra ut. Facilisi rhoncus elit sit sit.</p>
                                        </div>
                                    </div>
                                        <div className={'border-t border-gray-200 py-10 grid lg:grid-cols-2 gap-4 space-y-5 lg:space-y-0'}>
                                                <div className={' space-y-2'}>
                                                     <span className={'font-semibold underline underline-offset-4'}>Tags</span>
                                                    <ul className={'flex items-center gap-2 flex-wrap'}>
                                                        <li>
                                                            <Link href={`/blogs/tag/salad`}
                                                                  className={'flex items-center gap-2 bg-primary px-4 py-2.5 text-white rounded hover:bg-warning ' +
                                                                      'hover:text-primary-text duration-300 hover:-translate-y-1 text-sm font-semibold'}>
                                                                #Salad
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href={`/blogs/tag/salad`}
                                                                  className={'flex items-center gap-2 bg-primary px-4 py-2.5 text-white rounded hover:bg-warning ' +
                                                                      'hover:text-primary-text duration-300 hover:-translate-y-1 text-sm font-semibold'}>
                                                                #Smoothie
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>

                                            <div className={' space-y-2'}>
                                                <span className={'font-semibold whitespace-nowrap underline underline-offset-4'}>Posted In</span>

                                                <ul className={'flex items-center gap-2  flex-wrap'}>
                                                    <li>
                                                        <Link href={`/blogs/category/salad`}
                                                              className={'flex items-center gap-2 bg-primary px-4 py-2.5 text-white rounded hover:bg-warning ' +
                                                                  'hover:text-primary-text duration-300 hover:-translate-y-1 text-sm font-semibold'}>
                                                            #Breakfast
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href={`/blogs/category/salad`}
                                                              className={'flex items-center gap-2 bg-primary px-4 py-2.5 text-white rounded hover:bg-warning ' +
                                                                  'hover:text-primary-text duration-300 hover:-translate-y-1 text-sm font-semibold'}>
                                                            #Dairy Farm
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href={`/blogs/category/salad`}
                                                              className={'flex items-center gap-2 bg-primary px-4 py-2.5 text-white rounded hover:bg-warning ' +
                                                                  'hover:text-primary-text duration-300 hover:-translate-y-1 text-sm font-semibold'}>
                                                            #Salad
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href={`/blogs/category/uncategorized`}
                                                              className={'flex items-center gap-2 bg-primary px-4 py-2.5 text-white rounded hover:bg-warning ' +
                                                                  'hover:text-primary-text duration-300 hover:-translate-y-1 text-sm font-semibold'}>
                                                            #Uncategorized
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href={`/blogs/category/uncategorized`}
                                                              className={'flex items-center gap-2 bg-primary px-4 py-2.5 text-white rounded hover:bg-warning ' +
                                                                  'hover:text-primary-text duration-300 hover:-translate-y-1 text-sm font-semibold'}>
                                                            #Uncategorized
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href={`/blogs/category/uncategorized`}
                                                              className={'flex items-center gap-2 bg-primary px-4 py-2.5 text-white rounded hover:bg-warning ' +
                                                                  'hover:text-primary-text duration-300 hover:-translate-y-1 text-sm font-semibold'}>
                                                            #Uncategorized
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href={`/blogs/category/uncategorized`}
                                                              className={'flex items-center gap-2 bg-primary px-4 py-2.5 text-white rounded hover:bg-warning ' +
                                                                  'hover:text-primary-text duration-300 hover:-translate-y-1 text-sm font-semibold'}>
                                                            #Uncategorized
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href={`/blogs/category/uncategorized`}
                                                              className={'flex items-center gap-2 bg-primary px-4 py-2.5 text-white rounded hover:bg-warning ' +
                                                                  'hover:text-primary-text duration-300 hover:-translate-y-1 text-sm font-semibold'}>
                                                            #Uncategorized
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    <div className={'border-t border-gray-200 mt-5 pt-10 '}>
                                       <div className={'mx-auto max-w-4xl'}>
                                           <h2 className={'text-2xl md:text-4xl font-bold'}>Post a comment</h2>
                                           <p className={'mt-3 text-gray-600'}>Your email address will not be published.</p>

                                           <form className={'space-y-7'}>
                                               <div className={'space-y-1'}>
                                                   <label className={'text-lg block'} htmlFor={'comment'}>Leave a Reply</label>
                                                   <textarea
                                                       placeholder={'Write your comment here...'}
                                                       className={' p-4 w-full rounded-lg outline-0 border border-gray-200 focus:border-primary/30 resize-none placeholder:font-semibold placeholder:text-sm'}
                                                             rows={6} id={'comment'} name={'comment'}/>
                                               </div>
                                            <div className={'grid  sm:grid-cols-2 gap-7'}>
                                                <div className={'space-y-1'}>
                                                    <label className={'text-lg block'} htmlFor={'fullName'}>Full Name</label>
                                                    <input
                                                        placeholder={'ex. John Doe'}
                                                        className={' p-4 w-full rounded-lg outline-0 border border-gray-200 focus:border-primary/30  ' +
                                                            'placeholder:font-semibold placeholder:text-sm'}
                                                        id={'fullName'} name={'fullName'}/>
                                                </div>
                                                <div className={'space-y-1'}>
                                                    <label className={'text-lg block'} htmlFor={'email'}>Email</label>
                                                    <input
                                                        placeholder={'ex. john@example.com'}
                                                        className={' p-4 w-full rounded-lg outline-0 border border-gray-200 focus:border-primary/30  ' +
                                                            'placeholder:font-semibold placeholder:text-sm'}
                                                        id={'email'} name={'email'}/>
                                                </div>
                                            </div>
                                               <div className={'space-y-1'}>
                                                   <label className={'text-lg block'} htmlFor={'email'}>Website Url</label>
                                                   <input
                                                       placeholder={'ex. www.example.com'}
                                                       className={' p-4 w-full rounded-lg outline-0 border border-gray-200 focus:border-primary/30  ' +
                                                           'placeholder:font-semibold placeholder:text-sm'}
                                                       id={'email'} name={'email'}/>
                                               </div>
                                               <div className={'flex items-center gap-2 '}>
                                                   <input id={'permission'} name={'permission'} className={'w-5 h-6'} type={'checkbox'}/>
                                                   <label className={' text-gray-600'} htmlFor={'permission'}>Save my name, and email in this browser for the next time I comment.</label>
                                               </div>
                                               <button className={'w-full p-5 bg-primary text-white text-sm rounded-lg'}>Post Comment</button>
                                           </form>
                                       </div>
                                    </div>
                                </div>
                                <BlogSidebar/>
                            </div>
                        </div>
                    </section>

                </Layout>
            </>
        </>
    );
};

export default BlogDetails;
