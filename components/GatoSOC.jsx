import React, { useState } from "react";

import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDropdown } from "react-icons/io";
import gatosocimg from "../images/GatoSOC.png";

const GatoSOC = () => {
  const [rotated, setRotated] = useState(false);
  const rotateArrow = () => { setRotated(!rotated); };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="max-w-[60%] mx-auto">
      {/* Trigger Button */}
      <div className={`rounded-[30px] p-4 bg-slate-500 bg-opacity-20 shadow-md text-black dark:text-white`}>
                    <div className="flex">
                        <div className="w-1/3 mr-4 p-4 rounded-[30px] bg-[#8997ab] dark:bg-[#323c4a] bg-opacity-60 flex flex-col justify-center hover:cursor-pointer" onClick={toggleModal}>
                            <img src="../GatoSOC.png" alt="GatoSOC" />
                        </div>


                        <div className="flex-col w-[70%] px-[1%] pt-1">
                            <div className="text-3xl font-bold">GatoSOC</div>
                            <div className="text-2xl">Network Security Engineer - Internship</div>

                            <div className="flex justify-between items-center mt-[3%]">
                                <div className="flex items-center px-3 py-2 rounded-[20px] bg-slate-500 bg-opacity-20 shadow-md">
                                    <FaCalendarAlt className="text-[20px] mr-3 dark:text-[#f1949d]" />
                                    <div className="text-[16px]">July 2024 - September 2024</div>
                                </div>

                                <div className="flex items-center px-3 py-2 rounded-[20px] bg-slate-500 bg-opacity-20 shadow-md">
                                    <FaLocationDot className="text-[23px] mr-3 dark:text-[#f1949d]" />
                                    <div className="text-[16px]">Casablanca, Morocco</div>
                                </div>

                                <div onClick={rotateArrow}>
                                    <IoIosArrowDropdown
                                        className='text-[40px] hover:bg-slate-400 hover:bg-opacity-30 rounded-full hover:cursor-pointer transition-all duration-300 rotate-[-90deg]'
                                        onClick={toggleModal}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                




    














      {/* Modal and Background Blur */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          {/* Background Blur */}
          <div
            className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md"
            onClick={toggleModal}
          ></div>

          {/* Modal Content with Framer Motion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}        
            transition={{ duration: 0.3 }}
            className="relative bg-gray-600 rounded-lg shadow-lg p-6 z-20 w-3/4 max-w-lg"
          >
            <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
            <p className="mb-4">This is the content inside the modal.</p>
            <button
              onClick={toggleModal}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close Modal
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default GatoSOC;