import React from 'react'

export default function ServiceCard({service}) {
  return (
    <div className=" flex flex-col items-center justify-evenly lg:w-[350px] h-[300px] rounded-md  p-3 bg-slate-800">
        <div>
            <i className={`bi ${service.icon} text-sky-700 text-6xl`}></i>
        </div>
        <h1 className="text-white text-2xl font-medium text-center">{service.title}</h1>
        <p className="text-center text-slate-400">{service.summary}</p>
    </div>
  )
}
