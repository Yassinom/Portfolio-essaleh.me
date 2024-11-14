import { React, useState, useContext, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaExternalLinkAlt, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';
import { IoMoonOutline } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
import { ThemeContext } from '../app/page';

const DarkModeToggle = () => { 
    
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            transition={{ duration: 1 }} 
            animate={{ opacity: 1 }} 
            className='z-10 fixed'
        >
            <div
                className="fixed bottom-[5%] md:left-[4%] md:top-[7%] right-[2%] md:right-auto md:bottom-auto
                        md:text-4xl text-4xl md:rounded-[10px] rounded-full  hover:bg-opacity-30 md:p-0.5 p-1.5 cursor-pointer 
                        hover:bg-[#e0d466] dark:hover:bg-[#b1adad] dark:hover:bg-opacity-30
                        dark:md:bg-transparent bg-[#e0d466] dark:bg-slate-500 d  transition-all duration-200"
                onClick={toggleDarkMode}
            >
                {darkMode ? <IoMoonOutline /> : <IoIosSunny className='text-black'/>}
            </div>
        </motion.div>
    );
}

export default DarkModeToggle;
