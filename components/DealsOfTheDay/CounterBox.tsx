import React from 'react';
import Box from './Box';

const CounterBox = ({ days, hours, minutes, seconds, completed }: any) => {

    return (
        <div className='flex justify-between gap-2 px-0 2xl:px-7 mb-4'>
            <Box name="Days" value={days} />
            <Box name="Hours" value={hours} />
            <Box name="Mins" value={minutes} />
            <Box name="Sec" value={seconds} />


        </div>
    );
};

export default CounterBox;