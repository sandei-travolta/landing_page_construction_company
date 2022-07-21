import { createContext, useContext, useEffect, useState } from "react";


const SectionsContext = createContext()

const SectionProvider = ({children}) =>{

    const [activeSectionId , setActiveSectionId]  = useState("home")

    useEffect(() => {
         console.log(activeSectionId)
       document.getElementById(activeSectionId).scrollIntoView( {behavior: "smooth"})

    } , [activeSectionId])


    return (
        <SectionsContext.Provider value={{setActiveSectionId , activeSectionId}}>
            {children}
        </SectionsContext.Provider>
    )
}

export const useSection = () =>  useContext(SectionsContext)

export default SectionProvider