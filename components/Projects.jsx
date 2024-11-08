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
          id='projetcs' 
          className='text-[40px] font-bold text-black dark:text-white mb-8 max-w-[60%] mx-auto mt-36'
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