import ContactPage, { Bubble } from "@/components/contact/contact";
import Header from "@/components/header/header";
import LayeredWaves from "@/components/layeredWaves";
import OfferPage from "@/components/offer/offer";
import TeamPage from "@/components/team/team";
import WelcomePage from "@/components/welcome";
import { createStyles, Flex } from "@mantine/core";
import LocationMap from "src/components/locationMap"
import { LoadScript } from "@react-google-maps/api";
import BigImg from "@/components/BigImg";
import Footer from "@/components/footer";
import Underlay from "@/components/underlay";

const useStyles = createStyles(() => ({
    container: {
        // zIndex: 0,
        backgroundColor: "white"
    }
}))

export default function Index(){
    const {classes} = useStyles();
    return(
        <>
        <Flex w="100vw" direction="column" className={classes.container} >
        <Header/>
        <WelcomePage/>
        <BigImg/>
        <OfferPage/>
        <TeamPage/>
        <ContactPage/>
        <LocationMap/>
        <Footer/>
        </Flex>
        <Underlay/>
        </>
    )
}