
import { Flex, Image, Space, Stack, Title, Text, MediaQuery, useMantineTheme } from "@mantine/core";
import { TeamDataType } from "./team.data";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mantine/hooks";
import { motion, useCycle } from "framer-motion";

export default function TeamElementBig({data : {image, name, description, path, color}} : {data: TeamDataType}){
    const {locale} : {locale?: string} = useRouter();
    const matches = useMediaQuery('(min-width: "xl")');
    const [hover, toggleHover] = useCycle(false, true)
    const theme = useMantineTheme();
    const isSmallDevice =  useMediaQuery(theme.fn.smallerThan("sm").replace("@media", ""));



    const svgVariants = {
        notHovering:{
            fill: color,
            // opacity: 1,
            transition: {
                duration: 3
            }
        },
        isHovering:{
            fill: "#ffffff",
            // opacity: 0,
            transition: {
                duration: 3
            }
        }
    }
    const pathVariants = {
        notHovering:{
            pathLength: 0,
            transition:{
                duration: 3,
                ease: "easeIn",
                // repeat: Infinity,
                // repeatType: "reverse",
                // repeatDelay: 1
            },
        },
        isHovering:{
            pathLength: 1,
            transition:{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
                ease: "easeIn",
            }
        }
    }

    function SusanneSVG(){
        return(
          <motion.svg
          whileHover="isHovering"
            initial="notHovering"
            animate="notHovering"
          variants={svgVariants}
          style={{overflow: "visible"}} width="200" height="200" viewBox="0 0 330 260" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
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
                        <Flex w={300} align="center" justify="center">
                            {/* <Image src={`team/${image}.png`}/> */}
                            <SusanneSVG/>
                        </Flex>
                        <Space w="lg"/>
                            
                        <Stack justify={isSmallDevice ? "center" : "flex-start"}>
                            <Title order={3}>{name}</Title>
                            <Text>
                                {locale=="fr" ? description.fr : description.de}
                            </Text>
                        </Stack>
                        {isSmallDevice && <Space />}
                        </>
                    

    return(
        <>
            <MediaQuery smallerThan="lg" styles={{justifyContent: "flex-start"}}>
                <Flex justify="center" align={isSmallDevice? "center" : "flex-start"} wrap="nowrap" direction={isSmallDevice?"column" : "row"}>
                    {children}
                </Flex>
            </MediaQuery>

        </>
    );
}