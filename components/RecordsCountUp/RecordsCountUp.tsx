import React from 'react';
import CountUp from 'react-countup';

const RecordsCountUp = ({records}:any) => {
    return (
        <>
            <div id='item.id' className='text-center'>
                <h2 className='text-[72px] leading-[74px] font-bold text-white'>
                    <CountUp
                        end={records.total}
                        suffix="+"
                    />
                </h2>
                <div className='text-2xl font-bold text-white'>
                    {records.name}
                </div>
            </div>
        </>
    );
};

export default RecordsCountUp;