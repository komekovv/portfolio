import React from 'react';
import { ProjectCard } from "./index";
import { projects } from "../util/constants";

function ProjectsSection() {
    return (
        <>
            <h1 className='text-white font-bold text-3xl my-14 text-center' id='projects'>Projects</h1>

            <section>
                <div className=" grid lg:grid-cols-3 grid-cols-1 gap-6 justify-between lg:p-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default ProjectsSection;