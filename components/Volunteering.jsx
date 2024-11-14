"use client";
import React from 'react';
import { motion } from 'framer-motion';

import VolunteeringCard from "./VolunteeringCard";

const Volunteering = () => {
    return (
        <>
            <motion.div 
            id='volunteering' 
            className='text-[40px] font-bold text-black dark:text-white mb-1 md:max-w-[60%] max-w-[90%] mx-auto mt-[50px]'
            initial={{ opacity: 0 }} 
            transition={{ duration: 0.7 }} 
            animate={{opacity: 1, y: -20}}     
            >
            Volunteering and Extracurricular Activities
            </motion.div>
            
            
            <div className='flex md:flex-row gap-8 flex-col md:max-w-[70%] max-w-[90%] mx-auto '>
                <div className='md:w-1/2'>
                    <VolunteeringCard
                        imageSrc="/images/Club Photos/IMG_7223.png"
                        quote="Responsible for all event-related activities at the GCDSTE club"
                        authorName="Head of the Events Unit"
                        authorCompany="Marrakech & Essaouira, Morocco"
                        showLinkedinIcon={true}
                        linkedinUrl="https://www.linkedin.com/feed/update/urn:li:activity:7193672594653413376/"
                    />
                    <br />

                    <div className='h-[15%]'></div>
                    
                    <VolunteeringCard
                        imageSrc="/images/Android/android.jpg"
                        quote="Dev Cell member in the Crisis Club, building a university app for ENSA students"
                        authorName="Android Developer"
                        authorCompany="Marrakech, Morocco"
                        showLinkedinIcon={true}
                        linkedinUrl="https://crisi5.com/home"
                        />
                    </div>

                    <div className='md:w-1/2 w-full flex flex-row items-center justify-center'>

                        <div className='h-[50%] max-w-[100%] w-full'>
                            <VolunteeringCard
                                imageSrc="/images/Basketball/basketball team1.jpeg"
                                quote="Played on the ENSA basketball team during the 2022-2023 season"
                                authorName="Number 8, Point Guard"
                                authorCompany="Marrakech, Morocco"
                            />
                        </div>
                        
                    
                        
                </div>


               
                
            </div>
            
            <div className='h-16'></div>

            
       </> 
    );
}   

export default Volunteering;
