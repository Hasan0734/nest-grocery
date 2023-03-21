import Link from 'next/link';
import React from 'react';
import { Facebook, PhoneCall } from 'react-feather';
import { FaFacebookF, FaInstagram, FaSkype, FaTwitter } from 'react-icons/fa';
import Address from './Address';
import AppsInstall from './AppsInstall';
import FooterMenu from './FooterMenu';


const footerMenu = [
    {
        id: 1,
        title: "Company",
        items: [
            { id: 1, name: 'About us', url: '/about-us' },
            { id: 2, name: 'Delivery Information', url: '/about-us' },
            { id: 3, name: 'Privacy Policy', url: '/privacy-policy' },
            { id: 4, name: 'Terms & Conditions', url: '/terms-and-conditions' },
            { id: 5, name: 'Contact Us', url: '/contact-us' },
            { id: 6, name: 'Support Center', url: '/support-center' },
            { id: 7, name: 'Careers', url: '/careers' },
        ]
    },
    {
        id: 2,
        title: "Account",
        items: [
            { id: 1, name: 'Sign In', url: '/signin' },
            { id: 2, name: 'View Cart', url: '/view-cart' },
            { id: 3, name: 'My Wishlist', url: '/my-wishlist' },
            { id: 4, name: 'Track My Order', url: '/track-my-order' },
            { id: 5, name: 'Help Ticket', url: '/help-ticket' },
            { id: 6, name: 'Shipping Details', url: '/shipping-details' },
            { id: 7, name: 'Compare products', url: '/compare-products' },
        ]
    },
    {
        id: 3,
        title: "Corporate",
        items: [
            { id: 1, name: 'Become a Vendor', url: '/become-a-vendor' },
            { id: 2, name: 'Affiliate Program', url: '/affiliate-program' },
            { id: 3, name: 'Farm Business', url: '/farm-business' },
            { id: 4, name: 'Farm Careers', url: '/farm-careers' },
            { id: 5, name: 'Our Suppliers', url: '/our-suppliers' },
            { id: 6, name: 'Accessibility', url: '/accessibility' },
            { id: 7, name: 'Promotions', url: '/promotions' },
        ]
    },
    {
        id: 4,
        title: "Popular",
        items: [
            { id: 1, name: 'Milk & Flavoured Milk', url: '/milk-and-flavoured-milk' },
            { id: 2, name: 'Butter and Margarine', url: '/butter-and-margarine' },
            { id: 3, name: 'Eggs Substitutes', url: '/eggs-substitutes' },
            { id: 4, name: 'Marmalades', url: '/marmalades' },
            { id: 5, name: 'Sour Cream and Dips', url: '/sour-cream-and-dips' },
            { id: 6, name: 'Tea & Kombucha', url: '/tea-and-kombucha' },
            { id: 7, name: 'Cheese', url: '/cheese' },
        ]
    },
]

const Footer = () => {
    return (
        <footer className=''>
            <section className='border-b border-[#3bb77e]'>
                <div className=' max-w-8xl mx-auto px-4 2xl:px-0  my-12'>
                    <div
                        className='grid grid-cols-1  xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-[320px_auto_auto_auto_auto_auto] gap-4'>

                        <Address />

                        {footerMenu.map((menu) => <FooterMenu key={menu.id} menu={menu} />)}

                        <AppsInstall />
                    </div>
                </div>
            </section>


            <section className='py-6'>
                <div className='max-w-8xl mx-auto px-4 2xl:px-0 '>
                    <div className='grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4'>
                        <div className='text-gray-500 text-[16px] font-normal leading-7 text-center xs:text-start'>
                            ©{new Date().getFullYear()} Nest - React template.
                            <br />
                            All rights reserved.
                        </div>
                        <div className='hidden lg:flex gap-x-2 items-center'>
                            <PhoneCall size={30} className='text-gray-400 ' />
                            <div>
                                <a className='text-[#3bb77e] hover:text-yellow-500  mb-1 text-2xl block font-bold' href='tel:01XXXXX'>01XXXXXXXX</a>
                                <span className='text-sm'>Working 8:00 - 22:00</span>
                            </div>
                        </div>
                        <div className='hidden lg:flex gap-x-2 items-center'>
                            <PhoneCall size={30} className='text-gray-400 ' />
                            <div>
                                <a className='text-[#3bb77e] hover:text-yellow-500 mb-1 text-2xl block font-bold' href='tel:01XXXXX'>01XXXXXXXX</a>
                                <span className='text-sm'>24/7 Support Center</span>
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex items-center gap-x-2 justify-center sm:justify-end'>
                                <span className='text-[16px] font-bold'>Follow Us</span>
                                <ul className='flex gap-x-2 items-center'>
                                    <li>
                                        <a
                                            href='https://facebook.com/'
                                            target={"_blank"}
                                            className='bg-[#3bb77e] rounded-full w-[30px] h-[30px] flex items-center justify-center'>
                                            <FaFacebookF className='text-white' size={15} />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href='https://twitter.com/'
                                            target={"_blank"}
                                            className='bg-[#3bb77e] rounded-full w-[30px] h-[30px] flex items-center justify-center'>
                                            <FaTwitter className='text-white' size={15} />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href='https://twitter.com/'
                                            target={"_blank"}
                                            className='bg-[#3bb77e] rounded-full w-[30px] h-[30px] flex items-center justify-center'>
                                            <FaSkype className='text-white' size={15} />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href='https://twitter.com/'
                                            target={"_blank"}
                                            className='bg-[#3bb77e] rounded-full w-[30px] h-[30px] flex items-center justify-center'>
                                            <FaInstagram className='text-white' size={15} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <p className='mt-2 text-[16px] text-center sm:text-right leading-7 text-gray-600'>Up to 15% discount on your first subscribe</p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;