import React from 'react';
import { motion } from 'framer-motion'
const Fade = require("react-reveal/Fade")
const AdvantageCard = ({ advantage }: any) => {
    return (
        <>
            <Fade bottom duration={advantage.duration}>
                <div

                    // initial={
                    //     {
                    //         opacity: 0.4,
                    //         y: advantage.offectY
                    //     }
                    // }
                    // whileInView={
                    //     {
                    //         opacity: 1,
                    //         y: 0
                    //     }
                    // }

                    // viewport={{ once: true }}
                    // transition={{
                    //     delay: 0.3,
                    //     y: { duration: 0.5 },
                    // }}


                    className='flex gap-5 items-center advantage_card bg-blue-light p-5 rounded-lg  xl:last:hidden'>
                    <div>
                        <img className='w-[60px] advantage_image' src={advantage.icon} alt="" />
                    </div>
                    <div>
                        <h2
                            className='text-[18px] font-semibold '>
                            {advantage.title}
                        </h2>
                        <span className='text-[#7e7e7e]'>Order $50 or more</span>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default AdvantageCard;