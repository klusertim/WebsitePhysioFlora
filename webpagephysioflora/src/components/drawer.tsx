import { DrawerContext } from "@/contexts/drawer.context";
import { Burger, Drawer, Group, Stack, Text, Title, Overlay, createStyles, Affix, Box, Flex } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import {menuItems, PathsType} from './header/header.data';
import {Link, animateScroll} from "react-scroll";
import { useRouter } from "next/router";
import { NextLink } from "@mantine/next";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Logo from "./logo";


const useStyles = createStyles((theme, _params, getRef) => ({
    overlay:{
        zIndex: 20
    },
    link:{
        cursor: "pointer"
    },
    langLink:{
        textDecoration: "none",
        color: "black"
    },
    progressBar:{
        backgroundColor: theme.colors.pink
    },
}))

export default function DrawerMenu({...others}){

    // const [drawerOpen, setDrawerOpen] = useState(false);
    const {drawerOpen, setDrawerOpen} = useContext(DrawerContext);
    const {classes} = useStyles();
    const {locale} = useRouter();
    const [lastYState, setLastYState] = useState(0);
    const {scrollY:scroll, scrollYProgress} = useScroll();
    let t = useSpring(scrollYProgress, {stiffness: 100, damping: 50});
    let w = useTransform(t, [0, 1], ["0vw", "100vw"])




    useEffect(() => {
        //console.log("lastYState ", lastYState);
        animateScroll.scrollTo(lastYState, {delay: 0, duration: 0})
    }, [locale]);


    return(
        <Flex {...others} justify="center" pt={50}>
                {/* <Group position="right" p="lg" > */}
                <Affix position={{top: 20, right:20}} zIndex={4} {...others}>
                    <Burger opened={drawerOpen!} onClick={() => setDrawerOpen!(!drawerOpen)} >Open Drawer</Burger>
                </Affix>
                {/* </Group> */}
                    <motion.div style={{width: w, height: "2px", position: "fixed", top: 0, left: 0, zIndex: 10}} className={classes.progressBar}/>
               
            <Logo/>
            <Drawer zIndex={2}
                opened={drawerOpen || false}
                onClose={() => setDrawerOpen!(false) }
                padding="xs"
                size = "100%" //width
                withCloseButton={false}                
                // transitionDuration={250}
                // transitionTimingFunction="ease"
                // overlayBlur={1}
            >
                <Stack justify="center" align="center" pt={50}>

                    <Title order={1}>Menu</Title>
                    {menuItems?.map(({path, label}, i) => (
                        <Link to={path!} spy={true} smooth={true} duration={500} key={i} onClick={() => setDrawerOpen(false)} >
                            <Title order={3} className={classes.link} >{locale=="fr" ? label.fr.toUpperCase() : label.de.toUpperCase()}</Title>
                        </Link>
                    )
                    )}
                    <Box className={classes.langLink} component={NextLink} href="" locale= {locale=="de"? "fr": "de"} onClick={() => (setLastYState(scroll.get()), setDrawerOpen(false))} legacyBehavior>
                        <Title order={3}>
                                {locale == "de" ? "FRANÇAIS" : "DEUTSCH"}
                        </Title>
                    </Box>
                </Stack>
            </Drawer>
        </Flex>
    )

}