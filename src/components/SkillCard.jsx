import React from 'react';

function SkillCard({skill}) {
    return (
        <div className=" flex flex-col items-center justify-between md:w-[250px] h-[250px] md:rounded-none rounded-md p-3 bg-slate-800">
          <div className=" w-[100px] h-[100px]">
           
              <img src={skill.img} alt="react" className="w-full h-full object-contain" />
            
            </div>
          <h1 className="text-white text-2xl text-center">{skill.title}</h1>
          <p className="text-center text-slate-300">{skill.summary}</p>
        </div>
    );
}

export default SkillCard;