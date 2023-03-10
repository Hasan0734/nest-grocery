import React from 'react';

const SecondHeader = () => {
    return (
        <div className='border border-gray-200'>
            <div className='container mx-auto py-8'>
                <div className='grid grid-cols-2 gap-8'>
                    <div className='flex space-x-16 justify-center items-center'>
                        <div>
                            <img className='w-64' src='/assets/logo.png' />
                        </div>
                        <form className='border-2 rounded border-[#3BB77E]/80 pr-1  w-full flex'>
                            <input className='w-full ml-2 mr-1 py-[10px] border-none outline-none' type="text" placeholder='Search for products...' />
                            <input className='bg-[#3BB77E] cursor-pointer font-semibold my-1 px-5 rounded text-white' type="submit" value="Search" />
                        </form>
                    </div>
                    <div className='flex gap-5'>
                        <div className='flex items-center'>
                            <button className='border 
                            hover:-translate-y-1 duration-200 border-gray-200
                             drop-shadow-[0_10px_6px_rgba(0,0,0,0.05)] bg-white px-3 py-[6px] rounded flex items-center space-x-5'>
                                <span className='text-[#3BB77E]'>Became Ventor</span>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24"
                                    strokeWidth={1.5} stroke="currentColor"
                                    className="w-5 h-5 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                        </div>
                        <div>
                            <h1>hello wrold</h1>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default SecondHeader;