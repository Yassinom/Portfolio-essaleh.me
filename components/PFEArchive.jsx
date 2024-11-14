import React, { useState } from "react";

import ProjectElement from "@/components/ProjectElement";
import CarouselPFEArchive from "./CarouselPFEArchive";

import { motion } from "framer-motion";
import { IoIosArrowDropdown } from "react-icons/io";
import { VscDebugBreakpointData } from "react-icons/vsc";







const PFEArchive = () => {
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
                        <div className="text-3xl font-bold">PFE Archive (DevSecOps Project)</div>
                        <div className="text-lg text-gray-700 dark:text-gray-400">2024</div>
                      </div>
                        <div className="md:w-1/3 w-fullmr-4 rounded-[30px] flex flex-col justify-center hover:cursor-pointer" onClick={toggleModal}>
                            <img src="/images/PFEArchive.png" alt="GatoSOC" className="rounded-[30px]" />
                        </div>


                        <div className="flex flex-col md:w-[70%] md:px-[1%] pt-1 justify-between">

                            <div>
                                <div className="mb-3 flex justify-between max-w-[99%] items-center">
                                <div className="md:inline hidden text-3xl font-bold">PFE Archive (DevSecOps Project)</div>
                                <div className="md:inline hidden text-lg text-gray-700 dark:text-gray-400">2024</div>
                              </div> 
                              <div className="md:text-xl text-[17px] text-gray-700 dark:text-gray-400 ">
                              Microservices-based web app using Spring Boot and React, containerized with Docker, deployed on Kubernetes, and secured with Trivy and SonarQube in a Jenkins-driven DevSecOps CI/CD pipeline.                              </div>
                            </div>

                            <div className="flex justify-between items-center mt-[3%]">

                              <div className="flex flex-wrap md:gap-2 gap-1">
                                <ProjectElement skillName="Spring Boot"/>
                                <ProjectElement skillName="React JS"/>
                                <ProjectElement skillName="Tailwind CSS"/>
                                <ProjectElement skillName="Jenkins"/>
                                <ProjectElement skillName="SonarQube"/>
                                <ProjectElement skillName="Trivy"/>
                                <ProjectElement skillName="Docker"/>
                                <ProjectElement skillName="Kubernetes"/>   
                                 
                              </div>

                              <IoIosArrowDropdown
                                  className='text-[40px] hover:bg-slate-400 hover:bg-opacity-30 rounded-full hover:cursor-pointer transition-all duration-300 rotate-[-90deg] flex-shrink-0'
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
                  
                  <div className=" text-center text-[40px] font-bold mt-5">PFE Archive</div>
                  <div className="md:text-[20px] text-[15px] text-[#9f9fa0] text-center">A cutting-edge, microservices-driven web application built with advanced DevSecOps practices for unmatched security, scalability, and continuous delivery.</div>
                  <img 
                    src="/images/PFEArchive.png" 
                    alt="GatoSOC" 
                    height={100} 
                    className="rounded-[30px] mx-auto mt-5 md:max-w-[85%] max-w-[100%]"  
                  />

                  <div className="flex md:flex-row flex-col mt-14">
                      <div className="md:w-2/3 w-[100%] px-3 rounded-[20px] hover:bg-[#919292] hover:bg-opacity-30 transition-all duration-200 mr-2 pb-1">
                          <div className="text-[30px] font-bold ">Overview</div>
                          <div className="md:text-[21px] text-[15px] text-[#9f9fa0]">
                          The goal of this project is to manage PFE projects across the country and internationally from various universities, streamlining the archiving process and centralizing these essential projects. It facilitates knowledge sharing among students, professors, and academic communities.
                          <br/> <br />
                          This project is a microservices-based web application using Spring Boot and React, with each microservice containerized via Docker and deployed on Kubernetes. Security and quality tools like Trivy and SonarQube are integrated into a Jenkins-driven CI/CD pipeline, following DevSecOps principles to ensure security, scalability, and efficiency.

                          </div>
                      </div>

                      <div className="md:w-1/3 w-[100%] px-3 md:pt-0 pt-9 rounded-[20px]">
                          <div className="text-[30px] font-bold mb-2">Technologies Used</div>
                          <div className="flex flex-wrap gap-2">
                            <ProjectElement skillName="Spring Boot"/>
                            <ProjectElement skillName="React JS"/>
                            <ProjectElement skillName="Tailwind CSS"/>
                            <ProjectElement skillName="Jenkins"/>
                            <ProjectElement skillName="SonarQube"/>
                            <ProjectElement skillName="Trivy"/>
                            <ProjectElement skillName="Docker"/>
                            <ProjectElement skillName="Kubernetes "/>
                            <ProjectElement skillName="MySQL"/>

                          </div>
                      </div>
                  </div>

                  <div className="flex md:flex-row flex-col mt-10">
                    <div className="md:w-2/3 w-[100%] px-3 rounded-[20px] hover:bg-[#919292] hover:bg-opacity-30 transition-all duration-200 mr-2 pb-1">
                      <div className="md:text-[30px] text-[27px] font-bold mb-2">Accomplished Objectives</div>
                      <div className="md:text-[19px] text-[15px] text-[#9f9fa0] space-y-2">
                        <div className="flex items-center">
                          <VscDebugBreakpointData className="text-[20px] mr-2 flex-shrink-0"/> 
                          Developed a microservices-based web application using Spring Boot (backend) and React (frontend).
                        </div>
                        <div className="flex items-center">
                          <VscDebugBreakpointData className="text-[20px] mr-2 flex-shrink-0"/> 
                          Containerized the microservices using Docker and deployed it within a Kubernetes cluster.
                        </div>
                        <div className="flex items-center">
                          <VscDebugBreakpointData className="text-[20px] mr-2 flex-shrink-0"/> 
                          Integrated Jenkins to build and automate the CI/CD pipeline for continuous integration and deployment.
                        </div>
                        <div className="flex items-center">
                          <VscDebugBreakpointData className="text-[20px] mr-2 flex-shrink-0"/> 
                          Implemented vulnerability scanning with Trivy to ensure secure Docker images.
                        </div>
                        <div className="flex items-center">
                          <VscDebugBreakpointData className="text-[20px] mr-2 flex-shrink-0"/> 
                          Applied SonarQube for static code analysis, enhancing code quality and security.
                        </div>
                        <div className="flex items-center">
                          <VscDebugBreakpointData className="text-[20px] mr-2 flex-shrink-0"/> 
                          Designed a responsive frontend with React, ensuring a smooth user experience.
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
                              <div className="hover:text-white transition-all duration-200 cursor-pointer underline" onClick={() => window.open('https://www.linkedin.com/in/chouaib-berrah/', '_blank')}>BERRAH Chouaib</div>
                              <div className="hover:text-white transition-all duration-200 cursor-pointer underline" onClick={() => window.open('https://www.linkedin.com/in/moad-el-motassadeq-a31a5528b/', '_blank')}>EL MOTASSADEQ Moad</div>
                              <div className="hover:text-white transition-all duration-200 cursor-pointer underline" onClick={() => window.open('https://www.linkedin.com/in/abdelhakim-assiri-757985294/', '_blank')}>ASSIRI Abdelhakim</div>
                              <div className="hover:text-white transition-all duration-200 cursor-pointer underline" onClick={() => window.open('https://www.linkedin.com/in/brahim-knioui/', '_blank')}>KNIOUI Brahim</div>
                            </div> 
                          </div>

                          <div className="flex justify-between md:text-[21px] text-[16px] text-white border-b border-[#414a58] pb-2 mt-4">
                            Date
                            <div className="flex flex-col md:text-[21px] text-[15px] text-[#9f9fa0]">
                              <div className="hover:text-white transition-all duration-200" >Sept 2024 - Jan 2025</div>
                              
                            </div> 
                          </div>

                          <div className="flex justify-between md:text-[21px] text-[16px] text-white  pb-2 mt-4">
                            Context
                            <div className="flex flex-col md:text-[21px] text-[15px] text-[#9f9fa0]">
                              <div className="hover:text-white transition-all duration-200" >School Project</div>
                              
                            </div> 
                          </div>

                          {/* <div className="flex justify-between md:text-[21px] text-[16px] text-white  mt-4">
                            Report
                            <div className="flex flex-col md:text-[21px] text-[15px] text-[#9f9fa0]">
                              <div className="hover:text-white transition-all duration-200 cursor-pointer underline" onClick={() => window.open('/projects/GatoSOC.pdf', '_blank')}>GatoSOC</div>   
                            </div> 
                          </div> */}



                      </div>
                  </div>

                  <div className="flex md:flex-row flex-col mt-10">
                    <div className="md:w-1/2 w-[100%] px-3 rounded-[20px] hover:bg-[#919292] hover:bg-opacity-30 transition-all duration-200 mr-2 pb-1">
                      <div className="md:text-[30px] text-[27px] font-bold mb-2">Addressed Challenges</div>
                      <div className="md:text-[19px] text-[15px] text-[#9f9fa0] space-y-2">
                        <div className="flex items-center">
                          <VscDebugBreakpointData className="text-[20px] mr-2 flex-shrink-0"/> 
                          Getting schools and universities to use and adopt our platform.
                        </div>
                        <div className="flex items-center">
                          <VscDebugBreakpointData className="text-[20px] mr-2 flex-shrink-0"/> 
                          CI/CD Automation: Automating build, test, and deployment with Jenkins.
                        </div>
                        <div className="flex items-center">
                          <VscDebugBreakpointData className="text-[20px] mr-2 flex-shrink-0"/> 
                          Containerization and Deployment: Seamless Docker containerization and Kubernetes deployment.
                        </div>
                        <div className="flex items-center">
                          <VscDebugBreakpointData className="text-[20px] mr-2 flex-shrink-0"/> 
                          Security: Vulnerability scanning using Trivy.
                        </div>
                        <div className="flex items-center">
                          <VscDebugBreakpointData className="text-[20px] mr-2 flex-shrink-0"/> 
                          User Experience: Designing a responsive React frontend.
                        </div>
                      </div>
                    </div>

                    <div className="md:w-1/2 w-[100%] px-3 md:pt-0 pt-9 rounded-[20px]">
                          <div className="text-[30px] font-bold mb-2">Gallery</div>
                          <div className="h-[90%] flex items-center">
                            <CarouselPFEArchive />
                          </div>

                          
                      </div>
                  </div>



                 
              </motion.div>
          </div>

      )}
    </div>
  );
}

export default PFEArchive;