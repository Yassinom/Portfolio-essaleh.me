import React, { useEffect, useState } from 'react';
import { IoArrowUpOutline } from 'react-icons/io5';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`z-10 fixed md:bottom-5 bottom-20 right-[15.5px] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <button
                onClick={scrollToTop}
                className="bg-[#49478b] text-white rounded-full p-3 shadow-lg hover:bg-indigo-900 focus:outline-none transition duration-100 ease-in-out"
                aria-label="Scroll to top"
            >
                <IoArrowUpOutline size={24} />
            </button>
        </div>
    );
};

export default ScrollToTop;