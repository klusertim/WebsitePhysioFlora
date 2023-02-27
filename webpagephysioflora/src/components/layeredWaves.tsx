import { Flex, createStyles, BackgroundImage, Overlay, Box, Image } from "@mantine/core"
// import Image from "next/image"
import { relative } from "node:path/win32";
import { off } from "process";
import layeredWavesSrc from "public/layered-waves.svg"


interface OffsetProps {
    offsetY: number
    // children: JSX.Element
}


const useStyles = createStyles((theme, offsetY:number) => ({
    wrapper:{
        justifyContent: "center",
        marginTop: offsetY,
        zIndex: -1,
        position: "relative",
        height: 2000,
        width: "100%",
        borderStyle: "solid",
        borderColor: theme.colors.indigo,
        display:"flex",
        alignItems: "flex-end",
        maxHeight: 400
    },
    img:{
        position: "absolute",
        bottom: 0,
        borderStyle: "solid",
        padding: 0,
        borderColor: theme.colors.red,

    },
    container: {
        borderStyle: "solid",
        borderColor: theme.colors.green,
        backgroundColor: theme.colors.green,
        display: "flex",
        position: "relative",
        alignItems: "center",
        justifyContent: "flex-end",
        width: "100%",

    }
}));

export default function LayeredWaves({offsetY}:OffsetProps){

    const {classes} = useStyles(offsetY);

    return (
        
            // <Flex className={classes.wrapper}>
            //     <Overlay zIndex={-1} opacity={0.8}>
            //     {/* <Flex className={classes.container}> */}
            //         <Image className={classes.img} src={layeredWavesSrc} alt="waves" fill  />
            //     {/* </Flex> */}
            //     </Overlay>
            // </Flex>
            <Image src="layered-waves.svg" alt="waves" />
        
    )
}