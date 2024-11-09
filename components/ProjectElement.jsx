import React from 'react';

const ProjectElement = ({skillName}) => {
    return (
        <div className="flex items-center px-3 py-2 rounded-[20px] bg-slate-500 bg-opacity-20 shadow-md mr-2 hover:bg-[#6e6f70] transition-all duration-200">
            <div className="text-[16px]">{skillName}</div>
        </div>
    );
};

export default ProjectElement;