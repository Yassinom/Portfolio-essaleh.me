"use client";
import React from 'react';
import { ReactTyped } from "react-typed";
import { motion } from 'framer-motion';
import { FaArrowDownLong } from "react-icons/fa6";


const Hero = () => {
    return (
        <div className='z-[1] max-w-[60%] mx-auto my-[50px]'>
            <motion.div initial={{ opacity: 0 }} transition={{ duration: 1 }} animate={{opacity: 1, y: -20}} >
                    <h1 className='md:text-[50px] font-bold text-black dark:text-white'>Hi, I&apos;m <span className='text-[#e93140] font-bold underline'>Yassine Essaleh</span>.</h1>
                    
                    <div className='md:text-5xl text-2xl flex font-bold md:pt-4'>
                        <h1 className='text-black dark:text-white'>I&apos;m a </h1>
                        <ReactTyped className='pl-2 text-[#e93140]'
                            strings={['Cybersecurity Engineer...', 'Web Developer...', 'Human...', 'Gym Rat...']}
                            typeSpeed={90}
                            backSpeed={60}
                            loop
                        />
                    </div>

                    <a href="#skills">
                        <div className='inline-flex items-center width-[20px] sm:text-[12px] sm:mt-3 md:mt-10 md:text-[20px] bg-[#ffc5cb] dark:bg-[#ff7d8a] px-4 py-3 text-black font-bold rounded-2xl shadow-md'>
                            Get to know me
                            <FaArrowDownLong className='pl-2 text-2xl'/>
                        </div>
                    </a>
            </motion.div>
        </div>
        
    )
}   

export default Hero
