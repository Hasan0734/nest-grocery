
import React from 'react';
import Link from "next/link";
import {Home} from "react-feather";
import {ChevronRightIcon} from "@heroicons/react/24/outline";

const BreadCrumbs = ({children}:any) => {
    return (
        <div className='border-b py-6'>
            <div className='max-w-8xl mx-auto px-4 2xl:px-0'>

                <ul className='flex items-center gap-3'>
                    <li className=' flex space-x-3 items-center' >
                        <Link href={"/"} className="flex gap-1 items-center text-primary hover:text-orange-300">
                            <Home size={15} />
                            <span className='font-medium text-sm'>Home</span>
                        </Link>
                        <ChevronRightIcon strokeWidth={2.5} width={10} />
                    </li>
                     {children}
                </ul>

            </div>
        </div>
    );
};

export default BreadCrumbs;