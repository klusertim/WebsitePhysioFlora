import { createStyles, Flex, Title, Box, Transition, Grid, Group, Image, Stack, Text, Space, MediaQuery } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import {Element} from 'react-scroll';
import FloraTitle from "../floraTitle";
import teamData from "./team.data";
import TeamElementBig from "./teamElement";
import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";


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
                              <Grid m="10vw" mt="5vh" gutter="lg" >
                                  {
                                    teamData.map((dataEl, i) =>
                                      (
                                        <Grid.Col key={i} lg={6} >
                                          <TeamElementBig data={dataEl} />
                                        </Grid.Col>
                                      )
                                    )
                                  }
                                  
                              </Grid>
                            
                          </>
                </Box>
                {/* <LayeredWaves offsetY={0} rotation={180}/> */}
            </Flex>
        </Element>
    )
}