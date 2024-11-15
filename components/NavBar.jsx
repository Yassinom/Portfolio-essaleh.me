// import { React} from 'react';
// import { FaExternalLinkAlt } from "react-icons/fa";
// import { motion } from 'framer-motion';
// import { IoHomeOutline, IoBriefcaseOutline, IoSchoolOutline  } from "react-icons/io5";
// import { TbTools, TbFriends} from "react-icons/tb";
// import { MdOutlineVolunteerActivism } from "react-icons/md";




// const NavBar = () => { 
    

//     return (
//         <motion.div 
//             className='sticky top-5 z-10 md:max-w-[60%] max-w-[90%] mx-auto'
//             initial={{ opacity: 0 }} 
//             transition={{ duration: 1 }} 
//             animate={{ opacity: 1 }}
//         >

            
//             <div className='flex justify-between items-center md:h-20 h-15 mx-auto text-white rounded-[60px] md:px-5 px-2 my-5 dark:bg-gray-800 bg-[#bbc0c7] shadow-md'>
//                 <div className='flex items-center bg-slate-500 bg-opacity-20 md:ml-4  md:py-2 py-1 md:px-4 px-2 rounded-[60px] font-bold text-black dark:text-white cursor-pointer'>
//                     <h1 className='text-2xl hidden md:inline'>RESUME</h1>
//                     <h1 className="inline md:hidden">CV</h1>
//                     <a href="https://drive.google.com/file/d/1why6K_0fNvK_bcborPUWfah9yFe1HzZc/view" target="_blank" rel="noopener noreferrer">

//                         <FaExternalLinkAlt className='ml-2 md:text-[18px] text-[13px] hover:text-[#e93140]' />
//                     </a>
//                 </div>   

//                 <ul className='flex items-center list-none py-2 text-black dark:text-white'> 
//                     <li onClick={() => window.location.href='#home'} className='cursor-pointer px-5 py-2 hover:bg-[#b1adad] hover:bg-opacity-30 font-bold rounded-[60px]'>
//                         <span className="hidden md:inline">Home</span>
//                         <span className="inline md:hidden"><IoHomeOutline /></span>
//                     </li>
//                     <li onClick={() => window.location.href='#skills'} className='cursor-pointer px-5 py-2 hover:bg-[#b1adad] hover:bg-opacity-30 font-bold rounded-[60px]'>
//                         <span className="hidden md:inline">Skills</span>
//                         <span className="inline md:hidden"><TbTools /></span>
//                     </li>
//                     <li onClick={() => window.location.href='#experience'} className='cursor-pointer px-5 py-2 hover:bg-[#b1adad] hover:bg-opacity-30 font-bold rounded-[60px]'>
//                         <span className="hidden md:inline">Experience</span>
//                         <span className="inline md:hidden"><IoBriefcaseOutline /></span>
//                     </li>
//                     <li onClick={() => window.location.href='#education'} className='cursor-pointer px-5 py-2 hover:bg-[#b1adad] hover:bg-opacity-30 font-bold rounded-[60px]'>
//                         <span className="hidden md:inline">Education</span>
//                         <span className="inline md:hidden"><IoSchoolOutline  /></span>
//                     </li>
//                     <li onClick={() => window.location.href='#projects'} className='cursor-pointer px-5 py-2 hover:bg-[#b1adad] hover:bg-opacity-30 font-bold rounded-[60px]'>
//                         <span className="hidden md:inline">Projects</span>
//                         <span className="inline md:hidden"><TbFriends   /></span>
//                     </li>
//                     <li onClick={() => window.location.href='#volunteer'} className='cursor-pointer px-5 py-2 hover:bg-[#b1adad] hover:bg-opacity-30 font-bold rounded-[60px]'>
//                         <span className="hidden md:inline">Volunteering</span>
//                         <span className="inline md:hidden"><MdOutlineVolunteerActivism /></span>
//                     </li>
//                 </ul>

                
//             </div>
//         </motion.div>
//     );
// }

// export default NavBar;







import { React } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from 'framer-motion';
import { IoHomeOutline, IoBriefcaseOutline, IoSchoolOutline } from "react-icons/io5";
import { TbTools, TbFriends } from "react-icons/tb";
import { MdOutlineVolunteerActivism } from "react-icons/md";

const NavBar = () => {
    const navItems = [
        { href: '#home', label: 'Home', icon: <IoHomeOutline /> },
        { href: '#skills', label: 'Skills', icon: <TbTools /> },
        { href: '#experience', label: 'Experience', icon: <IoBriefcaseOutline /> },
        { href: '#education', label: 'Education', icon: <IoSchoolOutline /> },
        { href: '#projects', label: 'Projects', icon: <TbFriends /> },
        { href: '#volunteer', label: 'Volunteering', icon: <MdOutlineVolunteerActivism /> },
    ];

    return (
        <motion.div 
            className="sticky top-5 z-10 md:w-[60%] w-[95%] mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="backdrop-blur-md bg-white dark:bg-gray-900 rounded-3xl shadow-lg">
                <div className="flex md:items-center justify-between px-4 py-2.5">
                    {/* Resume Button */}
                    <motion.div 
                        className="flex items-center md:justify-start md:my-2"
                        whileHover={{ scale: 1.05 }}
                    >
                        <a 
                            href="https://drive.google.com/file/d/1why6K_0fNvK_bcborPUWfah9yFe1HzZc/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white md:px-6 px-3 py-2 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
                        >
                            <span className="hidden md:inline">RESUME</span>
                            <span className="md:hidden">CV</span>
                            <FaExternalLinkAlt className="text-sm" />
                        </a>
                    </motion.div>

                    {/* Navigation Items */}
                    <nav className="flex justify-center md:justify-end">
                        <ul className="flex flex-wrap items-center gap-1 md:gap-2">
                            {navItems.map((item, index) => (
                                <motion.li 
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <a
                                        href={item.href}
                                        className="flex items-center px-3 py-2 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                                    >
                                        <span className="hidden md:inline font-medium">{item.label}</span>
                                        <span className="md:hidden">{item.icon}</span>
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </motion.div>
    );
}

export default NavBar;

