import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMobileAlt  } from "@fortawesome/free-solid-svg-icons";
import { useMenu } from "../context/MenuContext";
import { useSection } from "../context/SectionsContext";
import { useEffect  } from "react";

import { pageSections } from "../data/sectoins";

const NavigationLink = ({ children, sectionId }) => {
  const {activeSectionId ,setActiveSectionId} = useSection()
  return (
      <li 
          className={` lg:hover:text-main-primary uppercase text-base cursor-pointer ${activeSectionId === sectionId ? "text-main-primary" : "text-white"} `}
          onClick={() => { setActiveSectionId(sectionId) }} 
          >
        {children}
      </li>
  )
}


const Navbar = () => {
  const [nav , setNav] = useState(false)
  const { menu, showMenu , hideMenu} = useMenu()

  useEffect(() => {
    window.addEventListener("scroll" , () => {
      if(window.pageYOffset === 0){
        setNav(false)
      }else{
        setNav(true)
      }
    })
     
  } , [])


  return (
    <nav className={` bg-main-black drop-shadow-sm shadow-white z-50  ${nav ? "lg:bg-main-black" : "lg:bg-transparent"}  text-white fixed top-0 w-full transition-colors duration-300`}>
      <div className="container max-w-screen-2xl flex justify-between items-center h-16 lg:flex-row-reverse text-lg">
        
        <div>
          <FontAwesomeIcon 
                icon={faBars} 
                className="text-white text-2xl cursor-pointer lg:hidden" 
                onClick={menu ? hideMenu : showMenu}
                />
          <div className="hidden lg:block">
            <FontAwesomeIcon icon={faMobileAlt} className="pr-2 text-main-primary"/>
            <span>1-300-123-123</span>
          </div>
        </div>

        <ul className="gap-5 hidden lg:flex">

            {
              pageSections.map((section , ind) => {
                return(
                  <NavigationLink key={ind} sectionId={section.sectionId} >{section.sectionName}</NavigationLink>
                )
              })
            }

        </ul>

        <div>
            <div className="">
                <img src="/images/logo.png" alt="" />
            </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;


