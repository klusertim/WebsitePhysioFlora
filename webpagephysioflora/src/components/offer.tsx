import { createStyles, Flex, Title, Transition, Box } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import LayeredWaves from "./layeredWaves"


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
        <>
            <Flex h="100vh" w="100vw" m={0} p={0} align="flex-start" justify="center" mt={-0.257} >
                <Box ref={ref}>
                    <Transition transition="fade" mounted={opened} onEnter={() => setOpened(true)} duration={2000} >
                        {(styles) => <Title style={styles}>Angebot</Title>}
                    </Transition>
                </Box>
                {/* <LayeredWaves offsetY={0} rotation={180}/> */}
            </Flex>
        </>
    )
}