import { createStyles, Flex, Title } from "@mantine/core";
import {Element} from 'react-scroll';


const useStyles = createStyles((theme) => ({
   
  }));

export default function ContactPage(){

    const {classes} = useStyles();


    return (
        <>
            <Element name="kontakt">

            <Flex h="100vh" w="100vw" m={0} p={0} align="flex-start" justify="center" mt={-0.257}>
                    <Title>Kontakt</Title>
                {/* <LayeredWaves offsetY={0} rotation={180}/> */}
            </Flex>
            </Element>
        </>
    )
}