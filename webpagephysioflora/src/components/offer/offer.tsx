import { createStyles, Flex, Title, Transition, Box, Grid } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import LayeredWaves from "../layeredWaves"
import offerData from "./offer.data";
import FloraTitle from "../floraTitle";
import {Element} from 'react-scroll';
import OfferElement from "./offerElement";


const useStyles = createStyles((theme) => ({
   
  }));

export default function OfferPage(){

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
        <Element name="offer" marginHeight={-1000}>
            <Flex h="100vh" w="100vw" m={0} justify="flex-start" direction="column" p={0} pt="xl" mt={-0.257} >
                <Box ref={ref}>
                    <Transition transition="fade" mounted={opened} onEnter={() => setOpened(true)} duration={2000} >
                        {(styles) => 

                          <>
                            <FloraTitle title={offerData.title} speech={offerData.speech} />
                            <Grid ml="10vw" mt="5vh">
                              <Grid.Col span={3}>
                                <OfferElement/>
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