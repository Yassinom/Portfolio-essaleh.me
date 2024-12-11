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
                            href="https://drive.google.com/file/d/1kZgN5hW6MlFhmiuWJbOeOJTs30FgYeS-/view"
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

