import { Center, createStyles, Overlay, Paper, Flex, Container, Affix } from "@mantine/core";
import InfoData from "./infoData";


const useStyles = createStyles((theme) => ({
    blur:{
        backdropFilter: "blur(5px)",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
    },
    paper:{
        backgroundColor: "white",
        opacity: 1,
    }
}))

export default function Info1(){
    const {classes} = useStyles()
    return(
        <Affix zIndex={2}>
            <Flex w="100vw" h="100vh" justify="center" align="center" className={classes.blur} pt={120}>
                <Paper w="70vw" h="70vh"  className={classes.paper}>
                    
               <InfoData/>
                </Paper>
            </Flex>
        </Affix>
    );
}