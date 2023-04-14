import React from 'react';

const RadioBtn = ({ label, name, id }: any) => {
    return (
        <>
            <label
                htmlFor={id}
                className='flex items-center cursor-pointer'
            >
                <input
                    className='appearance-none peer'
                    type="radio"
                    name={name}
                    id={id} />
                <div className='peer-checked:bg-green-black  w-3 h-3 rounded-full ring-1 peer-checked:ring-green-black  ring-[#ced4da] ring-offset-2 inline-block'>

                </div>
                <span className='text-sm text-black font-semibold ml-3'>{label}</span>
            </label>
        </>
    );
};

export default RadioBtn;