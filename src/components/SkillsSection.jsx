import React from 'react';
import {SkillCard } from "./index";
import { skills } from "../util/constants";

function SkillsSection() {
    return (
    <>
        <h1 className=' text-white font-bold text-3xl my-14 text-center' id='skills'>Skills</h1>
        <section className=" lg:flex block gap-5 " id="about">
            <div className="grid md:basis-2/4 md:grid-cols-2 grid-cols-1 gap-10 md:p-3 animate__animated animate__slideInLeft">
                {skills.map((skill) => (
                    <SkillCard key={skill.title} skill={skill}/>
                ))}
            </div> 

            <div className="flex flex-col justify-between p-3 md:basis-2/4 animate__animated animate__slideInDown">
                <div className="flex flex-col gap-8 my-10">
                    <h1 className=" text-white text-3xl font-bold md:text-left text-center">About Me</h1>
                    <p className="text-slate-300">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Quam voluptatibus harum veritatis blanditiis placeat ratione 
                        nostrum quidem dolorum nulla excepturi! Repellat minima 
                        corporis veniam possimus quidem autem hic, odit dolores!
                    </p>
                </div>
                <div className="flex flex-col gap-8 my-10">
                    <h1 className=" text-white text-3xl font-bold md:text-left text-center">How I Work</h1>
                    <p className="text-slate-300">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Quam voluptatibus harum veritatis blanditiis placeat ratione 
                        nostrum quidem dolorum nulla excepturi! Repellat minima 
                        corporis veniam possimus quidem autem hic, odit dolores!
                    </p>
            </div>
            </div>
      </section>
    </>
    );
}

export default SkillsSection;