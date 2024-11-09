import React from 'react';
import { motion } from 'framer-motion';

import { FaCalendarAlt } from "react-icons/fa";
import { BsFillMortarboardFill } from "react-icons/bs";


const Education = () => {
    return (
        <motion.div 
            id='education'
            className='max-w-[60%] mx-auto mt-36'
            initial={{ opacity: 0 }} 
            transition={{ duration: 0.7 }} 
            animate={{opacity: 1, y: -20}} 
        >
            
            <div className='text-[40px] font-bold text-black dark:text-white mb-12'>
                Education
            </div>

            <div className='flex rounded-[30px] p-4 bg-slate-500 bg-opacity-20 shadow-md text-black dark:text-white'>
                <div className="w-1/3 mr-4 p-4 rounded-[30px] bg-[#8997ab] dark:bg-[#323c4a] bg-opacity-60 flex flex-col justify-center">
                    <img src="https://ensa-marrakech.uca.ma/wp-content/uploads/2024/10/cropped-new_logo-1-1-1024x347.png" alt="ENSA of Marrakech" />
                </div>


                <div className='flex-col w-[70%]  px-[1%] pt-1 '>
                    <div className='text-2xl font-bold'>Cadi Ayyad University, Marrakech, Morocco</div>
                    <div className='text-2xl font-bold text-gray-700 dark:text-gray-400'>National School of Applied Sciences of Marrakech</div>

                    <div className='flex justify-between mt-[3%] '>
                        <div className='flex flex-col items-center py-2 rounded-[20px] bg-slate-500 bg-opacity-20 shadow-md px-3'>
                            <FaCalendarAlt className='text-[40px] mt-1 dark:text-[#f1949d]'/>
                            <div className='text-xl pt-6'>2020 - 2025</div>
                        </div>

                        <div className='flex flex-col items-center py-2 rounded-[20px] bg-slate-500 bg-opacity-20 shadow-md px-3 mx-2'>
                            <BsFillMortarboardFill className='text-[40px] dark:text-[#f1949d]'/>
                            <div className='text-xl'>Engineering degree</div>
                            <div className='text-[18px]'>Cyber Defense and Embedded Telecommunications Systems</div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>

        </motion.div>
    );
};

export default Education;