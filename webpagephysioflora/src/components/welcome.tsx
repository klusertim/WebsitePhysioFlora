import { Stack, Title, Group, Text, Image, Container, createStyles, Space, Flex, Button, Transition, Box, Paper, ActionIcon, BackgroundImage } from "@mantine/core"
import { useContext, useEffect, useRef, useState } from "react";
import { Link, animateScroll as scroll, Element } from "react-scroll";
// import Info1 from "./info/info1";
import Info2 from "./info/info2";
import LayeredWaves from "./layeredWaves";
import {RxInfoCircled} from "react-icons/rx";
import {InfoBoxContext } from "@/contexts/infobox.context";
import Info3 from "./info/info3";
import Info1 from "./info/info1";
import Info4 from "./info/info4";


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
    titleContainer:{
      zIndex: 1
    }
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


  function LayeredWavesSVG(){
    return(
      <Flex pos="absolute" bottom={0} left={0} right={0} w="100vw" justify="flex-end">
      <svg style={{width: "100%", overflow: "hidden", opacity: 0.9, zIndex:0}}  viewBox="0 0 1466 330" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 59.7766L30.6231 57.377C61.4091 54.873 122.655 50.0736 183.739 52.995C244.822 55.9163 305.742 66.767 366.826 60.82C427.909 54.873 489.155 32.337 550.239 21.1733C611.322 10.0096 672.242 10.427 733.326 18.878C794.409 27.4333 855.655 44.1266 916.739 39.9533C977.822 35.78 1038.74 10.74 1099.83 13.557C1160.91 16.2697 1222.16 46.9436 1283.24 49.3433C1344.32 51.743 1405.24 26.077 1435.54 13.1396L1466 0.306641V331.043H1435.54C1405.24 331.043 1344.32 331.043 1283.24 331.043C1222.16 331.043 1160.91 331.043 1099.83 331.043C1038.74 331.043 977.822 331.043 916.739 331.043C855.655 331.043 794.409 331.043 733.326 331.043C672.242 331.043 611.322 331.043 550.239 331.043C489.155 331.043 427.909 331.043 366.826 331.043C305.742 331.043 244.822 331.043 183.739 331.043C122.655 331.043 61.4091 331.043 30.6231 331.043H0V59.7766Z" fill="#C8E6FC"/>
        <path d="M0 82.7303L30.6231 80.9567C61.4091 79.2873 122.655 75.74 183.739 72.8187C244.822 69.8973 305.742 67.3933 366.826 69.48C427.909 71.5667 489.155 78.244 550.239 84.504C611.322 90.764 672.242 96.6067 733.326 105.371C794.409 114.03 855.655 125.507 916.739 132.497C977.822 139.383 1038.74 141.887 1099.83 144.078C1160.91 146.374 1222.16 148.46 1283.24 136.149C1344.32 123.733 1405.24 97.024 1435.54 83.565L1466 70.2103V331.044H1435.54C1405.24 331.044 1344.32 331.044 1283.24 331.044C1222.16 331.044 1160.91 331.044 1099.83 331.044C1038.74 331.044 977.822 331.044 916.739 331.044C855.655 331.044 794.409 331.044 733.326 331.044C672.242 331.044 611.322 331.044 550.239 331.044C489.155 331.044 427.909 331.044 366.826 331.044C305.742 331.044 244.822 331.044 183.739 331.044C122.655 331.044 61.4091 331.044 30.6231 331.044H0V82.7303Z" fill="#ACC3F9"/>
        <path d="M0 202.713L30.6231 197.288C61.4091 191.967 122.655 181.116 183.739 167.031C244.822 152.946 305.742 135.627 366.826 125.298C427.909 115.073 489.155 111.943 550.239 124.776C611.322 137.714 672.242 166.51 733.326 172.144C794.409 177.673 855.655 159.937 916.739 144.287C977.822 128.637 1038.74 115.073 1099.83 119.247C1160.91 123.42 1222.16 145.33 1283.24 154.407C1344.32 163.38 1405.24 159.624 1435.54 157.641L1466 155.763V331.043H1435.54C1405.24 331.043 1344.32 331.043 1283.24 331.043C1222.16 331.043 1160.91 331.043 1099.83 331.043C1038.74 331.043 977.822 331.043 916.739 331.043C855.655 331.043 794.409 331.043 733.326 331.043C672.242 331.043 611.322 331.043 550.239 331.043C489.155 331.043 427.909 331.043 366.826 331.043C305.742 331.043 244.822 331.043 183.739 331.043C122.655 331.043 61.4091 331.043 30.6231 331.043H0V202.713Z" fill="#B797E5"/>
        <path d="M0 212.104L30.6231 213.982C61.4091 215.964 122.655 219.72 183.739 211.895C244.822 204.07 305.742 184.664 366.826 182.682C427.909 180.804 489.155 196.454 550.239 203.444C611.322 210.33 672.242 208.661 733.326 208.765C794.409 208.974 855.655 211.06 916.739 205.322C977.822 199.584 1038.74 186.02 1099.83 183.725C1160.91 181.534 1222.16 190.507 1283.24 198.227C1344.32 205.844 1405.24 212.104 1435.54 215.234L1466 218.364V331.044H1435.54C1405.24 331.044 1344.32 331.044 1283.24 331.044C1222.16 331.044 1160.91 331.044 1099.83 331.044C1038.74 331.044 977.822 331.044 916.739 331.044C855.655 331.044 794.409 331.044 733.326 331.044C672.242 331.044 611.322 331.044 550.239 331.044C489.155 331.044 427.909 331.044 366.826 331.044C305.742 331.044 244.822 331.044 183.739 331.044C122.655 331.044 61.4091 331.044 30.6231 331.044H0V212.104Z" fill="#D05FB2"/>
        <path d="M0 289.31L30.6231 292.127C61.4091 294.84 122.655 300.474 183.739 303.917C244.822 307.36 305.742 308.821 366.826 299.013C427.909 289.31 489.155 268.444 550.239 262.497C611.322 256.654 672.242 265.627 733.326 268.131C794.409 270.53 855.655 266.357 916.739 264.583C977.822 262.914 1038.74 263.54 1099.83 267.713C1160.91 271.887 1222.16 279.607 1283.24 284.407C1344.32 289.31 1405.24 291.397 1435.54 292.44L1466 293.484V331.044H1435.54C1405.24 331.044 1344.32 331.044 1283.24 331.044C1222.16 331.044 1160.91 331.044 1099.83 331.044C1038.74 331.044 977.822 331.044 916.739 331.044C855.655 331.044 794.409 331.044 733.326 331.044C672.242 331.044 611.322 331.044 550.239 331.044C489.155 331.044 427.909 331.044 366.826 331.044C305.742 331.044 244.822 331.044 183.739 331.044C122.655 331.044 61.4091 331.044 30.6231 331.044H0V289.31Z" fill="#D70063"/>
      </svg>
      </Flex>
    );
  }

  const [showInfo, setShowInfo] = useState(true);
    return (
        <Element name="home">
          {/* <Info2/> */}
        <Info4/>
        <BackgroundImage src="welcomeImage.jpg" >
        <Flex w="100vw" h="100vh" justify="flex-end" direction="row" >
            {/* <Transition transition="fade" mounted={opened} onEnter={() => setOpened(true)} duration={4000}>
                {(styles) =>  */}
                <Stack justify="flex-start" align="flex-start"  mt="25vh" mr="10vw" className={classes.titleContainer}>

                <Title align="left" maw="500px" size={40} miw={334}>Physiotherapie Ihres Vertrauens in Biel</Title>
                <Text align="left" size="xl" maw="500px">Ob <Text span weight="bold" className={classes.colorText}>Sportverletzung</Text>, <Text span weight="bold" className={classes.colorText}>Hexenschuss</Text> oder andere Beschwerden</Text>
                <Text align="left" size="lg" maw="500px">Unser Team hilft Ihnen gerne, wieder topfit zu werden.</Text>
                <Space h="3vh"/>
                <Flex w="100%" justify="center"  >
                  <Link to="contact" spy={true} smooth={true} duration={500} offset={-80}>
                    <Button className={classes.button} variant="filled"  opacity={0.9} >Kontaktieren Sie uns jetzt</Button>
                  </Link>
                </Flex>
                </Stack>
               {/* }
            </Transition>  */}
          <LayeredWavesSVG/>
        </Flex>
        </BackgroundImage>
        </Element>
    )
}