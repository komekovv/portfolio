import React from 'react';

function Footer() {
    return (
        <footer 
            className=" bg-[#17293e] grid md:grid-cols-3 md:gap-0 gap-5  top-0 md:px-48 px-5 w-full h-48 md:justify-between justify-center items-center py-5 border-t border-slate-700">
                <div className='flex flex-col md:items-start items-center'>
                    <h1 className='font-bold text-2xl text-white'>Komekovv</h1>
                    <h3 className='text-white'>front-end Developer</h3>
                </div>
                <div className='flex justify-center gap-3'>
                    <div className=' flex justify-center items-center bg-sky-800 w-9 h-9 rounded cursor-pointer'>
                        <a href="https://instagram.com/kakamyrat_dev" target=''>
                            <i className="bi bi-instagram text-2xl text-white"></i>
                        </a>
                    </div>
                    <div className='flex justify-center items-center bg-sky-800 w-9 h-9 rounded cursor-pointer'>
                        <a href="https://linkedin.com/kakamyrat" target=''>
                            <i className="bi bi-linkedin text-2xl text-white"></i>
                        </a>
                    </div>
                    <div className='flex justify-center items-center bg-sky-800 w-9 h-9 rounded cursor-pointer'>
                        <a href="https://github.com/kakamyrat" target=''>
                            <i className="bi bi-github text-2xl text-white"></i>
                        </a>
                    </div>
                </div>
                <div>
                    <p className='text-slate-400'>© Copyright Kakamyrat. All rights reserved. 2023</p>
                </div>
        </footer>
    );
}

export default Footer;