import { createStyles, Flex, Title, Stack, Text, Group, AspectRatio, Image, Center, Space, MediaQuery, useMantineTheme } from "@mantine/core";
import { useRouter } from "next/router";
import {Element} from 'react-scroll';
import contactData from './contact.data'
import Map from "../map/map";
import FloraTitle from "../floraTitle";
import { MotionValue, motion, useScroll, useTransform} from "framer-motion";
import { MutableRefObject, useEffect, useRef } from "react";
import { AppProps } from "next/app";
import { useMediaQuery } from "@mantine/hooks";
import { useTheme } from "@emotion/react";


const useStyles = createStyles((theme) => ({
    title:{
        color: theme.colors.pink,
        fontWeight: "bold"
    },
    container:{
        zIndex: 2
    },
    address:{
        fontWeight: "bold",
        whiteSpace: "pre" //takes \n into account
    },
    openHeader:{

    },
    weekdays:{
        lineHeight: 0.4
    },
    
  }));

  interface Props{
    left: number,
    top: number,
    y: MotionValue<string>
  }

export function Bubble({left, top, y}: Props) {


    const svgVariants = {
        visible:{
            scaleX: [1, 1.1, 0.9, 1],
            scaleY: [0.9, 1, 1.1, 0.9],
            transition:{
                repeat: Infinity,
                duration: 10,
                ease: "linear",
                type: "spring"
            },
        }
    
    }
    return(
        <motion.div style={{left: left, top: top, zIndex: -2, position:"absolute", y, overflow: "hidden"}} >
            <motion.svg  
            width="1000" height="1100" viewBox="0 0 1217 1296" xmlns="http://www.w3.org/2000/svg"
            variants = {svgVariants}
            animate="visible"
            style={{display: "flex", alignItems: "center", justifyContent: "center"}}
            >
                <path
                    d="M470.693 1051.13C416.297 1152.89 460.312 1269.07 352.247 1293.8C250.569 1314.32 112.914 1186.17 56.7963 1119.53C-29.4433 1015.36 1.34384 689.865 27.5174 540.142C50.9405 395.46 188.551 197.071 254.428 115.961C353.977 -17.6719 644.37 -23.4598 766.809 36.3864C889.248 96.2322 939.155 187.206 999.043 255.382C1067.18 336.403 1027.44 435.576 999.043 475.035C949.802 540.142 957.787 601.302 1028.32 632.211C1084.75 656.939 1230.61 677.589 1215.97 784.128C1185.36 903.161 914.135 903.161 819.378 903.161C712.687 906.011 545.221 911.711 470.693 1051.13Z"
                    fill="#62C3F5"
                    fillOpacity="0.15"
                />
            </motion.svg>   
        </motion.div>
    )
}



export default function ContactPage(){

    const {classes} = useStyles();
    const {locale} : {locale?: string} = useRouter();
    const ref = useRef(null)
    let {scrollYProgress} = useScroll(
        {
            target: ref
        }
    )
    let y = useTransform(scrollYProgress, [0, 1], ["15%", "-5%"])
    const theme = useMantineTheme();
    const isSmallDevice = useMediaQuery(theme.fn.smallerThan("sm").replace("@media", ""));



    return (
        <>

        <Element name="contact">
            <Flex  w="100vw" m={0} p={0} pt="xl" justify="flex-start" mt={-0.257} direction="column" pos="relative" className={classes.container}>

                <Bubble  left={-500} top={-100} y={y} />
                <FloraTitle title={contactData.title} speech={contactData.speech}/>
                {/* <MediaQuery
                    smallerThan="sm"
                    styles={{display: "none"}}
                > */}
                <Flex justify="center" align="center" ml={isSmallDevice?"0":"10vw"} direction={isSmallDevice ? "column-reverse":"row"}>
                    <Flex w={isSmallDevice?"80vw":"50vw"} h="70vh">
                        <Map width= {isSmallDevice?"80vw":"50vw"} height= "70vh" style={{position: "relative"}}/>
                    </Flex>
                    <Space miw={70} mih={70}/>
                    <Stack justify= "flex-start" align= "flex-start" pr="5vw" pl={isSmallDevice?"15vw":"0"}>
                        <Group noWrap position="left">
                            <Image src="/contact/EMail.svg" alt="mailIcon" height={25} width={25} fit="contain" />
                            <Stack>
                            <Text ref={ref} className={classes.address}>{contactData.address[locale! as keyof typeof contactData.address]}</Text>
                            <Text mt={-10}>{contactData.mail}</Text>
                            </Stack>
                        </Group>
                        <Space h="1vh"/>
                        <Group noWrap position="left">
                            <Image src="/contact/Phone.svg" alt="phone" height={20} width={20} fit="contain"/>
                            <Stack>
                                <Text size="lg">Telefonische Erreichbarkeit:</Text>
                                <Text mt={-10}>{contactData.phone}</Text>
                                <Text mt={-10}>Montag - Freitag <br/> 08:00 - 12:00</Text>
                            </Stack>
                        </Group>
                        <Space h="1vh"/>
                        <Group noWrap position="left">
                            <Image src="contact/Bus.svg" alt="bus" height={25} width={25}/>
                            <Stack>
                            <Text>Sie erreichen uns bequem mit dem Bus bis zur <b>Haltestelle Nidaugasse</b>: &nbsp;
                            </Text>
                                <Text mt={-10} component="a" href={`https://www.sbb.ch/de/kaufen/pages/fahrplan/fahrplan.xhtml?nach=Nidaugasse,+Biel`} td="underline">Link zum SBB Fahrplan</Text>
                            </Stack>
                        </Group>
                        <Space h="1vh"/>
                        <Group noWrap position="left">
                            <Image src="contact/WheelChair.svg" alt="wheelchair" height={25} width={25}/>
                            <Text>
                                Die Praxis ist komplett Rollstuhlgängig.<br/>
                                Bei Ihrem ersten Besuch begleiten wir Sie jedoch gerne!
                            </Text>
                        </Group>
                        
                    </Stack>
                </Flex>
                {/* </MediaQuery> */}
            
                
            </Flex>
        </Element>
        </>
    )
}