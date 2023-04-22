import ContactPage, { Bubble } from "@/components/contact/contact";
import Header from "@/components/header/header";
import LayeredWaves from "@/components/layeredWaves";
import OfferPage from "@/components/offer/offer";
import TeamPage from "@/components/team";
import WelcomePage from "@/components/welcome";
import { createStyles, Flex } from "@mantine/core";
import LocationMap from "src/components/locationMap"
import { LoadScript } from "@react-google-maps/api";
import BigImg from "@/components/BigImg";

// const useStyles = createStyles(({theme}) => ({
//     container: {
        
//     }
// }))

export default function Index(){

    return(
        <>
        <Header/>
        <WelcomePage/>
        <BigImg/>
        <OfferPage/>
        <TeamPage/>
        <ContactPage/>
        <LocationMap/>
        </>
    )
}