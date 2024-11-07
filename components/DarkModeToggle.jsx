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
        <motion.div initial={{ opacity: 0 }} transition={{ duration: 1 }} animate={{ opacity: 1 }} >
            <div className='fixed left-[4%] top-[7%] text-4xl rounded-[10px] hover:bg-opacity-30 p-0.5 cursor-pointer hover:bg-[#e0d466] dark:hover:bg-[#b1adad] dark:hover:bg-opacity-30' onClick={toggleDarkMode}>
                {darkMode ? <IoMoonOutline /> : <IoIosSunny className='text-black'/>}
            </div>
        </motion.div>
    );
}

export default DarkModeToggle;
