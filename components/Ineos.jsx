// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaCalendarAlt } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
// import { IoIosArrowDropdown } from "react-icons/io";
// import { VscDebugBreakpointData } from "react-icons/vsc";

// const Ineos = () => {
//     const [rotated, setRotated] = useState(false);

//     const rotateArrow = () => { setRotated(!rotated); };

//     return (
//                 <div className={`border ${rotated ? ' border-white' : ' border-transparent'} transition-all duration-200 rounded-[30px] p-4 bg-slate-500 bg-opacity-20 shadow-md text-black dark:text-white`}>
//                     <div className="flex md:flex-row flex-col">

//                         <a href="https://ineos.ma/" target="_blank" className="md:w-1/3 w-full mr-4 px-3 rounded-[30px] bg-[#8997ab] dark:bg-[#323c4a] bg-opacity-60 flex flex-col justify-center hover:cursor-pointer">
//                             <img src="images/logo_ineos-no-bg.png" alt="INEOS"/>
//                         </a>

//                         <div className="flex flex-col justify-between md:w-[70%] w-full px-[1%] pt-1 md:text-left text-center">
//                             <div>

//                             <div className="md:text-3xl text-[26px] font-bold">INEOS / CYBERORCES</div>
//                             <div className="md:text-2xl text-[16px] text-gray-700 dark:text-gray-400">Network Security Engineer - Internship</div>
//                             </div>
//                             <div className="flex justify-between items-center mt-[3%] md:gap-0 gap-2">
//                                 <div className="flex md:flex-row flex-col text-center items-center px-3 py-2 rounded-[20px] bg-slate-500 bg-opacity-20 shadow-md">
//                                     <FaCalendarAlt className="text-[20px] md:mr-3 mb-1  dark:text-[#f1949d]" />
//                                     <div className="md:text-[16px] text-[13px]">July 2024 - September 2024</div>
//                                 </div>

//                                 <div className="flex md:flex-row flex-col text-center items-center px-3 py-2 rounded-[20px] bg-slate-500 bg-opacity-20 shadow-md">
//                                     <FaLocationDot className="text-[23px] md:mr-3 mb-1 dark:text-[#f1949d]" />
//                                     <div className="md:text-[16px] text-[13px]">Casablanca, Morocco</div>
//                                 </div>

//                                 <div onClick={rotateArrow}>
//                                     <IoIosArrowDropdown
//                                         className={`text-[40px] hover:bg-slate-400 hover:bg-opacity-30 rounded-full hover:cursor-pointer transition-all duration-300 ${
//                                             rotated ? 'rotate-180' : 'rotate-0'
//                                         }`}
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {rotated && (
//                         <>
//                             <hr className="my-4 border-t border-gray-300 dark:border-gray-600" />
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.3 }}
//                                 className="overflow-hidden mt-4 p-4 bg-[#8997ab] dark:bg-[#5a626e] dark:bg-opacity-60 bg-opacity-60 rounded-[10px] shadow-md "
//                             >
//                                 <p className="md:text-[30px] text-[20px] font-bold text-gray-800 mb-2 dark:text-white">Key Responsibilities:</p>

//                                 <ul className="text-gray-700 dark:text-gray-400 md:text-[20px] ">
//                                     <motion.li
//                                         initial={{ opacity: 0 }}
//                                         animate={{ opacity: 1 }}
//                                         transition={{ delay: 0.3 }}
//                                         className="flex items-center mb-2"
//                                     >
//                                         <VscDebugBreakpointData className="mr-2 md:text-lg text-xl" />
//                                         <span className='md:text-[20px] text-[15px]'>Gained expertise in network security and virtual infrastructure design.</span>
//                                     </motion.li>
//                                     <motion.li
//                                         initial={{ opacity: 0 }}
//                                         animate={{ opacity: 1 }}
//                                         transition={{ delay: 0.4 }}
//                                         className="flex items-center mb-2"
//                                     >
//                                         <VscDebugBreakpointData className="mr-2 md:text-lg text-xl" />
//                                         <span className='md:text-[20px] text-[15px]'>Worked with VLANs, VPNs on FortiGate alongside Cisco devices.</span>
//                                     </motion.li>
//                                     <motion.li
//                                         initial={{ opacity: 0 }}
//                                         animate={{ opacity: 1 }}
//                                         transition={{ delay: 0.5 }}
//                                         className="flex items-center"
//                                     >
//                                         <VscDebugBreakpointData className="mr-2 md:text-lg text-xl" />
//                                         <span className='md:text-[20px] text-[15px]'>Integrated SD-WAN for improved network performance and redundancy.</span>
//                                     </motion.li>
//                                 </ul>
//                             </motion.div>
//                         </>
//                     )}
//                 </div>
            
//     );
// };

// export default Ineos;























import { AnimatePresence } from "motion/react"
import React, { useState } from 'react';
import { motion} from 'framer-motion';
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { HiBadgeCheck } from "react-icons/hi";

const Ineos = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <div className="bg-gray-300 dark:bg-gray-800/80 rounded-[30px] shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300">
            <div className="p-6 grid md:grid-cols-[250px_1fr] gap-6 items-center">
                {/* Logo Section */}
                <a 
                    href="https://ineos.ma/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-xl p-4 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                    <img 
                        src="images/logo_ineos-no-bg.png" 
                        alt="INEOS" 
                        className="max-h-24 object-contain"
                    />
                </a>

                {/* Job Details */}
                <div className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                            INEOS / CYBERORCES
                        </h2>
                        <h3 className="text-xl text-gray-600 dark:text-gray-300">
                            Network Security Engineer - Internship
                        </h3>
                    </div>

                    <div className="flex flex-wrap gap-4 items-center">
                        <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg">
                            <FaCalendarAlt className="text-blue-500 dark:text-blue-400" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                                July 2024 - September 2024
                            </span>
                        </div>

                        <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg">
                            <FaLocationDot className="text-blue-500 dark:text-blue-400" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                                Casablanca, Morocco
                            </span>
                        </div>

                        <button 
                            onClick={toggleExpand}
                            className="ml-auto p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                            <IoIosArrowDown 
                                className={`text-2xl text-gray-600 dark:text-gray-300 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                            />
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-gray-200 dark:border-gray-700"
                    >
                        <div className="p-6 bg-gray-400/60 dark:bg-gray-900/50">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                                Key Responsibilities
                            </h3>

                            <ul className="space-y-3">
                                {[
                                    "Gained expertise in network security and virtual infrastructure design.",
                                    "Worked with VLANs, VPNs on FortiGate alongside Cisco devices.",
                                    "Integrated SD-WAN for improved network performance and redundancy."
                                ].map((responsibility, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                                    >
                                        <HiBadgeCheck className="text-blue-500 dark:text-blue-400 text-xl flex-shrink-0" />
                                        <span className="text-base">{responsibility}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Ineos;