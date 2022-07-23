import { createContext, useContext, useState } from "react";



const SectionContext = createContext()

const SectionProvider = ({children}) =>{

    const [activeSectionId , setActiveSectionId]  = useState("home")



    return (
        <SectionContext.Provider value={{setActiveSectionId , activeSectionId}}>
            {children}
        </SectionContext.Provider>
    )
}

export const useSection = () =>  useContext(SectionContext)

export default SectionProvider