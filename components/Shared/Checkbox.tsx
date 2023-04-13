import React from 'react';
import { Check } from 'react-feather';


const Checkbox = ({ title = "", name = "" }: any) => {


    return (
        <>
            <label
                className='cursor-pointer relative flex items-center gap-2'
                htmlFor={name}>
                <input type="checkbox"
                    className={`peer  overflow-hidden appearance-none rounded-sm  w-[17px] h-[17px] border border-[#ced4da] checked:border-green-black checked:bg-green-black `}

                    name={name} id={name} />
                <Check
                    strokeWidth={2.5}
                    className='peer-checked:opacity-100 opacity-0 w-[15px] text-white absolute left-[1px] -top-[2px]' />

                <span className='text-sm font-medium'>{title}</span>
            </label>
        </>
    );
};

export default Checkbox;