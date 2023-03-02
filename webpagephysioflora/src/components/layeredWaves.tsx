import { Flex, createStyles, BackgroundImage, Overlay, Box, Image } from "@mantine/core"
// import Image from "next/image"
import { relative } from "node:path/win32";
import { off } from "process";
import layeredWavesSrc from "public/layered-waves.svg"


interface OffsetProps {
    offsetY: number
    rotation: number
    // children: JSX.Element
}


const useStyles = createStyles((theme, {offsetY, rotation} : OffsetProps) => ({
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
        margin: 0,
        padding: 0,
        // border: "solid",
        // borderColor: theme.colors.red,
        zIndex: -1,
        transform: `rotate(${rotation}deg)`,
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

export default function LayeredWaves({offsetY, rotation}:OffsetProps){

    const {classes} = useStyles({offsetY, rotation});

    return (
        
            // <Flex className={classes.wrapper}>
            //     <Overlay zIndex={-1} opacity={0.8}>
            //     {/* <Flex className={classes.container}> */}
            //         <Image className={classes.img} src={layeredWavesSrc} alt="waves" fill  />
            //     {/* </Flex> */}
            //     </Overlay>
            // </Flex>
            <Image src="layered-waves.svg" alt="waves" pos="relative" className={classes.img} opacity={0.7}/>
        
    )
}