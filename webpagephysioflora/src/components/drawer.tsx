import { DrawerContext } from "@/contexts/drawer.context";
import { Burger, Drawer, Group, Stack, Text, Title, Overlay, createStyles, Affix } from "@mantine/core";
import { useContext, useState } from "react";
import menuItems from './header/header.data';
import {Link} from "react-scroll";


const useStyles = createStyles((theme, _params, getRef) => ({
    overlay:{
        zIndex: 20
    }
}))

export default function DrawerMenu({...others}){

    // const [drawerOpen, setDrawerOpen] = useState(false);
    const {drawerOpen, setDrawerOpen} = useContext(DrawerContext);
    const {classes} = useStyles();


    return(
        <div {...others}>
                {/* <Group position="right" p="lg" > */}
                <Affix position={{top: 20, right:20}} zIndex={4} {...others}>
                    <Burger opened={drawerOpen!} onClick={() => setDrawerOpen!(!drawerOpen)} >Open Drawer</Burger>
                </Affix>
                {/* </Group> */}
            
            <Drawer zIndex={2}
                opened={drawerOpen || false}
                onClose={() => setDrawerOpen!(false) }
                padding="xs"
                size = "100%" //width
                withCloseButton={false}                
                // transitionDuration={250}
                // transitionTimingFunction="ease"
                // overlayBlur={1}
            >
                <Stack justify="center" align="center">
                    <Title>Menu</Title>
                    {menuItems.map(({path, label}, i) => (
                        <Link to={path!} spy={true} smooth={true} duration={500} key={i} onClick={() => setDrawerOpen(false)} >
                            <Text weight="bolder" >{label}</Text>
                        </Link>
                    )
                    )}
                </Stack>
            </Drawer>
        </div>
    )

}