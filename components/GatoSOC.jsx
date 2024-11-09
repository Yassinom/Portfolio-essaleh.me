import React, { useState } from "react";

import { motion } from "framer-motion";
import { IoIosArrowDropdown } from "react-icons/io";

import CardElement from "@/components/CardElement";
import ProjectElement from "@/components/ProjectElement";

const GatoSOC = () => {
  const [rotated, setRotated] = useState(false);
  const rotateArrow = () => { setRotated(!rotated); };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="md:max-w-[60%] max-w-[90%] mx-auto">
      {/* Trigger Button */}
      <div className='rounded-[30px] p-4 bg-slate-500 bg-opacity-20 shadow-md text-black dark:text-white'>
                    <div className="flex md:flex-row flex-col">
                      <div className="md:hidden flex justify-between max-w-[99%] items-center mb-2 mt-1">
                        <div className="text-3xl font-bold">GatoSOC</div>
                        <div className="text-lg text-gray-700 dark:text-gray-400">2024</div>
                      </div>
                        <div className="md:w-1/3 w-fullmr-4 rounded-[30px] bg-[#8997ab] dark:bg-[#323c4a] bg-opacity-60 flex flex-col justify-center hover:cursor-pointer" onClick={toggleModal}>
                            <img src="/images/GatoSOC.png" alt="GatoSOC" className="rounded-[30px]" />
                        </div>


                        <div className="flex flex-col md:w-[70%] md:px-[1%] pt-1 justify-between">

                            <div>
                                <div className="mb-3 flex justify-between max-w-[99%] items-center">
                                <div className="md:inline hidden text-3xl font-bold">GatoSOC</div>
                                <div className="md:inline hidden text-lg text-gray-700 dark:text-gray-400">2024</div>
                              </div> 
                              <div className="md:text-xl text-[17px] text-gray-700 dark:text-gray-400 ">
                                A Next-Gen SOC stack solution crafted to enhance threat detection and response capabilities, leveraging Wazuh, Grafana, Graylog, MISP and TheHive.
                              </div>
                            </div>

                            <div className="flex justify-between items-center mt-[3%]">

                              <div className="flex flex-wrap md:gap-2 gap-1">
                                <ProjectElement skillName="Wazuh"/>
                                <ProjectElement skillName="Grafana"/>
                                <ProjectElement skillName="Graylog"/>
                                <ProjectElement skillName="MISP"/>
                                <ProjectElement skillName="TheHive"/>
                              </div>

                              <IoIosArrowDropdown
                                  className='text-[40px] hover:bg-slate-400 hover:bg-opacity-30 rounded-full hover:cursor-pointer transition-all duration-300 rotate-[-90deg]'
                                  onClick={toggleModal}
                              />
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
              >
              </div>

              {/* Modal Content with Framer Motion */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}              //text-[#1d1e1f]
                transition={{ duration: 0.3 }}
                className="bg-[#2f3641] bg-opacity-75 rounded-[30px] shadow-[30px] px-4 py-4 z-20 max-w-[95%] md:max-w-[60%] w-full h-[90%] overflow-y-auto"
              >

                  <div 
                    className="flex items-center justify-between md:w-[23%] w-[58%] rounded-[30px] px-2 py-1 bg-opacity-60 cursor-pointer hover:bg-[#c2c3c4] hover:bg-opacity-30 transition-all duration-200"
                    onClick={toggleModal}
                    >
                      <IoIosArrowDropdown className="rotate-[90deg] md:text-3xl text-lg text-[#9f9fa0]"/>
                      <h2 className="md:text-xl text-md font-semibold text-[#9f9fa0]">Go back to projects</h2>
                  </div>
                  
                  <div className=" text-center text-[40px] font-bold mt-5">GatoSOC</div>
                  <div className="md:text-[20px] text-[15px] text-[#9f9fa0] text-center">Next-generation security operations, open-source and free for everyone</div>
                  <img 
                    src="/images/GatoSOC.png" 
                    alt="GatoSOC" 
                    height={100} 
                    className="rounded-[30px] mx-auto mt-5 md:max-w-[85%] max-w-[100%]"  
                  />

                  <div className="flex md:flex-row flex-col mt-14">
                      <div className="md:w-2/3 w-[100%] px-3 rounded-[20px] hover:bg-[#919292] hover:bg-opacity-30 transition-all duration-200 mr-2">
                          <div className="text-[30px] font-bold ">Overview</div>
                          <div className="md:text-[21px] text-[15px] text-[#9f9fa0]">
                            This Next-Gen Security Operations Center aims to strengthen an organization&apos;s cybersecurity framework by offering real-time monitoring and incident response functionalities. This all-encompassing platform combines multiple open-source tools to deliver effective security monitoring and threat management solutions.
                          </div>
                      </div>

                      <div className="md:w-1/3 w-[100%] px-3 md:pt-0 pt-9 rounded-[20px]">
                          <div className="text-[30px] font-bold mb-2">Technologies Used</div>
                          <div className="flex flex-wrap gap-2">
                            <ProjectElement skillName="Wazuh"/>
                            <ProjectElement skillName="Grafana"/>
                            <ProjectElement skillName="Graylog"/>
                            <ProjectElement skillName="MISP"/>
                            <ProjectElement skillName="TheHive"/>
                            <ProjectElement skillName="CloudLab"/>
                            <ProjectElement skillName="Suricata"/>
                            <ProjectElement skillName="VirusTotal "/>
                            <ProjectElement skillName="Yara"/>
                            <ProjectElement skillName="Sysmon"/>
                          </div>
                      </div>
                  </div>

                 
              </motion.div>
          </div>
      )}
    </div>
  );
}

export default GatoSOC;