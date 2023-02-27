import Header from "@/components/header/header";
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
        <LocationMap/>
        </>
    )
}