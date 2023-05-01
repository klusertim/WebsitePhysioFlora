import { createStyles, Flex, Title, Box, Transition, Grid, Group, Image, Stack, Text, Space, MediaQuery } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import {Element} from 'react-scroll';
import FloraTitle from "../floraTitle";
import teamData from "./team.data";
import TeamElementBig from "./teamElementBig";
import { useMediaQuery } from "@mantine/hooks";


const teamDataTitle ={
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
                    
                          <>
                            <FloraTitle title={teamDataTitle.title} speech={teamDataTitle.speech} />
                            <MediaQuery
                              smallerThan="sm"
                              styles={{display: "none"}}
                            >

                              <Grid m="10vw" mt="5vh" gutter={5}>
                                  {
                                    teamData.map((dataEl, i) =>
                                      (
                                        <Grid.Col span={12} lg={6} p="md" key={i}>
                                          <TeamElementBig data={dataEl} />
                                        </Grid.Col>

                                      )
                                    )
                                  }
                              </Grid>
                            </MediaQuery>
                            <MediaQuery
                              largerThan="sm"
                              styles={{display: "none"}}
                            >
                            <Box>
                              <Space h="lg"/>
                              <Stack p="lg" spacing="xl">
                                  {teamData.map((dataEl, i) => (
                                    <Stack align="center" key={i}>
                                      <Flex miw={200} maw={300} align="center" justify="center">
                                        <Image src={`team/${dataEl.image}.png`}/>
                                      </Flex>
                                      <Title order={3}>{dataEl.name}</Title>
                                      <Text>
                                          {dataEl.description.de}
                                      </Text>
                                    </Stack>
                                  ))}
                              </Stack>
                              </Box>
                            </MediaQuery>
                          </>
                </Box>
                {/* <LayeredWaves offsetY={0} rotation={180}/> */}
            </Flex>
        </Element>
    )
}