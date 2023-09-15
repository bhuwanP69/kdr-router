
import { useEffect, useState } from "react";
import BackToTop from "../components/BackToTop";
import Header from "../components/Header";

import { NavLink, Outlet } from "react-router-dom";
import { Link } from 'react-scroll';


  // dark mode 
  const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
    return (
      <div className={`dark-mode text-4xl ml-4 lg:ml-10 relative cursor-pointer mr-5 duration-500 `} onClick={toggleDarkMode}>
        <div className={`sun ${isDarkMode ? '' : 'hidden'}`}>
          <iconify-icon icon="ph:sun-thin"></iconify-icon>
        </div>
        <div className={`moon ${isDarkMode ? 'hidden' : ''}`}>
          <iconify-icon icon="ph:moon-thin"></iconify-icon>
        </div>
        <div className="ab-sun hidden font-mono bg-gray-700 px-2 py-1 rounded-lg text-white text-sm absolute -left-24 top-11 flex-nowrap whitespace-nowrap pointer-events-none">
          <p>Change theme</p>
        </div>
      </div>
    );
  };

export default function RootLayout() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); 

  // toogle nav 
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  // close nav auto
  const closeNav = () => {
    if (window.innerWidth < 1024) {
      setIsNavOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // Close the navigation menu when screen size is larger than or equal to 1024px
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };



  }, []);

  //dark mode 
  
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
     // Toggle the theme when the sun icon is clicked
  };

  useEffect(() => {
    // Add a class to the body based on the current theme
    document.body.classList.toggle("dark-theme", isDarkMode);
  }, [isDarkMode]);
  
  return (
    <div className={`root-layout ${isDarkMode ? 'dark' : ''}`}>
      <div className="header flex items-center justify-between  fixed top-0  h-20 z-30  ">
      <Header isDarkMode={isDarkMode} />
        <nav
          className={`nav items-center justify-items-center absolute top-24 left-10 right-96 cursor-pointer z-10  sm:w-11/12 w-10/12 h-96 pb-5  ${isDarkMode? 'bg-gray-100': 'bg-gray-300'} text-black  mt-4 text-md ${
            isNavOpen ? "grid  " : "hidden"
          } lg:flex lg:justify-between lg:text-base lg:relative  ${isDarkMode?'lg:bg-body-color lg:text-white':'lg:bg-white'} lg:nav-width  lg:w-screen lg:h-full lg:top-0  lg:-left-24   p-1 pl-5 pr-2 rounded-2xl `} id="nav"
        >
          <NavLink  to="/about"
            onClick={closeNav} className="hover:underline  underline-offset-8  hover:scale-105 duration-1000  " >About Us</NavLink>
          <NavLink  to="career"
            
            onClick={closeNav} className="hover:underline  underline-offset-8  hover:scale-105 duration-1000  " >Career</NavLink>
          <NavLink  to="/ourTeam"
            onClick={closeNav} className="hover:underline  underline-offset-8  hover:scale-105 duration-1000  " >OurTeam</NavLink>
          <NavLink  to="/quick-links"
           
            onClick={closeNav} className="hover:underline  underline-offset-8  hover:scale-105 duration-1000  " >Quick Links</NavLink>
          <NavLink  to="/services"
            onClick={closeNav} className="hover:underline  underline-offset-8  hover:scale-105 duration-1000  " >Services</NavLink>
         
          
          <NavLink to ="/contact" onClick={closeNav} className="Contact bg-black  text-white   rounded-xl p-2 hover:opacity-90 hover:scale-105 duration-1000 cursor-pointer transition-all  " >
            Contact Us
      </NavLink>

      {/* dark mode */}
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}   />

        </nav>
        <button onClick={toggleNav}>
        {
            isNavOpen ?  <div className="div  text-[41px] text-red-500 mr-10 cursor-pointer p-2">
            <iconify-icon icon="ph:x-fill"></iconify-icon>
      
          </div>  : <i className="fas fa-bars text-3xl mr-10 cursor-pointer p-2"></i>
           
          }
         
       
        </button>
      </div>
      
      <main>
        <Outlet />

      </main>
      <BackToTop/>
     
    </div>
  )
}