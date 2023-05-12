import ContactPage, { Bubble } from "@/components/contact/contact";
import Header from "@/components/header/header";
import LayeredWaves from "@/components/layeredWaves";
import OfferPage from "@/components/offer/offer";
import TeamPage from "@/components/team/team";
import WelcomePage from "@/components/welcome/welcome";
import { createStyles, Flex } from "@mantine/core";
import LocationMap from "src/components/locationMap"
import { LoadScript } from "@react-google-maps/api";
import BigImg from "@/components/BigImg";
import Footer from "@/components/footer";
import Underlay from "@/components/underlay";
import { useEffect, useState } from "react";

const useStyles = createStyles(() => ({
    container: {
        // zIndex: 0,
        backgroundColor: "white",
        overflow: "hidden"
    }
}))

function PreloadImages({ imageSrcs, children } : {imageSrcs: string[], children: JSX.Element }){

    const [loaded, setLoaded] = useState(true);

    // useEffect(() => {
    //     const preloadImages = async () =>{
    //         const promises = imageSrcs.map(imageSrc => {
    //             return new Promise((resolve, reject) => {
    //                 const img = new Image();
    //                 img.src = imageSrc;
    //                 img.onload = resolve;
    //                 img.onerror = reject;
    //             })
    //         })
            
    //         await Promise.all(promises);
    //         setLoaded(true);
    //     } 
    //     preloadImages();

    // }, [imageSrcs])

    const handleLoading = () => {
        setLoaded(false)
    }

    // useEffect(() => {
    //     window.addEventListener("load", handleLoading);

    //     return () => window.removeEventListener("load", handleLoading)
    // }, [])

    // return loaded ? children : <p>Loading...</p>
    return children;
}

export default function Index(){
    const {classes} = useStyles();
    
    const images = [
        "PhysioWallpaper.jpg",
        "offer/physioImage.jpg",
        "welcomeImage.jpg"
    ]

    return(
        <PreloadImages imageSrcs={images}>
            <>
            <Flex w="100vw" direction="column" className={classes.container} >
            <Header/>
            <WelcomePage/>
            <OfferPage/>
            <BigImg url="PhysioWallpaper.jpg"/>
            <TeamPage/>
            <BigImg url="PhysioWallpaper.jpg"/>
            <ContactPage/>
            <LocationMap/>
            <Footer/>
            </Flex>
            <Underlay/>
            </>
        </PreloadImages>
    )
}