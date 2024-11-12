"use client";
import React from 'react';

import Hero from "@/components/Hero";
import StarryBackground from "@/components/StarryBackground";
import NavBar from "@/components/NavBar";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Social from "@/components/Social";
import DarkModeToggle from "@/components/DarkModeToggle";
import Projects from "@/components/Projects";
import HaC from "@/components/HaC";

import { createContext, useState } from 'react';


export const ThemeContext = createContext(null);

const Page = () => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => { setDarkMode(!darkMode); }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={`${darkMode && "dark"} font-title`}	>
        {darkMode ? <StarryBackground /> : <div className="bg-[#f5f5f5] fixed top-0 left-0 w-full h-full z-[-1]" />}
        <DarkModeToggle />
        <Social />
        <Hero />
        <NavBar />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        
        
      </div>
    </ThemeContext.Provider>
  )
}

export default Page;
