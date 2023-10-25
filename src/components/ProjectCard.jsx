import React from 'react';

function ProjectCard({project}) {
    return (
        <div className='md:cursor-pointer'>
            <div className="lg:w-[350px] h-[250px] bg-slate-800 rounded-md md:mt-0 mt-3 animate__animated animate__slideInDown">
                <img src={project.img} alt="project_image" className='w-full h-full object-cover' />
            </div>
            <h2 className="text-center text-xl text-white font-semibold mt-2">{project.title}</h2>
        </div>
    );
}

export default ProjectCard;