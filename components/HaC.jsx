import React, { useState } from "react";

import { motion } from "framer-motion";
import { IoIosArrowDropdown } from "react-icons/io";

import ProjectElement from "@/components/ProjectElement";
import { VscDebugBreakpointData } from "react-icons/vsc";

import CarouselHaC from "@/components/CarouselHac";






const HaC = () => {
  const [rotated, setRotated] = useState(false);
  const rotateArrow = () => { setRotated(!rotated); };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const flickityOptions = {
    initialIndex: 0,
}

  return (
    <div className="md:max-w-[60%] max-w-[90%] mx-auto">
      {/* Trigger Button */}
      <div className='rounded-[30px] p-4 bg-slate-500 bg-opacity-20 shadow-md text-black dark:text-white'>
                    <div className="flex md:flex-row flex-col">
                      <div className="md:hidden flex justify-between max-w-[99%] items-center mb-2 mt-1">
                        <div className="text-3xl font-bold">Unix Hardening as a Code</div>
                        <div className="text-lg text-gray-700 dark:text-gray-400">2024</div>
                      </div>
                        <div className="md:w-1/3 w-fullmr-4 rounded-[30px] bg-[#8997ab] dark:bg-[#323c4a] bg-opacity-60 flex flex-col justify-center hover:cursor-pointer" onClick={toggleModal}>
                            <img src="/images/HaC.png" alt="GatoSOC" className="rounded-[30px]" />
                        </div>


                        <div className="flex flex-col md:w-[70%] md:px-[1%] pt-1 justify-between">

                            <div>
                                <div className="mb-3 flex justify-between max-w-[99%] items-center">
                                <div className="md:inline hidden text-3xl font-bold">Unix Hardening as a Code</div>
                                <div className="md:inline hidden text-lg text-gray-700 dark:text-gray-400">2024</div>
                              </div> 
                              <div className="md:text-xl text-[17px] text-gray-700 dark:text-gray-400 ">
                                A shell script that hardens Unix systems mainly Debian and Ubuntu based systems following the ANSSI recommendations.
                              </div>
                            </div>

                            <div className="flex justify-between items-center mt-[3%]">

                              <div className="flex flex-wrap md:gap-2 gap-1">
                                <ProjectElement skillName="Bash / Shell scripting"/>
                                <ProjectElement skillName="Linux"/>
                                <ProjectElement skillName="GRUB"/>
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
                  
                  <div className=" text-center text-[40px] font-bold mt-5">Hardening as a Code</div>
                  <div className="md:text-[20px] text-[15px] text-[#9f9fa0] text-center">A shell script to harden Unix systems following <a href="https://cyber.gouv.fr/sites/default/files/2018/10/guide_anssi_secure_admin_is_pa_022_en_v2.pdf" target="_blank" className="underline cursor-pointer hover:text-white transition-all duration-200">ANSSI v2</a>  recommendations.</div>
                  <img 
                    src="/images/HaC.png" 
                    alt="GatoSOC" 
                    height={100} 
                    className="rounded-[30px] mx-auto mt-5 md:max-w-[85%] max-w-[100%]"  
                  />

                  <div className="flex md:flex-row flex-col mt-14">
                      <div className="md:w-2/3 w-[100%] px-3 rounded-[20px] hover:bg-[#919292] hover:bg-opacity-30 transition-all duration-200 mr-2 pb-1">
                          <div className="text-[30px] font-bold ">Overview</div>
                          <div className="md:text-[21px] text-[15px] text-[#9f9fa0]">
                             This script enhances Unix system security per ANSSI v2 guidelines by hardening GRUB for boot security, adjusting kernel and network settings to mitigate threats, restricting unnecessary services to reduce attack surfaces, and enforcing stricter access controls to limit unauthorized access. Together, these measures strengthen system integrity on Debian and Ubuntu-based systems.                          
                          </div>
                      </div>

                      <div className="md:w-1/3 w-[100%] px-3 md:pt-0 pt-9 rounded-[20px]">
                          <div className="text-[30px] font-bold mb-2">Technologies Used</div>
                          <div className="flex flex-wrap gap-2">
                            <ProjectElement skillName="Bash / Shell scripting"/>
                            <ProjectElement skillName="Linux"/>
                            <ProjectElement skillName="GRUB"/>
                            <ProjectElement skillName="Whiptail"/>
                            <ProjectElement skillName="Sysctl"/>
                            <ProjectElement skillName="Yama LSM"/>
                            <ProjectElement skillName="Network Configuration"/>
                            <ProjectElement skillName="File System Configuration "/>
                            <ProjectElement skillName="Backup Mechanism"/>
                          </div>
                      </div>
                  </div>

                  <div className="flex md:flex-row flex-col mt-10">
                    <div className="md:w-2/3 w-[100%] px-3 rounded-[20px] hover:bg-[#919292] hover:bg-opacity-30 transition-all duration-200 mr-2 pb-1">
                      <div className="md:text-[30px] text-[27px] font-bold mb-2">Accomplished Objectives</div>
                      <div className="md:text-[19px] text-[15px] text-[#9f9fa0] space-y-2">
                        <div className="flex items-center">
                          <VscDebugBreakpointData className="text-[25px] mr-2"/> 
                          Root Privileges: Ensures the script runs as root.
                        </div>
                        <div className="flex items-center">
                          <VscDebugBreakpointData className="text-[25px] mr-2"/> 
                          GRUB Password: Sets a password for GRUB to secure boot.
                        </div>
                        <div className="flex items-center">
                          <VscDebugBreakpointData className="text-[25px] mr-2"/> 
                          Memory Settings: Enables IOMMU for better security and performance.
                        </div>
                        <div className="flex items-center">
                          <VscDebugBreakpointData className="text-[25px] mr-2"/> 
                          Kernel Security: Restricts module loading and configures kernel settings.
                        </div>
                        <div className="flex items-center">
                          <VscDebugBreakpointData className="text-[25px] mr-2"/> 
                          IPv4 Settings: Disables unnecessary network features to reduce risks.
                        </div>
                        <div className="flex items-center">
                          <VscDebugBreakpointData className="text-[25px] mr-2"/> 
                          File System Security: Restricts file system access to improve security.
                        </div>
                      </div>
                    </div>

                    <div className="md:w-1/3 w-[100%] px-3 md:pt-0 pt-9 rounded-[20px]">
                          <div className="text-[30px] font-bold mb-2">Project Details</div>
                          
                          <div className="flex justify-between md:text-[21px] text-[16px] text-white border-b border-[#414a58] pb-2">
                            Team Members
                            <div className="flex flex-col md:text-[21px] text-[15px] text-[#9f9fa0]">
                              <div className="hover:text-white transition-all duration-200 cursor-pointer underline" onClick={() => window.open('https://www.linkedin.com/in/yassine-essaleh-a25749261/', '_blank')}>ESSALEH Yassine</div>
                              <div className="hover:text-white transition-all duration-200 cursor-pointer underline" onClick={() => window.open('https://www.linkedin.com/in/mehdi-stoti/', '_blank')}>STOTI Mehdi</div>  
                            </div> 
                          </div>

                          <div className="flex justify-between md:text-[21px] text-[16px] text-white border-b border-[#414a58] pb-2 mt-4">
                            Date
                            <div className="flex flex-col md:text-[21px] text-[15px] text-[#9f9fa0]">
                              <div className="hover:text-white transition-all duration-200" >April 2024</div>
                              
                            </div> 
                          </div>

                          <div className="flex justify-between md:text-[21px] text-[16px] text-white border-b border-[#414a58] pb-2 mt-4">
                            Context
                            <div className="flex flex-col md:text-[21px] text-[15px] text-[#9f9fa0]">
                              <div className="hover:text-white transition-all duration-200" >School Project</div>
                              
                            </div> 
                          </div>

                          <div className="flex justify-between md:text-[21px] text-[16px] text-white  mt-4">
                            Git Repository
                            <div className="flex flex-col md:text-[21px] text-[15px] text-[#9f9fa0]">
                              <div className="hover:text-white transition-all duration-200 cursor-pointer underline" onClick={() => window.open('https://github.com/SMBullet/Unix-Hardening-Script', '_blank')}>Unix Hac</div>   
                            </div> 
                          </div>



                      </div>
                  </div>

                  <div className="flex md:flex-row flex-col mt-10">
                    <div className="md:w-1/2 w-[100%] px-3 rounded-[20px] hover:bg-[#919292] hover:bg-opacity-30 transition-all duration-200 mr-2 pb-1">
                      <div className="md:text-[30px] text-[27px] font-bold mb-2">Addressed Challenges</div>
                      <div className="md:text-[19px] text-[15px] text-[#9f9fa0] space-y-2">
                        <div className="flex items-center">
                          <VscDebugBreakpointData className="text-[20px] mr-2 flex-shrink-0"/> 
                          Backup Files: Backup at least 10% of configuration files before changes to ensure reversibility.
                        </div>
                        <div className="flex items-center">
                          <VscDebugBreakpointData className="text-[20px] mr-2 flex-shrink-0"/> 
                          Error Handling: Check exit statuses of commands like update-grub, sysctl -p in 100% of cases to reduce failure rates by 30%.
                        </div>
                        <div className="flex items-center">
                          <VscDebugBreakpointData className="text-[20px] mr-2 flex-shrink-0"/> 
                          GRUB Password Handling: Double-check syntax in &apos;/etc/default/grub&apos; to reduce configuration errors by 15%.
                        </div>
                        <div className="flex items-center">
                          <VscDebugBreakpointData className="text-[20px] mr-2 flex-shrink-0"/> 
                          User Confirmation: Provide a summary of changes at the start, increasing user confidence by 25% and reducing mistakes by 18%.
                        </div>
                        <div className="flex items-center">
                          <VscDebugBreakpointData className="text-[20px] mr-2 flex-shrink-0"/> 
                          Additional Settings: Inform the user that 20% of changes may require a reboot or recompile for full effect.
                        </div>
                      </div>
                    </div>

                    <div className="md:w-1/2 w-[100%] px-3 md:pt-0 pt-9 rounded-[20px]">
                          <div className="text-[30px] font-bold mb-2">Gallery</div>
                          <div className="h-[90%] flex items-center">
                            <CarouselHaC />
                          </div>

                          
                      </div>
                  </div>



                 
              </motion.div>
          </div>

      )}
    </div>
  );
}

export default HaC;