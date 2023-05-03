import { Flex, Group, Space, Text, createStyles } from "@mantine/core";


const useStyles = createStyles((theme) => ({
    spacer:{
        borderTop: `1px solid ${theme.colors.pink}`
    },
    
    
  }));

export default function Footer(){

    const {classes} = useStyles();

    return(
        <>
        <Space h={150}/>
        <Flex className={classes.spacer} ml="10vw" mr="10vw"/>

        <Flex w="100vw"  direction="column" align="flex-start" pl="10vw">
            <Space h="lg"/>
            <Text size="lg">Physiotherapie Flora Flora GMBH</Text>
            <Text>Florastrasse 30a | 2502 Biel</Text>
            <Text>T: 032 331 71 22</Text>
            <Text>Mail: info@physioflora.ch</Text>

            {/* <Group > 
            <Text>Created by Tim Kluser</Text>
            <Text></Text>
            </Group> */}
        </Flex>
        <Space h="lg"/>
        
        </>
    );
}