import { createContext, useContext, useEffect, useState } from "react";



const SectionContext = createContext()

const SectionProvider = ({children}) =>{

    const [activeSectionId , setActiveSectionId]  = useState("home")



    useEffect(() => {
       console.log(activeSectionId)
    


    } , [activeSectionId])


      


    return (
        <SectionContext.Provider value={{setActiveSectionId , activeSectionId}}>
            {children}
        </SectionContext.Provider>
    )
}

export const useSection = () =>  useContext(SectionContext)

export default SectionProvider