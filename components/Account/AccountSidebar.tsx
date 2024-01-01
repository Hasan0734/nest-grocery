import React from 'react';
import Link from "next/link";
import { MdLogout } from "react-icons/md";
import {cn} from "@/utls/utils";
import {LiaSlidersHSolid} from "react-icons/lia";
import { PiBagThin } from "react-icons/pi";
import {CiLocationOn} from "react-icons/ci";
import {LuUser} from "react-icons/lu";
import { TbShoppingCartCopy } from "react-icons/tb";

const menus = [
    {id:1, title: 'Dashboard', icon: LiaSlidersHSolid, tab: 'dashboard'},
    {id:2, title: 'Orders', icon: PiBagThin, tab: 'orders'},
    {id:3, title: 'Track Your Orders', icon: TbShoppingCartCopy, tab: 'track_orders'},
    {id:4, title: 'My Address', icon: CiLocationOn, tab: 'my_address'},
    {id:5, title: 'Account Details', icon: LuUser, tab: 'account_details'},
]
const AccountSidebar = () => {
    return (
        <div className={'md:col-span-2'}>
            <ul className={'space-y-2'}>
                {menus.map(item => (
                    <li key={item.id}>
                        <Link href={`?tab=${item.tab}`}
                              className={cn('flex items-center gap-2 text-gray-500 hover:text-white font-semibold border border-gray-200 hover:bg-primary hover:text-white py-4 px-4 rounded-xl')}>
                            <item.icon size={21}/>
                            <span>{item.title}</span>
                        </Link>
                    </li>
                ))}
                <li >
                    <Link href={'/my-account'}
                          className={cn('flex items-center gap-2 text-gray-500 hover:text-white font-semibold border border-gray-200 hover:bg-primary hover:text-white py-4 px-4 rounded-xl')}>
                        <MdLogout size={21}/>
                        <span>Sign out</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default AccountSidebar;
