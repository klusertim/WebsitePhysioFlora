import { Box } from "@mantine/core"
import { useRef } from "react";
import { motion, useScroll } from "framer-motion"

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
        <motion.div style={{position:"absolute", top: 500, left: 500, backgroundColor: "green", opacity: scrollYProgress}}>Hello2</motion.div>
        </div>
        
    )
}