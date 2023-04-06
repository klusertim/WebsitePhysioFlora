import { createStyles, Flex, Title, Stack, Text, Group, AspectRatio, Image, Center, Space } from "@mantine/core";
import { useRouter } from "next/router";
import {Element} from 'react-scroll';
import contactData from './contact.data'
import Map from "../map/map";
import FloraTitle from "../floraTitle";
import { motion} from "framer-motion";


const useStyles = createStyles((theme) => ({
    title:{
        color: theme.colors.pink,
        fontWeight: "bold"
    },
    container:{
        backgroundColor: "#abc9b3"
    },
    address:{
        fontWeight: "bold",
        whiteSpace: "pre" //takes \n into account
    },
    openHeader:{

    },
    weekdays:{
        lineHeight: 0.4
    }
  }));

export default function ContactPage(){

    const {classes} = useStyles();

    const {locale} : {locale?: string} = useRouter();

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

    function Bubble({left, top} : React.CSSProperties) {
        return(
            <div style={{zIndex: -5, left: left, top: top, position:"absolute"}}>
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
            </div>
        )
    }

    return (
        <>
            {/* <Bubble left={-500} top={1000}/> */}

        <Element name="kontakt">
            <Flex h="100vh" w="100vw" m={0} p={0} pt="xl" justify="flex-start" mt={-0.257} direction="column" pos="relative">

                <Bubble left={-500} top={-100}/>
                <FloraTitle title={contactData.title} speech={contactData.speech}/>
                <Flex justify="flex-start" align="flex-start" ml="10vw">
                    <Flex w="50vw" h="70vh">
                        <Map width= "50vw" style={{position: "relative"}}/>
                    </Flex>
                    <Space miw={70}/>
                    <Stack justify= "flex-start">
                        <Text className={classes.address}>{contactData.address[locale! as keyof typeof contactData.address]}</Text>
                        <Group noWrap position="left">
                            <Image src="mail.svg" alt="mailIcon" height={20} width={20} fit="contain" />
                            <Text>{contactData.mail}</Text>
                        </Group>
                        <Group noWrap position="left">
                            <Image src="phone.svg" alt="phone" height={20} width={20} fit="contain" />
                            <Text>{contactData.phone}</Text>
                        </Group>
                        <Stack>
                            <Text className={classes.openHeader} weight="bolder">{contactData.open[locale! as keyof typeof contactData.open] + ":"}</Text>
                            {contactData.weekdays[locale! as keyof typeof contactData.weekdays].map((day, i) => 
                                <Text className={classes.weekdays} key={i}>{day + ": " + "10-17"}</Text>
                                )
                            }
                        </Stack>
                    </Stack>
                </Flex>
                
            </Flex>
        </Element>
        </>
    )
}