import { Box } from "@mantine/core"
import { useRef } from "react";
import { motion, useScroll } from "framer-motion"

const svgVariants = {
    visible:{
        scaleX: [1, 1.1, 0.9, 1],
        scaleY: [0.9, 1, 1.1, 0.9],
        transition:{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
            type: "spring"
        },
    }

}

export default function Animation(){
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    console.log(scrollYProgress)
    return(
        <div style={{height: 1100, display: "flex"}} >
        <div style={{backgroundColor: "blue", height: "100vh", width: 200}} ref = {ref} >
            <motion.div 
        className="box"
        animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        }}
        transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeatDelay: 1
        }} style={{backgroundColor: "red"}}
        >Hello</motion.div>
        </div>
        <motion.svg  width="1217" height="1296" viewBox="0 0 1217 1296" fill="none" xmlns="http://www.w3.org/2000/svg"
            variants = {svgVariants}
            animate="visible"
        >
            <path d="M470.693 1051.13C416.297 1152.89 460.312 1269.07 352.247 1293.8C250.569 1314.32 112.914 1186.17 56.7963 1119.53C-29.4433 1015.36 1.34384 689.865 27.5174 540.142C50.9405 395.46 188.551 197.071 254.428 115.961C353.977 -17.6719 644.37 -23.4598 766.809 36.3864C889.248 96.2322 939.155 187.206 999.043 255.382C1067.18 336.403 1027.44 435.576 999.043 475.035C949.802 540.142 957.787 601.302 1028.32 632.211C1084.75 656.939 1230.61 677.589 1215.97 784.128C1185.36 903.161 914.135 903.161 819.378 903.161C712.687 906.011 545.221 911.711 470.693 1051.13Z" fill="#62C3F5" fill-opacity="0.3"/>
        </motion.svg>
        <motion.div style={{position:"absolute", top: 500, left: 500, backgroundColor: "green", opacity: scrollYProgress}}>Hello2</motion.div>
        </div>
        
    )
}