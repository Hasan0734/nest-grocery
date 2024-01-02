import React from 'react';
import Head from "next/head";
import Layout from "@/components/Layout";
import BreadCrumbs from "@/components/Shared/BreadCrumbs";

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            
            <Layout>
                <BreadCrumbs>
                    <li className=' flex space-x-5 items-center'>
                        <span className='font-medium text-sm'>Contact</span>
                    </li>
                </BreadCrumbs>
            </Layout>
        </>
    );
};

export default Contact;
