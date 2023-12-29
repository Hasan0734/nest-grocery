import React from 'react';
import RangeSlider from "@/components/Shared/RangeSlider";
import Checkbox from "@/components/Shared/Checkbox";
import {FunnelIcon} from "@heroicons/react/24/outline";

const FilterByPrice = () => {
    return (
        <>
            <div className="mt-8 border border-gray-200 rounded-2xl shadow-[8px_5px_10px_rgba(0,0,0,0.05)] p-5 lg:p-8
             bg-[url('/assets/fillter-widget-bg.png')] bg-no-repeat bg-right-bottom bg-[length:60%]">
                <h1
                    className='text-gray-black text-2xl font-bold
                                border-b border-gray-200 pb-4 relative before:absolute
                                before:w-20 before:left-0 before:bottom-0
                                before:bg-primary before:h-[1px]'>
                    Filter by price
                </h1>

                <div className=''>

                    <RangeSlider
                        min={0}
                        max={2000}
                        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                    />

                    <div className="mt-6">
                        <h4 className='text-sm text-gray-black font-extrabold'>Color</h4>

                        <div className='my-3 flex items-center gap-2'>
                            <Checkbox
                                title={'Red (10)'}
                                name={'red'}
                            />
                        </div>
                        <div className='my-3 flex items-center gap-2'>
                            <Checkbox
                                title={'Green (10)'}
                                name={'green'}
                            />
                        </div>
                        <div className='my-3 flex items-center gap-2'>
                            <Checkbox
                                title={'Blue (52)'}
                                name={'blue'}
                            />
                        </div>

                    </div>

                    <div className="mt-6">
                        <h4 className='text-sm text-gray-black font-extrabold'>Item Condition</h4>
                        <div className='my-3 flex items-center gap-2'>
                            <Checkbox
                                title={'New (1506)'}
                                name={'new'}
                            />

                        </div>
                        <div className='my-3 flex items-center gap-2'>

                            <Checkbox
                                title={'Refurbished (27)'}
                                name={'refurbished'}
                            />
                        </div>
                        <div className='my-3 flex items-center gap-2'>
                            <Checkbox
                                title={'Used (20)'}
                                name={'used'}
                            />
                        </div>


                    </div>

                    <div className='mt-4'>
                        <button className='rounded-md text-white flex items-center
                                         gap-1 pl-6 hover:pl-8 duration-300 hover:bg-orange-light pr-4 py-[10px] bg-primary text-sm'>
                            <FunnelIcon className='w-4 h-4' strokeWidth={2} />
                            <span className='font-bold'>Filter</span>
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default FilterByPrice;
