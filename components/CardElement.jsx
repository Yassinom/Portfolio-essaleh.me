import React from 'react';

const CardElement = ({ Icon, skillName }) => {
    return (
        <div className="flex items-center px-3 py-2.5 border rounded-3xl text-black dark:text-white border:[#b1adad] border-black dark:border-white dark:hover:bg-white dark:hover:text-black hover:cursor-pointer hover:bg-[#1d1e1f] hover:text-white hover:duration-300 ">
            <div className="mr-2">
                <Icon className="text-2xl" />
            </div>
            <h2 className="">{skillName}</h2>
        </div>
    );
};

export default CardElement;