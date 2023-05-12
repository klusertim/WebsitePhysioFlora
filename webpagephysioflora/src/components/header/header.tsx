import { createStyles, Flex, MediaQuery, Text, Affix, Group, Stack, useMantineTheme } from "@mantine/core";
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
import { useMediaQuery, useViewportSize } from "@mantine/hooks";

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
    const {locale}:{locale?:string} = useRouter();
    const [lastYState, setLastYState] = useState(0);
    const {scrollY:scroll, scrollYProgress} = useScroll();
    const {width} = useViewportSize();
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

    const ratio: number = width ? 120 * 1442 / width - 350 : 0;
    return(
        <DrawerProvider>
            <>
                <MediaQuery largerThan="sm" styles={{display: "none"}}>
                    <DrawerMenu/>
                </MediaQuery>
                

                    <Affix position={{top: 0, left:0}} style={{display: isSmallDevice ? "none":"flex"}} zIndex={3}>
                        <Flex>
                            
                            <motion.svg style={{position: "absolute", left: -2, width: "101%", overflow: "visible"}} viewBox={`0 ${-ratio} 1442 203`}  fill="none" xmlns="http://www.w3.org/2000/svg">
                            
                            <g id="Group 6">
                            <path 
                            fill={colorWhite ? "#C8E6FC" : "none"}
                            opacity={0.95}
                            id="box" d="M1441 312.973C1441 312.973 1427.9 312.897 1419.5 312.973C1357.22 313.53 1320.52 311.798 1260.52 324.984C1200.52 338.17 1140.68 354.384 1080.68 364.053C1020.68 373.625 960.52 376.555 900.52 364.542C840.52 352.43 780.68 325.472 720.68 320.198C660.68 315.021 600.52 331.626 540.52 346.277C480.52 360.928 420.68 350.184 360.68 346.277C300.68 342.37 248.98 380.135 196.5 379.719C144.02 379.303 99.5 340.277 61 346.277C22.5 352.277 1 364.053 1 364.053V0.442261H30.92C60.68 0.442261 120.52 0.442261 180.52 0.442261C240.52 0.442261 300.68 0.442261 360.68 0.442261C420.68 0.442261 480.52 0.442261 540.52 0.442261C600.52 0.442261 660.68 0.442261 720.68 0.442261C780.68 0.442261 840.52 0.442261 900.52 0.442261C960.52 0.442261 1020.68 0.442261 1080.68 0.442261C1140.68 0.442261 1200.52 0.442261 1260.52 0.442261C1320.52 0.442261 1380.68 0.442261 1410.92 0.442261H1441V312.973Z"/>
                            <motion.path 
                            style={{ pathLength: t }}
                            stroke={theme.colors.pink[0]}
                            strokeWidth={3}
                            id="line" d="M1,364.053C1,364.053 22.5,352.277 61,346.277C99.5,340.277 144.02,379.303 196.5,379.719C248.98,380.135 300.68,342.37 360.68,346.277C420.68,350.184 480.52,360.928 540.52,346.277C600.52,331.626 660.68,315.021 720.68,320.198C780.68,325.472 840.52,352.43 900.52,364.542C960.52,376.555 1020.68,373.625 1080.68,364.053C1140.68,354.384 1200.52,338.17 1260.52,324.984C1320.52,311.798 1357.22,313.53 1419.5,312.973C1427.9,312.897 1441,312.973 1441,312.973"/>
                            </g>
                            </motion.svg>
                            <Stack spacing={0}>
                            <Group pl="5%" pr="5%" position="apart" w="100vw" pt={10} pb={10} noWrap grow  opacity={0.9} h={110}>
                                <Link to={"home"} spy={true} smooth={true} duration={500}>
                                    <Logo />
                                </Link>
                                <Group 
                                noWrap
                                position="center"
                                mr="15vw"
                                ml={25}
                                spacing={50}
                                >
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
                            </Stack>
                        </Flex>
                    </Affix>
            </>
        </DrawerProvider>

       

        
    );
}