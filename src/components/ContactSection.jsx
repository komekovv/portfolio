import React from 'react';

function ContactSection() {
    return (
        <>
            <h1 className='text-white font-bold text-3xl text-center my-14'>Contact me</h1>
            <section className='flex flex-col  items-center w-full md:h-screen py-10' id='contact'>
                <form className='flex flex-col gap-5 md:w-3/5'>
                    <div className='grid md:grid-cols-2 gap-5'>
                        <div>
                            <input 
                                type="text" 
                                placeholder='Enter your name' 
                                className='w-full bg-gray-700 text-white rounded-sm py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            />
                        </div>
                        <div>
                            <input 
                                type="email" 
                                placeholder='Enter your email' 
                                className='w-full bg-gray-700 text-white rounded-sm py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            />
                        </div>
                    </div>
                    <div>
                        <textarea 
                            cols="50" 
                            rows="10" 
                            placeholder='Enter your message' 
                            className='w-full bg-gray-700 text-white rounded-sm py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        ></textarea>
                    </div>
                    <div className='flex justify-center w-full'>
                        <button className='py-3 bg-sky-800 w-1/3 text-white rounded-sm'>Send Message</button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default ContactSection;