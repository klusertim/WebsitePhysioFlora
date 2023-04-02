import {useState } from "react";
import { InfoBoxContext } from "./infobox.context";


export default function InfoBoxProvider({children} : {children:JSX.Element}){
    // const [infoBoxOpenGerman, setInfoBoxOpenGerman] = useState(false);
    // const [infoBoxOpenFrench, setInfoBoxOpenFrench] = useState(false);
    const [infoBoxOpen, setInfoBoxOpen] = useState(false);
    
    // function setGerman(b:boolean){
    //     setInfoBoxOpenGerman(b)
    // }
    // function setFrench(b:boolean){
    //     setInfoBoxOpenFrench(b)
    // }

    function setInfoBox(b:boolean){
        setInfoBoxOpen(b)
    }

    return(
        <InfoBoxContext.Provider value={{infoBoxOpen, setInfoBoxOpen: setInfoBox}}> 
            {children}
        </InfoBoxContext.Provider>
    );
}