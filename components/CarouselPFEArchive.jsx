import React, { useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";

const CarouselPFEArchive = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        { src: "/images/PFE Archive images/jenkins.png", title: "Jenkins" },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full max-w-lg mx-auto">
            <div className="flex justify-center items-center">
                <div className="relative w-full">
                    <img 
                        src={slides[currentIndex].src} 
                        alt={slides[currentIndex].title} 
                        title={slides[currentIndex].title} 
                        className="w-full h-auto object-cover"
                    />
                    <div className="absolute bottom-4 flex justify-between items-center w-full px-4">
                        <IoIosArrowDropdown 
                            onClick={prevSlide} 
                            className="text-[30px] text-gray-700 rotate-[90deg] cursor-pointer hover:bg-gray-500 transition duration-300 ease-in-out rounded-full"
                        />
                        <IoIosArrowDropdown 
                            onClick={nextSlide} 
                            className="text-[30px] text-gray-700 rotate-[270deg] cursor-pointer hover:bg-gray-500 transition duration-300 ease-in-out rounded-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarouselPFEArchive;
