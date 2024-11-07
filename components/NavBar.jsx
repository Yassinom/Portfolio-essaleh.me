import { React, useState, useContext, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaExternalLinkAlt, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';
import { IoMoonOutline } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
import { ThemeContext } from '../app/page';

const NavBar = () => { 
    const [nav, setNav] = useState(false);
    const handleNav = () => { setNav(!nav); }

    const [isFixed, setIsFixed] = useState(false);
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsFixed(scrollPosition > 311); // Set the scroll threshold to 311px
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    return (
        <motion.div initial={{ opacity: 0 }} transition={{ duration: 1 }} animate={{ opacity: 1 }} >
            
            {/* Social Links */}
            <div className='fixed right-[4%] top-[7%] flex flex-col h-[150px] justify-between items-center text-4xl text-black dark:text-white'>
                <FaGithub className='border border-[#000000] dark:border-[#b1adad] rounded-[60px] hover:bg-[#b1adad] hover:bg-opacity-30 p-0.5 cursor-pointer' onClick={() => window.location.href='https://github.com/Yassinom'}/>
                <FaLinkedin className='border border-[#000000] dark:border-[#b1adad] rounded-[60px] hover:bg-[#b1adad] hover:bg-opacity-30 p-0.5 cursor-pointer' onClick={() => window.location.href='https://www.linkedin.com/in/yassine-essaleh-a25749261/'}/>
                <FaWhatsapp className='border border-[#000000] dark:border-[#b1adad] rounded-[60px] hover:bg-[#b1adad] hover:bg-opacity-30 p-0.5 cursor-pointer' onClick={() => window.location.href='https://wa.me/212621668024'} />
            </div>
            
            {/* Dark Mode Toggle */}
            <div className='fixed left-[4%] top-[7%] text-4xl rounded-[10px] hover:bg-opacity-30 p-0.5 cursor-pointer hover:bg-[#e0d466] dark:hover:bg-[#b1adad] dark:hover:bg-opacity-30' onClick={toggleDarkMode}>
                {darkMode ? <IoMoonOutline /> : <IoIosSunny className='text-black'/>}
            </div>

            {/* Spacer to prevent layout shift when navbar is fixed */}
            {isFixed && <div style={{ height: '80px' }} />} {/* Matches navbar height */}

            {/* Navbar */}
            <div id='home' className={`z-[999] flex justify-between items-center h-20 mx-auto max-w-[60%] text-white rounded-[60px] px-5 my-5 bg-slate-500 bg-opacity-20 shadow-md ${isFixed ? 'fixed top-0 left-0 right-0 w-full z-10' : ''}`}>
                <div className='flex items-center bg-slate-500 bg-opacity-20 ml-4 py-2 px-4 rounded-[60px] font-bold text-black dark:text-[#FFF] '>
                    <h1 className='flex text-2xl '>RESUME</h1>
                    <a href="https://drive.google.com/file/d/1sonHs8NLf1NCoK8w2tzIJh-NSCKR6t9D/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className='ml-2 text-[18px] cursor-pointer hover:text-[#e93140]' />
                    </a>
                </div>   

                <ul className='flex items-center list-none py-2 text-black dark:text-white'> 
                    <li onClick={() => window.location.href='#projects'} className='cursor-pointer px-5 py-2 hover:bg-[#b1adad] hover:bg-opacity-30 font-bold rounded-[60px]'>Home</li>
                    <li onClick={() => window.location.href='#skills'} className='cursor-pointer px-5 py-2 hover:bg-[#b1adad] hover:bg-opacity-30 font-bold rounded-[60px]'>Skills</li>
                    <li onClick={() => window.location.href='#experience'} className='cursor-pointer px-5 py-2 hover:bg-[#b1adad] hover:bg-opacity-30 font-bold rounded-[60px]'>Experience</li>
                    <li onClick={() => window.location.href='#education'} className='cursor-pointer px-5 py-2 hover:bg-[#b1adad] hover:bg-opacity-30 font-bold rounded-[60px]'>Education</li>
                </ul>

                <div onClick={handleNav} className='md:hidden cursor-pointer hover:ease-in-out duration-200 hover:bg-gray-600'>
                    {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
                </div>
                
                {/* Mobile Menu */}
                <div className={nav ? 'fixed top-0 left-0 h-full w-[60%] border-r border-r-[#6BB77B] bg-[#172D13] ease-in-out duration-500 md:hidden' : 'fixed left-[-100%] ease-in-out duration-500' }>
                    <h1 className='text-2xl font-bold w-full text-[#D76F30] m-4'>PORTFOLIO.</h1>
                    <ul className='p-4 uppercase'>
                        <li className='p-4 border-b border-[#245a30]'>Home</li>
                        <li className='p-4 border-b border-[#245a30]'>Projects</li>
                        <li className='p-4 border-b border-[#245a30]'>About</li>
                        <li className='p-4'>Contact</li>
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}

export default NavBar;
