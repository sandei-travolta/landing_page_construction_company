import { createContext, useContext, useState } from "react";

const menuContext = createContext()


 const MenuProvider = ({children}) => {
    const [menu , setMenu ] = useState(false)
    const showMenu = () => setMenu(true)
    const hideMenu = () => setMenu(false)


    return (
        <menuContext.Provider value={{showMenu , hideMenu , menu  }} >
            {children}
        </menuContext.Provider>
    )
}


export const useMenu = () => useContext(menuContext)
export default MenuProvider