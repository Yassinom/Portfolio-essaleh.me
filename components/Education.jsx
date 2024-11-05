import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <div id="skills" className='max-w-[60%] mx-auto mt-20'>
            <motion.div initial={{ opacity: 0 }} transition={{ duration: 0.7 }} animate={{opacity: 1, y: -20}} >
                
                <div className='text-[40px] font-bold text-black dark:text-white mb-12'>
                    Education
                </div>

                <div className='border rounded-[60px]'>
                    
                </div>

            </motion.div>
        </div>
    );
};

export default Education;