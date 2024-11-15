// "use client";
// import React from 'react';
// import { ReactTyped } from "react-typed";
// import { motion } from 'framer-motion';
// import { FaArrowDownLong } from "react-icons/fa6";


// const Hero = () => {
//     return (
//         <div id='home' className='md:max-w-[60%] max-w-[90%]  md:mx-auto  my-[50px] mx-3 '>
//             <motion.div initial={{ opacity: 0 }} transition={{ duration: 1 }} animate={{opacity: 1, y: -20}} >
//                     <h1 className='md:text-[50px] text-2xl font-bold text-black dark:text-white'>Hi, I&apos;m <span className='text-[#e93140] font-bold underline'>Yassine Essaleh</span>.</h1>
                    
//                     <div className='md:text-5xl text-xl flex font-bold md:pt-4'>
//                         <h1 className='text-black dark:text-white'>I&apos;m a </h1>
//                         <ReactTyped className='md:pl-5 pl-3 text-[#e93140]'
//                             strings={[' Cybersecurity Engineer...', ' Web Developer...', ' Human...', ' Gym Rat...']}
//                             typeSpeed={90}
//                             backSpeed={60}
//                             loop
//                         />
//                     </div>

//                     <a href="#skills">
//                         <div className='hidden md:inline-flex items-center width-[20px] sm:text-[12px] sm:mt-3 md:mt-10 md:text-[20px] bg-[#ffc5cb] dark:bg-[#ff7d8a] px-4 py-3 text-black font-bold rounded-2xl shadow-md'>
//                             Get to know me
//                             <FaArrowDownLong className='pl-2 text-2xl'/>
//                         </div>
//                     </a>
//             </motion.div>
//         </div>
        
//     )
// }   

// export default Hero;








"use client";

import React from 'react';
import { ReactTyped } from "react-typed";
import { motion } from 'framer-motion';
import { FaChevronDown } from "react-icons/fa6";

const Hero = () => {
    return (
        <section id='home' className='min-h-screen relative'>
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent dark:from-gray-900 dark:via-gray-900 dark:to-transparent" />
            
            {/* Content */}
            <div className='min-h-screen flex items-center justify-center relative'>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto px-4 text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                        Hello, I'm{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500">
                            Yassine Essaleh
                        </span>
                    </h1>

                    <div className="text-2xl md:text-4xl font-semibold mb-12">
                        <span className="text-gray-700 dark:text-gray-300">I'm a</span>{' '}
                        <ReactTyped
                            strings={[
                                'Cybersecurity Engineer',
                                'Web Developer',
                                'Problem Solver',
                                'Tech Enthusiast'
                            ]}
                            typeSpeed={80}
                            backSpeed={50}
                            loop
                            className="text-red-500"
                        />
                    </div>

                    <motion.a
                        href="#skills"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300"
                    >
                        Discover More
                        <FaChevronDown className="animate-bounce" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;





// "use client";

// import React from 'react';
// import { ReactTyped } from "react-typed";
// import { motion } from 'framer-motion';
// import { FaChevronDown } from "react-icons/fa6";

// const Hero = () => {
//     return (
//         <section id='home' className='min-h-screen relative'>
//             {/* Enhanced multi-step gradient overlay */}
//             <div className="absolute inset-0 bg-gradient-to-b from-white 
//                 via-white via-[65%] 
//                 via-white/95 via-[75%] 
//                 via-white/85 via-[85%] 
//                 to-transparent 
//                 dark:from-gray-900 
//                 dark:via-gray-900 dark:via-[65%] 
//                 dark:via-gray-900/95 dark:via-75% 
//                 dark:via-gray-900/85 dark:via-85% 
//                 dark:to-transparent" />
            
//             {/* Content */}
//             <div className='min-h-screen flex items-center justify-center relative'>
//                 <motion.div 
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, ease: "easeOut" }}
//                     className="max-w-4xl mx-auto px-4 text-center"
//                 >
//                     <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
//                         Hello, I'm{' '}
//                         <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500">
//                             Yassine Essaleh
//                         </span>
//                     </h1>

//                     <div className="text-2xl md:text-4xl font-semibold mb-12">
//                         <span className="text-gray-700 dark:text-gray-300">I'm a</span>{' '}
//                         <ReactTyped
//                             strings={[
//                                 'Cybersecurity Engineer',
//                                 'Web Developer',
//                                 'Problem Solver',
//                                 'Tech Enthusiast'
//                             ]}
//                             typeSpeed={80}
//                             backSpeed={50}
//                             loop
//                             className="text-red-500"
//                         />
//                     </div>

//                     <motion.a
//                         href="#skills"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300"
//                     >
//                         Discover More
//                         <FaChevronDown className="animate-bounce" />
//                     </motion.a>
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default Hero;
