"use client";

import CardElement from "@/components/CardElement";

import { motion } from 'framer-motion';
import { FaShieldAlt, FaRedhat, FaPython, FaJava, FaPhp, FaJs, FaGit, FaDocker, FaJenkins, FaReact, FaDatabase, FaLinux  } from "react-icons/fa";
import { SiHackaday, SiKubernetes, SiSpringboot, SiWindows, SiOpenstack, SiFortinet } from "react-icons/si";
import { IoKeyOutline, IoHammer} from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { VscFilter, VscCode, VscTerminalBash  } from "react-icons/vsc";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { CgUndo } from "react-icons/cg";
import { GrServices, GrMysql,GrVmware   } from "react-icons/gr";
import { TbWorldWww } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { PiNetworkXDuotone } from "react-icons/pi";
import { MdAdminPanelSettings } from "react-icons/md";
import { GiChameleonGlyph } from "react-icons/gi";
import { SlChemistry } from "react-icons/sl";











const Skills = () => {
    return (
        <div id="skills" className='relative max-w-[60%] mx-auto mt-20'>
            <motion.div initial={{ opacity: 0 }} transition={{ duration: 0.7 }} animate={{opacity: 1, y: -20}} >
                
                <div className='text-[40px] font-bold text-black dark:text-white mb-12'>
                    Skills
                </div>

                <div className="flex flex-wrap gap-[2%]">
                    <div className="border border-black dark:border-[#404245] w-[49%] border-opacity-0 rounded-3xl py-4 px-4 shadow-md">
                        <div className="flex items-center text-[1.875rem] ml-[4%] text-black dark:text-white">
                            <FaShieldAlt className="dark:text-[#f1949d] text-[#e93140] font-bold pr-4 text-[3.5rem]" />
                            Security
                        </div>
                        <div className="flex flex-wrap gap-2 p-[4%]">
                            <CardElement Icon={SiHackaday} skillName="Penetration Testing" />
                            <CardElement Icon={IoKeyOutline} skillName="Cryptography" />
                            <CardElement Icon={FaRedhat} skillName="Ethical Hacking" />
                            <CardElement Icon={FaMagnifyingGlass} skillName="Forensics" />
                            <CardElement Icon={VscFilter} skillName="SOC" />
                            <CardElement Icon={IoHammer} skillName="Systems Hardening" />
                        </div>
                    </div>

                    <div className="border border-black dark:border-[#404245] w-[49%] border-opacity-0 rounded-3xl py-4 px-4 shadow-md ">
                        <div className="flex items-center text-[1.875rem] ml-[4%] text-black dark:text-white">
                            <CgUndo className="dark:text-[#f1949d] text-[#e93140] font-bold pr-4 text-[3.75rem]" />
                            DevSecOps
                        </div>
                        <div className="flex flex-wrap gap-2 p-[4%]">
                            <CardElement Icon={CgUndo} skillName="CI/CD Pipelines" />
                            <CardElement Icon={FaGit } skillName="git" />
                            <CardElement Icon={FaDocker } skillName="Docker" />
                            <CardElement Icon={SiKubernetes } skillName="Kubernetes" />
                            <CardElement Icon={FaJenkins } skillName="Jenkins" />
                            <CardElement Icon={GrServices} skillName="Microservices" />

                        </div>
                    </div>

                    <div className="border border-black dark:border-[#404245] w-[49%] border-opacity-0 rounded-3xl py-4 px-4 shadow-md mt-[2%]">
                        <div className="flex items-center text-[1.875rem] ml-[4%] text-black dark:text-white">
                            <VscCode className="dark:text-[#f1949d] text-[#e93140] font-bold pr-4 text-[3.75rem]" />
                            Programming
                        </div>
                        <div className="flex flex-wrap gap-2 p-[4%]">
                            <CardElement Icon={BiLogoCPlusPlus } skillName="C/C++" />
                            <CardElement Icon={FaPython} skillName="Python" />
                            <CardElement Icon={FaJava } skillName="Java" />
                            <CardElement Icon={FaPhp } skillName="PHP" />
                            <CardElement Icon={FaJs } skillName="JavaScript" />
                            <CardElement Icon={VscTerminalBash } skillName="Bash Scripting" />
                        </div>
                    </div>

                    

                    <div className="border border-black dark:border-[#404245] w-[49%] border-opacity-0 rounded-3xl py-4 px-4 shadow-md mt-[2%]">
                        <div className="flex items-center text-[1.875rem] ml-[4%] text-black dark:text-white">
                            <TbWorldWww className="dark:text-[#f1949d] text-[#e93140] font-bold pr-4 text-[3.5rem]" />
                            Web Development
                        </div>
                        <div className="flex flex-wrap gap-2 p-[4%]">
                            <CardElement Icon={FaReact } skillName="React JS" />
                            <CardElement Icon={RiTailwindCssFill} skillName="Tailwind CSS" />
                            <CardElement Icon={FaJs } skillName="JavaScript" />
                            <CardElement Icon={SiSpringboot } skillName="Spring Boot" />
                            <CardElement Icon={FaPhp } skillName="PHP" />
                            <CardElement Icon={GrMysql } skillName="SQL" />
                            <CardElement Icon={FaDatabase} skillName="NoSQL" />
                        </div>
                    </div>

                    <div className="border border-black dark:border-[#404245] w-[60%] border-opacity-0 rounded-3xl py-4 px-4 shadow-md mt-[2%] ml-[20%]">
                        <div className="flex items-center text-[1.875rem] ml-[4%] text-black dark:text-white">
                            <PiNetworkXDuotone className="dark:text-[#f1949d] text-[#e93140] font-bold pr-4 text-[4.5rem]" />
                            Cloud, Network & System Administration
                        </div>
                        <div className="flex flex-wrap gap-2 p-[4%]">
                            <CardElement Icon={MdAdminPanelSettings  } skillName="Active Directory" />
                            <CardElement Icon={FaLinux } skillName="Linux" />
                            <CardElement Icon={SiWindows  } skillName="Windows Server" />
                            <CardElement Icon={GrVmware } skillName="VMware ESXI" />
                            <CardElement Icon={SiOpenstack  } skillName="Open Stack" />
                            <CardElement Icon={GiChameleonGlyph  } skillName="GNS3" />
                            <CardElement Icon={SiFortinet  } skillName="FortiGate" />
                            <CardElement Icon={SlChemistry  } skillName="CloudLab" />
                        </div>
                    </div>
                </div>

            </motion.div>
        </div>
    )
}   

export default Skills;