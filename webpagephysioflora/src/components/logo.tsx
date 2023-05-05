import { Stack, Group, Flex } from "@mantine/core"
import { motion } from "framer-motion"
import Image from "next/image"
import flora from "public/FLORA.svg"
import physio from "public/PHYSIOTHERAPIE.svg"



interface Props{
    className: string
}

const variants = {
    init: (i:number) => ({
        opacity: 1,
        transition:{
            duration: 1,
            delay: i,
            ease: "backIn"
        }
    }),
    scale: (i:number) => ({
        scaleX: [1, 1.1, 0.9, 1],
        scaleY: [0.9, 1, 1.1, 0.9],
        // opacity: 1,
        transition: {
            repeat: Infinity,
            ease: "linear",
            duration: 10,
            delay: i
        }
    })
}

function LogoSVG(){
    return(
        <Flex w={100} h={100} justify="center" align="center">
        <motion.svg style={{overflow:"visible"}} width="90" height="90" viewBox="0 0 933 762" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
        custom={3}
        variants={variants}
        initial={{opacity: 0}}
        animate={["init", "scale"]}
        fill= "#D70063"
        d="M9.64227 276.654C27.8074 184.979 170.109 -2.82681 363.415 0.0322767C462.968 1.50474 696.652 25.4123 873.72 199.817C951.731 276.654 993.183 533.973 732.606 691.223C595.382 762.158 164.864 838.102 47.3369 603.663C22.8515 554.82 -18.967 421.038 9.64227 276.654Z"/>
        <motion.path 
        custom={2}
        initial={{opacity: 0}}
        variants={variants}
        animate={["init", "scale"]}
        fill= "#83CDF3"
        
        d="M62.8014 276.654C80.9666 184.979 257.074 81.6999 450.38 84.559C549.932 86.0315 582.601 143.349 759.669 317.753C837.681 394.591 851.49 481.258 715.209 575.07C577.985 646.006 294.379 809.51 176.852 575.07C152.367 526.227 34.1921 421.038 62.8014 276.654Z" />
        <motion.path 
        custom={1}
        initial={{opacity: 0}}
        variants={variants}
        animate={["init", "scale"]}
        fill= "#D70063"
        d="M324.731 374.935C328.597 317.753 343.095 314.18 519.97 272.187C554.765 263.926 636.92 272.187 719.075 317.753C816.826 371.97 838.925 505.381 677.514 567.923C485.901 642.169 393.355 536.93 349.861 497.34C324.731 474.465 318.22 471.241 324.731 374.935Z"/>
        <motion.path
        custom={0}
        initial={{opacity: 0}}
        variants={variants}
        animate={["init", "scale"]}
        fill= "#83CDF3"
        d="M336.329 443.34C318.52 388.463 352.76 376.33 423.317 376.33C459.241 376.33 517.07 389.196 537.368 400.454C578.928 423.505 572.609 500.522 547.033 514.817C463.911 561.277 432.016 515.711 394.321 502.309C373.057 494.748 350.827 488.013 336.329 443.34Z"/>
        </motion.svg>
        </Flex>
    )
}

export default function Logo() {
    return(
        <Group
            spacing= "xs"
            noWrap
        >
            <Stack
            spacing="xs"
            >
                <Image src={flora} alt="Flora"/>
                <Image src={physio} alt= "Physiotherapie"/>
            </Stack>
            <LogoSVG/>
        </Group>
    )
}