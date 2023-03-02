import { Container, createStyles, Drawer, Flex, MediaQuery, Text, Affix, Group, Button, Box } from "@mantine/core";
import Link from "next/link";
import menuItems from './header.data'
import Logo from "../logo";
import LayeredWaves from "../layeredWaves";
import DrawerMenu from "../drawer";
import DrawerProvider from "@/contexts/drawer.provider";

const useStyles = createStyles((theme, _params, getRef) => ({
    container: {
      
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
    //   borderStyle: "solid",
    //   borderColor: theme.primaryColor,
      paddingTop: theme.spacing.sm,
      margin: 10,
  
      // Dynamic media queries, define breakpoints in theme, use anywhere
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        // Type safe child reference in nested selectors via ref
        [`& .${getRef('child')}`]: {
          fontSize: theme.fontSizes.xs,
        },
      },
    },
    hidden:{
        display: 'none'
    },
    items: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: theme.spacing.xs,
        marginRight: theme.spacing.xs,
    },
    links: {
        fontFamily: theme.headings.fontFamily,
        '&:hover': {
            color: theme.colors.pink,
        }
    },
    blur:{
        backdropFilter: "blur(5px)",
        // filter: "blur(5px)",
        // backgroundColor: "white"
    },
    logo:{

    },
  
    child: {
      // assign ref to element
      ref: getRef('child'),
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      padding: theme.spacing.md,
      borderRadius: theme.radius.sm,
      boxShadow: theme.shadows.md,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  }));


export default function Header({...props}){
    console.log(menuItems)
    const {classes} = useStyles();
    const mobileBound:number = 820;
    return(
        <DrawerProvider>
            <>
                <MediaQuery largerThan={mobileBound} styles={{display: "none"}}>
                    <DrawerMenu/>
                </MediaQuery>
                <MediaQuery
                        smallerThan={mobileBound}
                        styles={{display: 'none'}}
                    >
                    <Affix position={{top: 0, left:0}} zIndex={3} /* for the blur */>
                        <Box className={classes.blur} h={120} w="100vw" /> 
                    </Affix>
                </MediaQuery>
                <MediaQuery
                        smallerThan={mobileBound}
                        styles={{display: 'none'}}
                    >
                    <Affix position={{top: 0, left:0}} zIndex={4}>
                        <Group pl="5%" position="apart" w="100vw" pt={20} pb={10} noWrap grow bg="white" opacity={0.8} h={120}>
                            <Logo className={classes.logo}/>
                            <Group 
                            noWrap
                            // gap={40}
                            // className= {classes.items}
                            position="center"
                            mr="15vw"
                            ml={50}
                            spacing={50}
                            >
                                {menuItems.map(({path, label}, i) => (
                                    <Text className={classes.links} key={i} weight="bold">
                                        {label.toUpperCase()}
                                    </Text>
                                ))}
                            </Group>
                        </Group>
                    </Affix>
                </MediaQuery>
            </>
        </DrawerProvider>

       

        
    );
}