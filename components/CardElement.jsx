import React from 'react';

const CardElement = ({ Icon, skillName }) => {
    return (
        <div className="flex items-center md:px-3 px-2 md:py-2.5 py-1 border rounded-3xl text-black dark:text-white border:[#b1adad] border-black dark:border-white dark:hover:bg-white dark:hover:text-black hover:cursor-pointer hover:bg-[#1d1e1f] hover:text-white hover:duration-300 ">
            <div className="mr-2">
                <Icon className="md:text-2xl text-xl" />
            </div>
            <h2 className='md:text-[16px] text-[13px]'>{skillName}</h2>
        </div>
    );
};

export default CardElement;