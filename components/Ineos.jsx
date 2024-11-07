import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDropdown } from "react-icons/io";
import { VscDebugBreakpointData } from "react-icons/vsc";

const Ineos = () => {
    const [rotated, setRotated] = useState(false);

    const rotateArrow = () => { setRotated(!rotated); };

    return (
                <div className={`border ${rotated ? ' border-white' : ' border-transparent'} transition-all duration-200 rounded-[30px] p-4 bg-slate-500 bg-opacity-20 shadow-md text-black dark:text-white`}>
                    <div className="flex">
                        <a href="https://ineos.ma/" target="_blank" className="block w-1/3 mr-4 p-4 rounded-[30px] bg-[#8997ab] dark:bg-[#323c4a] bg-opacity-60 flex flex-col justify-center hover:cursor-pointer">
                            <img src="https://ineos.ma/wp-content/uploads/2020/06/LOGO_INEOS_dark.png" alt="INEOS" />
                        </a>


                        <div className="flex-col w-[70%] px-[1%] pt-1">
                            <div className="text-3xl font-bold">INEOS / CYBERORCES</div>
                            <div className="text-2xl">Network Security Engineer - Internship</div>

                            <div className="flex justify-between items-center mt-[3%]">
                                <div className="flex items-center px-3 py-2 rounded-[20px] bg-slate-500 bg-opacity-20 shadow-md">
                                    <FaCalendarAlt className="text-[20px] mr-3 dark:text-[#f1949d]" />
                                    <div className="text-[16px]">July 2024 - September 2024</div>
                                </div>

                                <div className="flex items-center px-3 py-2 rounded-[20px] bg-slate-500 bg-opacity-20 shadow-md">
                                    <FaLocationDot className="text-[23px] mr-3 dark:text-[#f1949d]" />
                                    <div className="text-[16px]">Casablanca, Morocco</div>
                                </div>

                                <div onClick={rotateArrow}>
                                    <IoIosArrowDropdown
                                        className={`text-[40px] hover:bg-slate-400 hover:bg-opacity-30 rounded-full hover:cursor-pointer transition-all duration-300 ${
                                            rotated ? 'rotate-180' : 'rotate-0'
                                        }`}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {rotated && (
                        <>
                            <hr className="my-4 border-t border-gray-300 dark:border-gray-600" />
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden mt-4 p-4 bg-[#8997ab] dark:bg-[#444c58] rounded-[10px] shadow-md"
                            >
                                <p className="text-[30px] font-bold text-gray-800 mb-2 dark:text-[#f1949d]">Key Responsibilities:</p>

                                <ul className="text-gray-800 dark:text-gray-200 text-[20px]">
                                    <motion.li
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="flex items-center mb-2"
                                    >
                                        <VscDebugBreakpointData className="mr-2 text-lg" />
                                        <span>Gained expertise in network security and virtual infrastructure design.</span>
                                    </motion.li>
                                    <motion.li
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="flex items-center mb-2"
                                    >
                                        <VscDebugBreakpointData className="mr-2 text-lg" />
                                        <span>Worked with VLANs, VPNs on FortiGate alongside Cisco devices.</span>
                                    </motion.li>
                                    <motion.li
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                        className="flex items-center"
                                    >
                                        <VscDebugBreakpointData className="mr-2 text-lg" />
                                        <span>Integrated SD-WAN for improved network performance and redundancy.</span>
                                    </motion.li>
                                </ul>
                            </motion.div>
                        </>
                    )}
                </div>
            
    );
};

export default Ineos;
