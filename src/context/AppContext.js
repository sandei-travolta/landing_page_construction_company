import { createContext, useContext, useState } from "react";

const AppContext = createContext()


 const AppStateProvider = ({children}) => {
    const [menu , setMenu ] = useState(false)

    const showMenu = () => setMenu(true)
    const hideMenu = () => setMenu(false)

    return (
        <AppContext.Provider value={{showMenu , hideMenu , menu}} >
            {children}
        </AppContext.Provider>
    )
}


export const useAppState = () => useContext(AppContext)
export default AppStateProvider