import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

const CategoryListBox = ({ category }: any) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const subRef: any = React.useRef()
    return (
        <>
            <li className=''>
                <div className='border border-gray-200 hover:border-primary p-2 rounded
             flex justify-between items-center hover:shadow-[0_8px_10px_rgba(0,0,0,0.05)] duration-300'>
                    <Link href={`/`} className='flex gap-2 items-center'>
                        <img
                            className='w-[30px] ' src={category.icon} alt="" />
                        <h6
                            className='text-[15px] text-gray-black
                     hover:text-primary font-medium'>{category.name}</h6>
                    </Link>
                    <div className='flex items-center gap-2'>
                        {category.sub?.length > 0 && <ChevronDownIcon onClick={() => setIsOpen(!isOpen)} className='border cursor-pointer rounded-full p-[4px]' width={24} />}

                        <span className='bg-primary text-white text-xs rounded-full px-2 py-[3px] block text-center align-middle' >7</span>
                    </div>
                </div>

                {/* sub category */}

                {category.sub?.length > 0 && (
                    <ul
                    ref={subRef}
                        className={` overflow-hidden transition-all duration-500
                     ${isOpen ? 'my-2' : ''}`}
                        style={{height: isOpen ? `${subRef.current?.scrollHeight}px` : '0px'}}
                    >
                        {category.sub?.map((sub: any) => <li
                            key={sub.id}
                            className={`p-2 flex  justify-between items-center duration-300 my-4 `}>
                    
                            <Link href={`/`} className='flex gap-2 items-center'>
                                <img
                                    className='w-[30px] ' src={sub.icon} alt="" />
                                <h6
                                    className='text-[15px] text-gray-black
                             hover:text-primary font-medium'>{sub.name}</h6>
                            </Link>

                            <span className='bg-primary text-white text-xs rounded-full px-2 py-[3px] block text-center align-middle' >7</span>

                        </li>)}
                    </ul>)}

            </li>
        </>
    );
};

export default CategoryListBox;