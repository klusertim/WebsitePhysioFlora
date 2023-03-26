import { createStyles, Flex, Title, Stack, Text, Group, AspectRatio, Image, Center, Space } from "@mantine/core";
import { useRouter } from "next/router";
import {Element} from 'react-scroll';
import contactData from './contact.data'
import Map from "../map";

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

    return (
        <>
            <Element name="kontakt">

            <Flex h="100vh" w="100vw" m={0} p={0} pt={150}   justify="flex-start" mt={-0.257} direction="column">
                
                <Stack align="flex-start" ml="10vw" pl={0}>
                        <Text className={classes.title}>{contactData.title[locale! as keyof typeof contactData.title].toUpperCase()}</Text>
                        <Title mt={-10}>{contactData.speech[locale! as keyof typeof contactData.speech]}</Title>
                </Stack>  
                <Group position="left" noWrap ml="10vw">
                    <Flex w="50vw" h="70vh" mt="lg">
                        <Map style={{position: "relative"}}/>
                    </Flex>
                    <Space/>
                    <Stack>
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
                </Group>
                
            </Flex>
            </Element>
        </>
    )
}