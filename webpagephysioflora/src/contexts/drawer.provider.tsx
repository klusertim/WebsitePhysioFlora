import {useState } from "react";
import { DrawerContext } from "./drawer.context";


export default function DrawerProvider({children} : {children:JSX.Element}){
    const [drawerOpen, setDrawerOpen] = useState(false);

    return(
        <DrawerContext.Provider value={{drawerOpen, setDrawerOpen}}> 
            {children}
        </DrawerContext.Provider>
    );
}

