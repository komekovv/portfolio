import React from 'react';
import { ServiceCard } from "./index";
import { services } from "../util/constants";

function ServicesSection() {
    return (
        <section className="md:h-screen flex flex-col items-center" id='services'>
            <h1 className='text-white font-bold text-3xl my-14 md:text-left text-center'>Services</h1>

            <div className="grid md:grid-cols-3 grid-cols-1 md:p-3 gap-6 h-full md:items-center">
            {services.map((service) => (
                <ServiceCard key={service.title} service={service}/>
            ))}
            </div>
        </section>
    );
}

export default ServicesSection;