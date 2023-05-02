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
            <Flex w="100vw" m={0} justify="center" align="center" direction="column" p={0} pt="xl" mt={-0.257} >
                <Box ref={ref}>
                          <>
                            <FloraTitle title={offerData.title} speech={offerData.speech} />
                            <Grid m="10vw" mt="5vh" gutter="lg" justify="center">
                                {offerData.offerArr.map(({title, description}, i) => (
                                <Grid.Col  span={12} xs={12} sm={6} lg={6} xl={4} key={i}>
                                    <OfferElement title={title} description={description}/>
                                </Grid.Col>
                                )
                                )}

                            </Grid>
                          </>
                </Box>
                {/* <LayeredWaves offsetY={0} rotation={180}/> */}
            </Flex>
        </Element>
    )
}