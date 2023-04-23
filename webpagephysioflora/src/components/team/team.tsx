import { createStyles, Flex, Title, Box, Transition, Grid, Group, Image, Stack, Text, Space } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import {Element} from 'react-scroll';
import FloraTitle from "../floraTitle";


const teamData ={
    title:{
        de: "Team",
        fr: "Team"
    },
    speech:{
        de: "Wir sind für Sie da!",
        fr: "bla bla bla"
    }

}


const useStyles = createStyles((theme) => ({
   
  }));

export default function TeamPage(){

    const {classes} = useStyles();
    const [opened, setOpened] = useState(false);
    const ref = useRef(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setOpened(true);
            }
          },
          {
            root: null,
            rootMargin: '-200px',
            threshold: 1 // Intersection ratio threshold for triggering action
          }
        );
    
        if (ref.current) {
          observer.observe(ref.current);
        }
    
        return () => {
          observer.disconnect();
        };
      }, [ref]);


    return (
        <Element name="team" marginHeight={-1000}>
            <Flex w="100vw" m={0} justify="flex-start" direction="column" p={0} pt="xl" mt={-0.257} >
                <Box ref={ref}>
                    <Transition transition="fade" mounted={opened} onEnter={() => setOpened(true)} duration={2000} >
                        {(styles) => 

                          <>
                            <FloraTitle title={teamData.title} speech={teamData.speech} />
                            <Grid m="10vw" mt="5vh" gutter="md">
                                <Grid.Col span={12} sm={6} p="md">
                                    <Flex justify="flex-start" align="flex-start" wrap="nowrap" >
                                        <Image src="team/susanne.png" maw={300}/>
                                        <Space w="lg"/>
                                        <Stack justify="flex-start">
                                            <Title order={3}>Susanne Schneiter</Title>
                                            <Text>
                                            <>
                                            Beckenbodenrehabilitation für Frauen und Männer
                                            <br/>
                                            Narbenbehandlung
                                            <br/>
                                            Atemphysiotherapie
                                            <br/>
                                            Manuelle Lymphdrainage und Bandagen
                                            </>
                                            </Text>
                                        </Stack>
                                    </Flex>
                                </Grid.Col>
                                <Grid.Col span={12} sm={6} p="md">
                                    <Flex justify="flex-start" align="flex-start" wrap= "nowrap">
                                        
                                        <Image src="team/marlis.png" maw={300}/>
                                        <Space w="lg"/>
                                        <Stack >
                                            <Title order={3}>Marlis Arn</Title>
                                            <Text>
                                            Sekretärin
                                            </Text>
                                        </Stack>
                                    </Flex>
                                </Grid.Col>

                            </Grid>
                          </>
                        }
                    </Transition>
                </Box>
                {/* <LayeredWaves offsetY={0} rotation={180}/> */}
            </Flex>
        </Element>
    )
}