import React from 'react';

const SearchInput = () => {
    return (
        <>
            <form className='border-2 rounded border-[#3BB77E]/80 pr-1  w-full flex'>
                <input className='w-full ml-2 mr-1 py-[10px] border-none outline-none bg-transparent' type="text" placeholder='Search for products...' />
                <input className='bg-[#3BB77E] cursor-pointer font-semibold my-1 px-5 rounded text-white' type="submit" value="Search" />
            </form>   
        </>
    );
};

export default SearchInput;