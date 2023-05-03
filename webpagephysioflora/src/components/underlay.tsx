import { Flex, Group, Space, Text, Title, createStyles } from "@mantine/core";


const useStyles = createStyles((theme) => ({
    container:{
        zIndex: -2
    },
    pink:{
        color: theme.colors.pink
    }
  }));

export default function Underlay(){

    const {classes} = useStyles();

    return(
        <>
        <Flex className={classes.container} w="100vw"  direction="column" align="flex-start" pl="10vw" pr="5vw" pos="sticky" bottom={0} left={0} mt="lg">
            <Space h="lg"/>
            <Title className={classes.pink} size={50}>Vielen Dank!</Title>
            <Title className={classes.pink} size={50}>Ihr Physio Flora Team</Title>
            <Space h="25vh"/>

            <Text>Created by Tim Kluser and Noemie Marti</Text>

            {/* <Group > 
            <Text>Created by Tim Kluser</Text>
            <Text></Text>
            </Group> */}
            <Space h="lg"/>
        </Flex>
        </>
    );
}