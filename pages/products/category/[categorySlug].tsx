import React from 'react';
import Layout from "@/components/Layout";
import Container from "@/components/Shared/Container";
import Head from "next/head";
import BreadCrumbs from "@/components/Shared/BreadCrumbs";
import Link from "next/link";
import {ChevronRightIcon} from "@heroicons/react/24/outline";

const CategoryByProducts = () => {
    return (
       <>
           <Head>
               <title>Category by product</title>
           </Head>

           <Layout>
               <BreadCrumbs>
                   <li className='flex space-x-3 items-center' >
                       <Link href={"/shop"} className="flex gap-1 items-center text-primary hover:text-orange-300">

                           <span className='font-medium text-sm'>Shop</span>
                       </Link>
                       <ChevronRightIcon strokeWidth={2.5} width={10} />
                   </li>
                   <li className=' flex space-x-5 items-center'>
                       <span className='font-medium text-sm'>Category Name</span>
                   </li>
               </BreadCrumbs>
               <Container>
                   <h2>CategoryByProducts</h2>
               </Container>
           </Layout></>
    );
};

export default CategoryByProducts;
