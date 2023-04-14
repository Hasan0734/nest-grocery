import React from 'react';

const InputBox = ({ type, placeholder, name }: any) => {
    return (
        <>
            <input
                className='placeholder:text-[#838383]  
                w-full rounded-lg py-4 px-3 border border-gray-200 outline-none my-2'
                type={type}
                name={name}
                placeholder={placeholder} />
        </>
    );
};

export default InputBox;