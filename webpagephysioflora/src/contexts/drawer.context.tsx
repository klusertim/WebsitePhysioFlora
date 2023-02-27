import { createContext } from "react";

interface Provider {
    drawerOpen?: boolean,
    setDrawerOpen?: any // ?
    // setDrawerOpen?: (x:boolean) => boolean
}

export const DrawerContext = createContext<Provider>({}); // provides the state to all the children, now DrawerMenu can use the state without passing it
