import { React, useState, useContext, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaExternalLinkAlt, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';
import { IoMoonOutline } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
import { ThemeContext } from '../app/page';


const Social = () => { 
    return (
        <motion.div initial={{ opacity: 0 }} transition={{ duration: 1 }} animate={{ opacity: 1 }} >
            <div className='fixed right-[4%] top-[7%] flex flex-col h-[150px] justify-between items-center text-4xl text-black dark:text-white'>
                <FaGithub className='border border-[#000000] dark:border-[#b1adad] rounded-[60px] hover:bg-[#b1adad] hover:bg-opacity-30 p-0.5 cursor-pointer' onClick={() => window.location.href='https://github.com/Yassinom'}/>
                <FaLinkedin className='border border-[#000000] dark:border-[#b1adad] rounded-[60px] hover:bg-[#b1adad] hover:bg-opacity-30 p-0.5 cursor-pointer' onClick={() => window.location.href='https://www.linkedin.com/in/yassine-essaleh-a25749261/'}/>
                <FaWhatsapp className='border border-[#000000] dark:border-[#b1adad] rounded-[60px] hover:bg-[#b1adad] hover:bg-opacity-30 p-0.5 cursor-pointer' onClick={() => window.location.href='https://wa.me/212621668024'} />
            </div>
        </motion.div>
    );
}

export default Social;
