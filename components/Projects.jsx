import React, { useState } from "react";
import { motion } from 'framer-motion';

import GatoSOC from "@/components/GatoSOC";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
        <motion.div 
          id='projects' 
          className='text-[40px] font-bold text-black dark:text-white mb-1 md:max-w-[60%] max-w-[90%] mx-auto mt-[100px]'
          initial={{ opacity: 0 }} 
          transition={{ duration: 0.7 }} 
          animate={{opacity: 1, y: -20}}     
        >
          Projects
        </motion.div>
           
        <GatoSOC />
        <div className="h-[100px]"></div>
    </>
  );
}

export default Projects;