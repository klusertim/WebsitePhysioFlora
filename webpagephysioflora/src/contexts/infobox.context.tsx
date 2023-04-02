import { createContext } from "react";



interface Provider {
    infoBoxOpen: boolean,
    setInfoBoxOpen: ((_:boolean) => void),
    // infoBoxOpenFrench: boolean,
    // setInfoBoxOpenFrench: ((_:boolean) => void)
    // setDrawerOpen?: (x:boolean) => boolean
}

export const InfoBoxContext = createContext<Provider>({} as Provider); // provides the state to all the children, now DrawerMenu can use the state without passing it
