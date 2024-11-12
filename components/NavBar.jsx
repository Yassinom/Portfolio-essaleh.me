import { React} from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from 'framer-motion';
import { IoHomeOutline, IoBriefcaseOutline, IoSchoolOutline  } from "react-icons/io5";
import { TbTools, TbFriends} from "react-icons/tb";




const NavBar = () => { 
    

    return (
        <motion.div 
            className='sticky top-5 z-10 md:max-w-[60%] max-w-[90%] mx-auto'
            initial={{ opacity: 0 }} 
            transition={{ duration: 1 }} 
            animate={{ opacity: 1 }}
        >

            
            <div className='flex justify-between items-center md:h-20 h-15 mx-auto text-white rounded-[60px] md:px-5 px-2 my-5 dark:bg-gray-800 bg-[#bbc0c7] shadow-md'>
                <div className='flex items-center bg-slate-500 bg-opacity-20 md:ml-4  md:py-2 py-1 md:px-4 px-2 rounded-[60px] font-bold text-black dark:text-white cursor-pointer'>
                    <h1 className='text-2xl hidden md:inline'>RESUME</h1>
                    <h1 className="inline md:hidden">CV</h1>
                    <a href="https://drive.google.com/file/d/1why6K_0fNvK_bcborPUWfah9yFe1HzZc/view" target="_blank" rel="noopener noreferrer">

                        <FaExternalLinkAlt className='ml-2 md:text-[18px] text-[13px] hover:text-[#e93140]' />
                    </a>
                </div>   

                <ul className='flex items-center list-none py-2 text-black dark:text-white'> 
                    <li onClick={() => window.location.href='#home'} className='cursor-pointer px-5 py-2 hover:bg-[#b1adad] hover:bg-opacity-30 font-bold rounded-[60px]'>
                        <span className="hidden md:inline">Home</span>
                        <span className="inline md:hidden"><IoHomeOutline /></span>
                    </li>
                    <li onClick={() => window.location.href='#skills'} className='cursor-pointer px-5 py-2 hover:bg-[#b1adad] hover:bg-opacity-30 font-bold rounded-[60px]'>
                        <span className="hidden md:inline">Skills</span>
                        <span className="inline md:hidden"><TbTools /></span>
                    </li>
                    <li onClick={() => window.location.href='#experience'} className='cursor-pointer px-5 py-2 hover:bg-[#b1adad] hover:bg-opacity-30 font-bold rounded-[60px]'>
                        <span className="hidden md:inline">Experience</span>
                        <span className="inline md:hidden"><IoBriefcaseOutline /></span>
                    </li>
                    <li onClick={() => window.location.href='#education'} className='cursor-pointer px-5 py-2 hover:bg-[#b1adad] hover:bg-opacity-30 font-bold rounded-[60px]'>
                        <span className="hidden md:inline">Education</span>
                        <span className="inline md:hidden"><IoSchoolOutline  /></span>
                    </li>
                    <li onClick={() => window.location.href='#projects'} className='cursor-pointer px-5 py-2 hover:bg-[#b1adad] hover:bg-opacity-30 font-bold rounded-[60px]'>
                        <span className="hidden md:inline">Projects</span>
                        <span className="inline md:hidden"><TbFriends   /></span>
                    </li>
                </ul>

                
            </div>
        </motion.div>
    );
}

export default NavBar;
