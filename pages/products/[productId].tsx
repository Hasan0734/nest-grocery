import React from 'react';
import Layout from "@/components/Layout";
import Container from "@/components/Shared/Container";
import BreadCrumbs from "@/components/Shared/BreadCrumbs";
import Link from "next/link";
import {Home} from "react-feather";
import {ChevronRightIcon} from "@heroicons/react/24/outline";
import ShopCategories from "@/components/shop/ShopCategories/ShopCategories";
import ShopTopRatedProduct from "@/components/shop/ShopTopRatedProduct/ShopTopRatedProduct";
import ShopTags from "@/components/shop/ShopTags/ShopTags";
import ProductDetails from "@/components/ProductDetails/ProductDetails";

const ProductById = () => {
    return (
       <Layout>
           <BreadCrumbs>
               <li className='flex space-x-3 items-center' >
                   <Link href={"/shop"} className="flex gap-1 items-center text-primary hover:text-orange-300">

                       <span className='font-medium text-sm'>Shop</span>
                   </Link>
                   <ChevronRightIcon strokeWidth={2.5} width={10} />
               </li>
               <li className=' flex space-x-5 items-center'>
                   <span className='font-medium text-sm'>product name</span>
               </li>
           </BreadCrumbs>
           <Container className={'mt-10'}>
               <div className='flex flex-col lg:flex-row  gap-5 xl:gap-10'>
                  <ProductDetails/>
                   <div className='w-full lg:max-w-[350px] pr-0 lg:pr-4 space-y-12'>
                       <ShopCategories />
                       <ShopTopRatedProduct />
                       <ShopTags/>
                   </div>
               </div>
           </Container>
       </Layout>
    );
};

export default ProductById;
