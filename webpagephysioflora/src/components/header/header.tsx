import { Container, createStyles, Drawer, Flex, MediaQuery, Text } from "@mantine/core";
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
      borderStyle: "solid",
      borderColor: theme.primaryColor,
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


export default function Header(){
    console.log(menuItems)
    const {classes} = useStyles();
    return(
        <DrawerProvider>
            <>
                <MediaQuery largerThan={800} styles={{display: "none"}}>
                    <DrawerMenu/>
                </MediaQuery>
                <MediaQuery
                        smallerThan={800}
                        styles={{display: 'none'}}
                    >
                    <Flex className={classes.container} >
                        <Logo className={classes.logo}/>
                            <Flex 
                            gap={40}
                            className= {classes.items}
                            >
                                {menuItems.map(({path, label}, i) => (
                                    <Text className={classes.links} key={i}>
                                        {label}
                                    </Text>
                                ))}
                            </Flex>
                    </Flex>
                </MediaQuery>

                <LayeredWaves offsetY={0}/>
            </>
        </DrawerProvider>

       

        
    );
}