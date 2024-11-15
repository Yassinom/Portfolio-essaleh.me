// import React from 'react';
// import { motion } from 'framer-motion';

// import { FaCalendarAlt } from "react-icons/fa";
// import { BsFillMortarboardFill } from "react-icons/bs";


// const Education = () => {
//     return (
//         <motion.div 
//             id='education'
//             className='md:max-w-[60%] max-w-[90%] mx-auto mt-20'
//             initial={{ opacity: 0 }} 
//             transition={{ duration: 0.7 }} 
//             animate={{opacity: 1, y: -20}} 
//         >
            
//             <div className='text-[40px] font-bold text-black dark:text-white mb-12'>
//                 Education
//             </div>

//             <div className='flex md:flex-row flex-col rounded-[30px] p-4 bg-slate-500 bg-opacity-20 shadow-md text-black dark:text-white'>
//                 <div className="md:w-1/3 w-full md:mr-4 p-4 rounded-[30px] bg-[#8997ab] dark:bg-[#323c4a] bg-opacity-60 flex flex-col justify-center cursor-pointer" onClick={() => window.open('https://ensa-marrakech.uca.ma/', '_blank')}>
//                     <img src="https://ensa-marrakech.uca.ma/wp-content/uploads/2024/10/cropped-new_logo-1-1-1024x347.png" alt="ENSA of Marrakech" />
//                 </div>


//                 <div className='flex flex-col justify-between md:w-[70%] w-full px-[1%] pt-1 md:text-start text-center'>
//                     <div>
//                         <div className='text-2xl font-bold'>Cadi Ayyad University, Marrakech, Morocco</div>
//                         <div className='md:text-[22px] text-[18px] font-bold text-gray-700 dark:text-[#727780]'>National School of Applied Sciences of Marrakech</div>
//                     </div>
//                     <div className='flex justify-between mt-[3%]'>
//                         <div className='flex flex-col items-center py-2 rounded-[20px] bg-slate-500 bg-opacity-20 shadow-md px-3'>
//                             <FaCalendarAlt className='text-[30px] mt-1 dark:text-[#f1949d]'/>
//                             <div className='md:text-xl text-[13px] pt-6'>2020 - 2025</div>
//                         </div>

//                         <div className='flex flex-col items-center py-2 rounded-[20px] bg-slate-500 bg-opacity-20 shadow-md px-3 mx-2'>
//                             <BsFillMortarboardFill className='text-[35px] dark:text-[#f1949d]'/>
//                             <div className='md:text-xl text-[14px] '>Engineering degree:</div>
//                             <div className='md:text-xl text-[13px] text-gray-700 dark:text-[#9aa0ac] font-bold'>Cyber Defense and Embedded Telecommunications Systems</div>
//                         </div>
//                     </div>
                    
                    
//                 </div>
//             </div>

//         </motion.div>
//     );
// };

// export default Education;













import { AnimatePresence } from "motion/react";
import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from "react-icons/fa";
import { BsFillMortarboardFill } from "react-icons/bs";

const Education = () => {
    return (
        <motion.div 
            id='education'
            className='md:max-w-[60%] max-w-[90%] mx-auto mt-20'
            initial={{ opacity: 0 }} 
            transition={{ duration: 0.7 }} 
            animate={{ opacity: 1, y: -20 }} 
        >
            <h2 className='text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center'>
                Education
            </h2>

            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300'>
                <div className="p-6 grid md:grid-cols-[250px_1fr] gap-6 items-center">
                    {/* Logo Section */}
                    <div 
                        className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-xl p-4 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                        onClick={() => window.open('https://ensa-marrakech.uca.ma/', '_blank')}
                    >
                        <img 
                            src="https://ensa-marrakech.uca.ma/wp-content/uploads/2024/10/cropped-new_logo-1-1-1024x347.png" 
                            alt="ENSA of Marrakech" 
                            className="max-h-24 object-contain"
                        />
                    </div>

                    {/* Education Details */}
                    <div className='space-y-4'>
                        <h3 className='text-xl font-semibold text-gray-800 dark:text-white'>
                            Cadi Ayyad University, Marrakech, Morocco
                        </h3>
                        <p className='text-lg font-medium text-gray-600 dark:text-[#727780]'>
                            National School of Applied Sciences of Marrakech
                        </p>

                        <div className='flex flex-wrap gap-4 items-center mt-4'>
                            <div className='flex items-center gap-2 bg-blue-50 dark:bg-blue-900 px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105'>
                                <FaCalendarAlt className='text-blue-500 dark:text-blue-400 text-[30px]' />
                                <span className='text-sm text-gray-700 dark:text-gray-300'>2020 - 2025</span>
                            </div>

                            <div className='flex items-center gap-2 bg-blue-50 dark:bg-blue-900 px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105'>
                                <BsFillMortarboardFill className='text-blue-500 dark:text-blue-400 text-[35px]' />
                                <div className='flex flex-col text-sm text-gray-700 dark:text-gray-300'>
                                    <span>Engineering Degree:</span>
                                    <span className='font-bold'>Cyber Defense and Embedded Telecommunications Systems</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Education;