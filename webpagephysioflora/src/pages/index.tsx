import ContactPage from "@/components/contact";
import Header from "@/components/header/header";
import LayeredWaves from "@/components/layeredWaves";
import OfferPage from "@/components/offer";
import TeamPage from "@/components/team";
import WelcomePage from "@/components/welcome";
import { createStyles, Flex } from "@mantine/core";
import LocationMap from "src/components/locationMap"

// const useStyles = createStyles(({theme}) => ({
//     container: {
        
//     }
// }))

export default function Index(){

    return(
        <>
        <Header/>
        <WelcomePage/>
        <OfferPage/>
        <TeamPage/>
        <ContactPage/>
        <LocationMap/>
        </>
    )
}