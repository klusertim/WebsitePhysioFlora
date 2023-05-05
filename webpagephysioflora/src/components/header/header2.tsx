import { Container, createStyles, Drawer, Flex, MediaQuery, Text, Affix, Group, Button, Box, Stack, useMantineTheme } from "@mantine/core";
import {menuItems, PathsType} from './header.data'
import Logo from "../logo";
import DrawerMenu from "../drawer";
import DrawerProvider from "@/contexts/drawer.provider";
import {Link} from 'react-scroll';
import {useRouter} from 'next/router';
import NextLink from 'next/link'; // because of default export we can import with different name
import { useEffect, useState } from "react";
import {animateScroll} from "react-scroll"
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
    progressBar:{
        backgroundColor: theme.colors.pink
    },
    links: {
        fontFamily: theme.headings.fontFamily,
        '&:hover': {
            color: theme.colors.pink,
        },
        
    },
    blur:{
        backdropFilter: "blur(5px)",
        zIndex: 3
        // filter: "blur(5px)",
        // backgroundColor: "white"
    },
  
  }));


export default function Header({...props}){
    const {classes} = useStyles();
    const mobileBound:number = 820;
    const {locale}:{locale?:string} = useRouter();
    const [lastYState, setLastYState] = useState(0);
    const {scrollY:scroll, scrollYProgress} = useScroll();
    let t = useSpring(scrollYProgress, {stiffness: 100, damping: 50});
    let w = useTransform(t, [0, 1], ["0vw", "100vw"])

    const theme = useMantineTheme();
    const isSmallDevice = useMediaQuery(theme.fn.smallerThan("sm").replace("@media", ""));

    // subscribe to motion value
    const [colorWhite, setColorWhite] = useState(false);
    useMotionValueEvent(scroll, "change", (latest) => {setColorWhite(latest > 100)});


    useEffect(() => {
        animateScroll.scrollTo(lastYState, {delay: 0, duration: 0})
    }, [locale, lastYState]);


    return(
        <DrawerProvider>
            <>
                <MediaQuery largerThan="sm" styles={{display: "none"}}>
                    <DrawerMenu/>
                </MediaQuery>
                
                    <Affix position={{top: 0, left:0}} zIndex={3} style={{display: isSmallDevice ? "none":"flex"}} /* for the blur */>
                        <Box className={classes.blur} h={120} w="100vw"/> 
                    </Affix>
                
                    <Affix position={{top: 0, left:0}} zIndex={4} style={{display: isSmallDevice ? "none":"flex"}}>
                        <Stack spacing={0}>
                        
                        <Group pl="5%" position="apart" w="100vw" pt={20} pb={10} noWrap grow bg={colorWhite ? "white" : "none"} opacity={0.9} h={120}>
                            <Link to={"home"} spy={true} smooth={true} duration={500}>
                                <Logo />
                            </Link>
                            <Group 
                            noWrap
                            // gap={40}
                            // className= {classes.items}
                            position="center"
                            mr="15vw"
                            ml={50}
                            spacing={50}
                            >
                                {/* <Text>{scroll.y}</Text> */}
                                {menuItems?.map(({path, label}, i) => (
                                    <Link to={path!} spy={true} smooth={true} duration={500} key={i} offset={-80}>
                                        <Text className={classes.links} key={i} weight="bold">
                                            {label[locale! as keyof PathsType["label"]].toUpperCase()}
                                        </Text>
                                    </Link>
                                ))}
                                
                                <Text component={NextLink} href="" locale= {locale=="de"? "fr": "de"} className={classes.links} weight="bold" onClick={() => setLastYState(scroll.get())}/* NextLink as component to not inherit style */>
                                    {locale == "de" ? "FRANÇAIS" : "DEUTSCH"}
                                </Text>
                            </Group>
                        </Group>
                        <motion.div style={{width: w, height: "2px", marginTop: "-2px", zIndex: 5}} className={classes.progressBar}/>
                        </Stack>
                    </Affix>
            </>
        </DrawerProvider>

       

        
    );
}