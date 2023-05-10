import { createStyles, Flex, Title, Transition, Box, Grid, Image, Group, Stack, useMantineTheme } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import LayeredWaves from "../layeredWaves"
import offerData from "./offer.data";
import FloraTitle from "../floraTitle";
import {Element} from 'react-scroll';
import OfferElement from "./offerElement";
import { useMediaQuery } from "@mantine/hooks";


const useStyles = createStyles((theme) => ({
   
  }));

export default function OfferPage(){

    const {classes} = useStyles();
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();
    const isSmallDevice = useMediaQuery(theme.fn.smallerThan("sm").replace("@media", ""));
  //   const ref = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setOpened(true);
  //       }
  //     },
  //     {
  //       root: null,
  //       rootMargin: '-200px',
  //       threshold: 1 // Intersection ratio threshold for triggering action
  //     }
  //   );

  //   if (ref.current) {
  //     observer.observe(ref.current);
  //   }

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, [ref]);

    return (
        <Element name="offer" marginHeight={-1000}>
            <Flex w="100vw" m={0} justify="center" align="flex-start" direction="column" p={0} pt="xl" mt={-0.257} >
              <FloraTitle title={offerData.title} speech={offerData.speech} />
              <Flex w="100vw"  align="center" wrap="nowrap" direction="row-reverse">
                <Flex w={isSmallDevice ? "100vw" : "70vw"}  pt="10vh" pb="10vh" pl="20vw" pr="0vw" justify="center" align= "flex-start" direction="column">
                    {offerData.offerArr.map(({title, description, icon}, i) => (
                        <OfferElement title={title} description={description} icon={icon} key={i}/>
                    )
                    )}

                </Flex>
                <Flex style={{display: isSmallDevice ? "none" : "flex"}} maw="40vw" >
                  <Image src="offer/physioImage.jpg"/>
                </Flex>
                </Flex>
            </Flex>
        </Element>
    )
}