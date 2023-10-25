import React from 'react';
import { ServiceCard } from "./index";
import { services } from "../util/constants";

function ServicesSection() {
    return (
        <section className="lg:h-screen flex flex-col items-center" id='services'>
            <h1 className='text-white font-bold text-3xl my-14 lg:text-left text-center'>Services</h1>

            <div className="grid lg:grid-cols-3 grid-cols-1 lg:p-3 gap-6 h-full lg:items-center">
            {services.map((service) => (
                <ServiceCard key={service.title} service={service}/>
            ))}
            </div>
        </section>
    );
}

export default ServicesSection;