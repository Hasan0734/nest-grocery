import Link from 'next/link';
import React from 'react';

const FooterMenu = ({ menu }: any) => {
    return (
        <>
            <div className="pt-4 p-2">
                <h3 className='text-[#253d4e] text-[24px] font-bold'>{menu.title}</h3>
                <ul>
                    {menu.items.map((item: any) => (<li key={item.id} className="my-2">
                        <Link
                            href={item.url}
                            className="hover:text-primary font-medium text-[#253d4e] text-sm">
                            {item.name}
                        </Link>
                    </li>))}
                </ul>
            </div>
        </>
    );
};

export default FooterMenu;