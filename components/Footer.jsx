"use client";

import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineWhatsApp, AiOutlinePhone   } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";



const Footer = () => {
    return (
        <footer id='home' className='md:max-w-[60%] max-w-[90%] mx-auto py-8'>
            <div className='border-t border-gray-500 dark:border-gray-700 pt-8'>
                <div className='flex  justify-between items-center gap-4'>
                    {/* Contact Info */}
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-lg font-semibold text-gray-950 dark:text-gray-200 text-center mb-2'>Contact Me</h3>
                        <a href='mailto:your.email@example.com' 
                           className='text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center'>
                            <IoMailOutline className='mr-3 flex-shrink-0 text-xl' />
                            essalehyassine@gmail.com
                        </a>
                        <a href='tel:+1234567890' 
                           className='text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center'>
                            <AiOutlinePhone className='mr-3 flex-shrink-0 text-xl rotate-[90deg]' />
                            +212 621668024
                        </a>
                        {/* Social Links */}
                        <div className='flex items-center mt-2 gap-5'>
                           
                            <a 
                            href='https://www.linkedin.com/in/yassine-essaleh-a25749261/' 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            className='text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-100 text-3xl flex-shrink-0'>
                                <AiOutlineLinkedin />
                            </a>

                            <a href='https://github.com/Yassinom' 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            className='text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-100 text-3xl flex-shrink-0'>
                                <AiOutlineGithub />
                            </a>
                            
                            <a href='https://wa.me/212621668024' 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            className='text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-100 text-3xl flex-shrink-0'>
                                <AiOutlineWhatsApp />
                            </a>

                            <a href='https://www.instagram.com/essalehyassine/' 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            className='text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-100 text-3xl flex-shrink-0'>
                                <FaInstagram />

                            </a>

                            

                        </div>
                        
                    </div>

                    {/* Copyright */}
                    <div className='text-gray-600 dark:text-gray-400 text-center md:text-right'>
                        <p><span className="text-2xl">©</span> {new Date().getFullYear()} Yassine Essaleh</p>
                        <p className='text-sm'>All rights reserved</p>
                    </div>
                </div>
               
                {/* Made by signature */}
                <div className='text-center mt-6 text-gray-950 dark:text-gray-400 text-sm italic'>
                    Made by <a 
                        href='https://linkedin.com/in/yassine-essaleh-a25749261' 
                        className='hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-200 underline'>
                        Yassinom
                    </a> with love ❤️
                </div>
            </div>
        </footer>
    );
};

export default Footer;
