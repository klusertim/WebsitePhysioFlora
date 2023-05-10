import { Flex, Group, Space, Stack, Text, createStyles, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useRouter } from "next/router";


const useStyles = createStyles((theme) => ({
    spacer:{
        borderTop: `1px solid ${theme.colors.pink}`
    },
    
    
  }));

export default function Footer(){

    const {classes} = useStyles();
    const theme = useMantineTheme();
    const isSmallDevice = useMediaQuery(theme.fn.smallerThan("sm").replace("@media", ""));
    const {locale} : {locale?: string} = useRouter();



    return(
        <>
        <Space h={150}/>
        <Flex className={classes.spacer} ml="10vw" mr="10vw"/>

        <Flex w="100vw"  direction="column" align="flex-start" justify="center" pl="10vw">
            <Space h="lg"/>
                    <Text size="lg">Physiotherapie Flora Flora GMBH</Text>
                    <Text>Florastrasse 30a | 2502 Biel</Text>
                    <Text>T: 032 331 71 22</Text>
                    <Text>Mail: info@physioflora.ch</Text>
                <Text pos={isSmallDevice ? "relative":"absolute"} right={isSmallDevice?0 : "10vw"} ><a style={{color: "black"}}href="/footer/Datenschutzerklaerung.pdf" target="_blank">Datenschutzerklärung</a></Text>
            {/* <Group > 
            <Text>Created by Tim Kluser</Text>
            <Text></Text>
            </Group> */}
        </Flex>
        <Space h="lg"/>
        
        </>
    );
}