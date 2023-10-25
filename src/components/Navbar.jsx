import {useState, useEffect} from 'react'
import { navbarLinks } from "../util/constants";
import { mycv } from '../assets';

function Navbar() {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
      };

    const [linkActive, setLinkActive] = useState('/');
    const [menuActive, setMenuActive] = useState(false);
    const [languageActive, setLanguageActive] = useState(false);
    const linkActiveHandler = id => setLinkActive(id);
    const menuActiveHandler = () => setMenuActive(prev => !prev);
    const languageActiveHandler = () => setLanguageActive(prev => !prev);

    useEffect(() => {
        const handleScroll = () => {
          const sectionOffsets = {}; // Object to store section offsets
    
          // Iterate over all sections and get their offsets
          navbarLinks.forEach((link) => {
            const sectionElement = document.getElementById(link.id);
            if (sectionElement) {
              sectionOffsets[link.id] = sectionElement.offsetTop;
            }
          });
    
          // Get the current scroll position
          const scrollPosition = window.scrollY;
          // Find the section based on the current scroll position
      let activeSection = "";
      Object.entries(sectionOffsets).forEach(([id, offset]) => {
        if (scrollPosition >= offset) {
          activeSection = id;
        }
      });

      // Update the active link state
      setLinkActive(activeSection);
    };

    // Add event listener to the scroll event
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    
    return ( 
        <nav className=" sticky bg-dark top-0 md:px-48 px-5 w-full min-w-full flex justify-between items-center py-5 border-b border-slate-700 z-40">
            <div className="text-white font-bold md:text-xl sm:text-lg text-sm md:cursor-pointer select-none">KOMEKOV</div>
            
            <ul className=" lg:flex hidden ">
            {navbarLinks.map((link) => (
                <li 
                  key={link.id} 
                  className={`ml-12  text-slate-50 transition-all cursor-pointer ${linkActive === link.id ? ' border-b' : 'link-hover'}`} 
                  onClick={() => {
                      linkActiveHandler(link.id)
                      scrollToSection(link.id)
                    }}
                   >
                    {link.title}
                </li>
            ))}  
            </ul>

            <div className='flex items-center gap-5'>
                <div className='flex lg:flex-row flex-row-reverse items-center gap-5'>
                    <div className=' text-white lg:cursor-pointer'><i className="bi bi-globe-central-south-asia"></i></div>
                    <div className='flex gap-2 items-center lg:cursor-pointer bg-sky-800 text-white py-2 px-3 select-none'>
                        <a href={mycv} download={mycv} className=' text-xs lg:text-sm'>Download CV</a> 
                        <div className='relative lg:cursor-pointer' > 
                            <i className="bi bi-download text-xs sm:text-sm" onClick={languageActiveHandler}></i>
                            {
                                languageActive && (
                                    <span className='absolute top-12 w-20 h-20 bg-black'></span>
                                )     
                            }
                        </div>
                    </div>
                </div>
                <div className='lg:hidden text-white lg:cursor-pointer' onClick={menuActiveHandler}>
                    <i className={`${ menuActive ? 'bi bi-x' : 'bi bi-list'} text-xl`}></i>
                </div>
            </div>

            {/* For mobile */}
            
            {
                menuActive && (
                    <div className='absolute top-0 right-0 w-2/4 h-screen bg-dark lg:hidden transition-all'>
                        <div className='flex items-center gap-8 px-3 w-full h-[80.8px] text-white border-b border-slate-700'>
                            <span onClick={menuActiveHandler}>
                                <i className=' bi bi-x text-white text-4xl'></i>
                            </span>
                            <span>
                                MENU
                            </span>
                        </div>
                        <ul className=" flex flex-col items-center w-full  ">
                            {navbarLinks.map((link) => (
                                <li 
                                  key={link.id} 
                                  className={`mt-4  text-slate-50 ${linkActive === link.id ? ' font-bold' : ' font-normal'}`} 
                                  onClick={() => {
                                    linkActiveHandler(link.id)
                                    scrollToSection(link.id)
                                  }} >
                                    {link.title}
                                </li>
                            ))}  
                        </ul>
                    </div>
                )  
            }  
        </nav> 
    );
}

export default Navbar;