import LazyLoad from "react-lazy-load";
import { useEffect, useState } from "react";
import { Navbar, HeroSection, SkillsSection, ProjectsSection, ServicesSection, Loader, ContactSection, Footer } from "./components/index";

function App() {
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])

  return (
    <LazyLoad >

        <div className=" w-full h-full">

          {loading 
          ? (
            <Loader />
          ) : (
            <>
              <Navbar />
            
              <div className=" w-full md:px-28 lg:px-48 sm:px-10 px-4 mt-5">
                <HeroSection id="/"/>
                <SkillsSection id="about"/>
                <ProjectsSection id="projects"/>
                <ServicesSection id="services"/>
                <ContactSection id="contact"/>
              </div>
              
              <Footer />
            </>
          )
          }

        </div>
    </LazyLoad>
    
  );
}

export default App;
