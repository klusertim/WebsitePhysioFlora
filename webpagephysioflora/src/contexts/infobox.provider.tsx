import {useState } from "react";
import { InfoBoxContext } from "./infobox.context";


export default function InfoBoxProvider({children} : {children:JSX.Element}){
    const [infoBoxOpen, setInfoBoxOpen] = useState(false);

    return(
        <InfoBoxContext.Provider value={{infoBoxOpen, setInfoBoxOpen: (b: boolean) => setInfoBoxOpen(b)}}> 
            {children}
        </InfoBoxContext.Provider>
    );
}