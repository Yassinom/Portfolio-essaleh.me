import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Ineos from '@/components/Ineos';
import Cim from '@/components/Cim';



const Experience = () => {
    return (
        <div id="experience" className="md:max-w-[60%] max-w-[90%] mx-auto md:mt-40 mt-20">
            <motion.div initial={{ opacity: 0 }} transition={{ duration: 0.7 }} animate={{ opacity: 1, y: -20 }}>

            <div className='text-[40px] font-bold text-black dark:text-white md:mb-12 mb-8'>
                Experience
            </div>

                <Ineos />
                <div className='h-16'></div>
                <Cim />

            </motion.div>
        </div>
    );
};

export default Experience;
