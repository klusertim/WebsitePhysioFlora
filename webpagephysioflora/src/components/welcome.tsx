import { Stack, Title, Group, Text, Image, Container, createStyles, Space, Flex, Button, Transition, Box, Paper, ActionIcon } from "@mantine/core"
import { useContext, useEffect, useRef, useState } from "react";
import { Link, animateScroll as scroll, Element } from "react-scroll";
// import Info1 from "./info/info1";
import Info2 from "./info/info2";
import LayeredWaves from "./layeredWaves";
import {RxInfoCircled} from "react-icons/rx";
import {InfoBoxContext } from "@/contexts/infobox.context";
import Info3 from "./info/info3";
import Info1 from "./info/info1";


const useStyles = createStyles((theme) => ({
    colorText:{
        color: theme.colors.pink,
    },
    containerBorder: {
        // border: "solid",
        // borderColor: theme.colors.cyan,
        maxHeight: "100vh"
    },
    button:{
        backgroundColor: theme.colors.pink
    },
    
  }));

export default function WelcomePage(){

    const {classes} = useStyles();
    const [opened, setOpened] = useState(false);
    const ref = useRef(null);
    const {infoBoxOpen, setInfoBoxOpen} = useContext(InfoBoxContext)



  useEffect(() => { // observe when the elemt is shown on the dom to ease in the font
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOpened(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Intersection ratio threshold for triggering action
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  const [showInfo, setShowInfo] = useState(true);
    return (
        <Element name="home">
          {/* <Info2/> */}
        
         <Group align="center" pl= "10%" pr="10vw" mt="15vh" pos="absolute" top={0} left={0} grow noWrap ref={ref} >
            
            <Transition transition="fade" mounted={opened} onEnter={() => setOpened(true)} duration={4000}>
                {(styles) => 
                <Stack justify="flex-start" align="flex-start" style={styles}>

                <Title align="left" maw="500px" size={40} miw={334}>Physiotherapie Ihres Vertrauens in Biel</Title>
                <Text align="left" size="xl" maw="500px">Ob <Text span weight="bold" className={classes.colorText}>Sportverletzung</Text>, <Text span weight="bold" className={classes.colorText}>Hexenschuss</Text> oder andere Beschwerden</Text>
                <Text align="left" size="lg" maw="500px">Unser Team hilft Ihnen gerne, wieder topfit zu werden.</Text>
                <Space h="3vh"/>
                <Flex w="100%" justify="center"  >
                  <Link to="kontakt" spy={true} smooth={true} duration={500}>
                    <Button className={classes.button} variant="filled"  opacity={0.9} >Kontaktieren Sie uns jetzt</Button>
                  </Link>
                </Flex>
                </Stack>
                }
            </Transition>
            <Transition transition="fade" mounted={opened} onEnter={() => setOpened(true)} duration={6000}>
            {(styles) => 
            <Flex align="center" justify="center" mb="lg" ml="5vw" mr={10} w="40vw" h="70vh">

                {!infoBoxOpen && <Flex w="40vw" h="70vh" style={{backgroundColor:"transparent"}}>
                    <Image src="undrawDancingPeople.svg" alt="dancing people" style={styles} />
                </Flex>}
                <Info1/>
            </Flex>
          }
            </Transition>

        </Group>
        <Flex h="100vh" w="100vw" m={0} p={0} align="flex-end" className={classes.containerBorder} >
           
            {/* <Space/> */}
            <LayeredWaves offsetY={0} rotation={0} />
        </Flex>
        
        </Element>
    )
}