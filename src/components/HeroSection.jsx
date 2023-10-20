import React from 'react';
import {  photo1 } from "../assets/index";
import 'animate.css/animate.min.css';

function HeroSection() {
    return (
        <section className="flex md:flex-row flex-col justify-between items-center md:px-3" id='/'>
            <div className="md:w-[45%] flex flex-col md:items-start items-center animate__animated animate__slideInLeft">
                <h1 className=" text-xl md:text-7xl text-center md:text-left text-white font-bold">Developing Web Apps For The Bright Future</h1>
                <p className=" text-slate-200 text-center md:text-left md:mt-16 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate repellat eaque minus eligendi libero nesciunt deserunt!</p>
                <button className=" w-36 bg-sky-800 text-white rounded-sm py-2 px-5 mt-5 mb-5 md:mt-10 md:mb-0 select-none">Take A Tour</button>
            </div>
            <div className=" md:min-w-[450px] h-[600px] md:mt-0 mt-5 animate__animated md:animate__slideInDown animate__slideInRight">
                <img src={photo1} alt="photo_" className="w-full h-full object-cover rounded-xl"/>
            </div>
       </section>
    );
}

export default HeroSection;