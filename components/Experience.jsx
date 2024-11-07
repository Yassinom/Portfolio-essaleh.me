import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Ineos from './Ineos';
import Cim from './Cim';



const Experience = () => {
    return (
        <div id="experience" className="z-[1] max-w-[60%] mx-auto mt-40">
            <motion.div initial={{ opacity: 0 }} transition={{ duration: 0.7 }} animate={{ opacity: 1, y: -20 }}>

                <div className="text-[40px] font-bold text-black dark:text-white mb-12">
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
