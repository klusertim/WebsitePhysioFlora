import { createStyles, Flex, Title } from "@mantine/core";
import LayeredWaves from "./layeredWaves"


const useStyles = createStyles((theme) => ({
   
  }));

export default function TeamPage(){

    const {classes} = useStyles();


    return (
        <>
            <Flex h="100vh" w="100vw" m={0} p={0} align="flex-start" justify="center" mt={-0.257}>
                <Title>Team</Title>
                {/* <LayeredWaves offsetY={0} rotation={180}/> */}
            </Flex>
        </>
    )
}