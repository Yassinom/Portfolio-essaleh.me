import { React, useState, useContext, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaExternalLinkAlt, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';
import { IoMoonOutline } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
import { ThemeContext } from '../app/page';

const NavBar = () => { 
    

    return (
        <motion.div 
            className='sticky top-5 z-10 max-w-[60%] mx-auto'
            initial={{ opacity: 0 }} 
            transition={{ duration: 1 }} 
            animate={{ opacity: 1 }}
        >

            
            <div className='flex justify-between items-center h-20 mx-auto text-white rounded-[60px] px-5 my-5 dark:bg-gray-800 bg-[#bbc0c7] shadow-md'>
                <div className='flex items-center bg-slate-500 bg-opacity-20 ml-4 py-2 px-4 rounded-[60px] font-bold text-black dark:text-white cursor-pointer'>
                    <h1 className='flex text-2xl '>RESUME</h1>
                    <a href="https://drive.google.com/file/d/1sonHs8NLf1NCoK8w2tzIJh-NSCKR6t9D/view?usp=drive_link" target="_blank" rel="noopener noreferrer">

                        <FaExternalLinkAlt className='ml-2 text-[18px] hover:text-[#e93140]' />
                    </a>
                </div>   

                <ul className='flex items-center list-none py-2 text-black dark:text-white'> 
                    <li onClick={() => window.location.href='#home'} className='cursor-pointer px-5 py-2 hover:bg-[#b1adad] hover:bg-opacity-30 font-bold rounded-[60px]'>Home</li>
                    <li onClick={() => window.location.href='#skills'} className='cursor-pointer px-5 py-2 hover:bg-[#b1adad] hover:bg-opacity-30 font-bold rounded-[60px]'>Skills</li>
                    <li onClick={() => window.location.href='#experience'} className='cursor-pointer px-5 py-2 hover:bg-[#b1adad] hover:bg-opacity-30 font-bold rounded-[60px]'>Experience</li>
                    <li onClick={() => window.location.href='#education'} className='cursor-pointer px-5 py-2 hover:bg-[#b1adad] hover:bg-opacity-30 font-bold rounded-[60px]'>Education</li>
                </ul>

                {/* <div onClick={handleNav} className='md:hidden cursor-pointer hover:ease-in-out duration-200 hover:bg-gray-600'>
                    {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
                </div> */}
                
                {/* Mobile Menu */}
                {/* <div className={nav ? 'fixed top-0 left-0 h-full w-[60%] border-r border-r-[#6BB77B] bg-[#172D13] ease-in-out duration-500 md:hidden' : 'fixed left-[-100%] ease-in-out duration-500' }>
                    <h1 className='text-2xl font-bold w-full text-[#D76F30] m-4'>PORTFOLIO.</h1>
                    <ul className='p-4 uppercase'>
                        <li className='p-4 border-b border-[#245a30]'>Home</li>
                        <li className='p-4 border-b border-[#245a30]'>Projects</li>
                        <li className='p-4 border-b border-[#245a30]'>About</li>
                        <li className='p-4'>Contact</li>
                    </ul>
                </div> */}
            </div>
        </motion.div>
    );
}

export default NavBar;
