
import { Flex, Image, Space, Stack, Title, Text, MediaQuery, useMantineTheme, Accordion, List } from "@mantine/core";
import { TeamDataType } from "./team.data";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mantine/hooks";
import { Repeat, motion, useCycle, AnimatePresence } from "framer-motion";

export default function TeamElementBig({data : {image, name, description, path, color}} : {data: TeamDataType}){
    const {locale} : {locale?: string} = useRouter();
    const matches = useMediaQuery('(min-width: "xl")');
    const [hover, toggleHover] = useCycle(false, true)
    const theme = useMantineTheme();
    const isSmallDevice =  useMediaQuery(theme.fn.smallerThan("sm").replace("@media", ""));



    const svgVariants = {
        notHovering:{
            fill: color as string,
            // opacity: 1,
            transition: {
                duration: 5
            }
        },
        isHovering:{
            fill: "#ffffff",
            // opacity: 0,
            transition: {
                duration: 2
            }
        }
    }
    const pathVariants = {
        notHovering:{
            pathLength: 0,
            transition:{
                duration: 3,
                ease: "easeIn",
            },
        },
        isHovering:{
            pathLength: 1,
            transition:{
                duration: 3,
                // repeat: Infinity,
                // repeatType: "reverse" as const,
                // repeatDelay: 1,
                ease: "easeIn",
            }
        }
    }

    function ImageSVG(){
        return(
          <motion.svg
          whileHover="isHovering"
            initial="notHovering"
            animate="notHovering"
          variants={svgVariants}
          style={{overflow: "visible"}} width="180" height="180" viewBox="0 0 330 260" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
        //   animate={hover ? "isHovering" : "notHovering"}
          variants={pathVariants}   
          strokeDasharray="0 10"
          stroke={theme.colors.pink[0]}
          strokeWidth={4}
          
          d={path}/>
          <foreignObject x="0" y="0" width="100%" height="100%">
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "15%"}}>
                <Image src={`team/${image}.png`}/>
            </div>
          </foreignObject>
          </motion.svg>
        )
      }

    const children =    <>
                        <Flex w={200} align="center" justify="center">
                            {/* <Image src={`team/${image}.png`}/> */}
                            <ImageSVG/>
                        </Flex>
                        <Space w="lg"/>
                            
                        <Stack justify={isSmallDevice ? "center" : "center"} mt={30} w={300}>
                            <Title order={3}>{name}</Title>
                            <Accordion variant="filled" chevronPosition="left"
                                styles={{
                                    item: {
                                      // styles added to all items
                                      backgroundColor: '#fff',
                            
                                      // styles added to expanded item
                                      '&[data-active]': {
                                        backgroundColor: '#fff',
                                      },
                                    },
                                  }}
                            >
                                <Accordion.Item value="title">
                                    <Accordion.Control>
                                        Titel
                                    </Accordion.Control>
                                    <Accordion.Panel>
                                        Physiotherapeutin FH <br/>
                                        MSc pelvic physiotherapy
                                    </Accordion.Panel>
                                </Accordion.Item>
                                <Accordion.Item value="specialities">
                                    <Accordion.Control>
                                        Spezialitäten
                                    </Accordion.Control>
                                    <Accordion.Panel>
                                        <List>
                                            <List.Item>
                                            Beckenbodenrehabilitation
                                            für Frauen und Männer
                                            </List.Item>
                                           <List.Item>
                                           Narbenbehandlung
                                           </List.Item>
                                            <List.Item>
                                            Atemphysiotherapie
                                            </List.Item>
                                            <List.Item>
                                            Manuelle Lymphdrainage
                                            und Bandagen
                                            </List.Item>
                                        </List>
                                    </Accordion.Panel>
                                </Accordion.Item>
                            </Accordion>
                            {/* <Text>
                                {locale=="fr" ? description.fr : description.de}
                            </Text> */}
                        </Stack>
                        {isSmallDevice && <Space />}
                        </>
                    

    return(
        <>
            <MediaQuery smallerThan="sm" styles={{justifyContent: "flex-start"}}>
                <Flex justify="center" align="center" wrap="nowrap" direction={isSmallDevice?"column" : "row"} mt={40}>
                    {children}
                </Flex>
            </MediaQuery>

        </>
    );
}