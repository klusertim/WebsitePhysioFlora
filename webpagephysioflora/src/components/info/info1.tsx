import { Center, createStyles, Overlay, Paper, Flex, Container, Affix, TypographyStylesProvider } from "@mantine/core";
import useSWR from 'swr'
import InfoData from "./InfoData";
import {InfoBoxContext } from "@/contexts/infobox.context";
import { useContext, useEffect, useState } from 'react';
import FetchTest1 from "../fetchTest1";


const useStyles = createStyles((theme) => ({
    blur:{
        backdropFilter: "blur(5px)",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
    },
    paper:{
        backgroundColor: "white",
        opacity: 1,
        padding: "5vh"
    }
}))

const fetcher = (args: string) => fetch(args).then((res) => res.json());


interface Categories{
    german: number,
    french: number,
    publish: number
}



export default function Info1(){
    const {classes} = useStyles()
    const {infoBoxOpen, setInfoBoxOpen} = useContext(InfoBoxContext)

    // const [categoryData, setCategoryData] = useState<CategoryData>();
    const [categoryMounted, setCategoryMounted] = useState(false);
    const [categoryId, setCategoryId] = useState<Categories>({german:-1, french: -1, publish: -1})
    const isGerman = true

    const {data: categoryData, error: categoryError} = useSWR("http://9d9gom4m.lx28.hoststar.website/wp-json/wp/v2/categories", fetcher)
    const {data, error} = useSWR(categoryMounted ? `http://9d9gom4m.lx28.hoststar.website/wp-json/wp/v2/posts?categories=${isGerman ? categoryId.german : categoryId.french}&categories=${categoryId.publish}&_embed`:null, fetcher)

    useEffect(()=>{
        if (categoryData){
            let germanCategory = categoryData.filter((cat: typeof categoryData) => cat.name == "german")[0].id
            let frenchCategory = categoryData.filter((cat: typeof categoryData) => cat.name == "french")[0].id
            let publishCategory = categoryData.filter((cat: typeof categoryData) => cat.name == "publish")[0].id
            setCategoryId({german: germanCategory, french: frenchCategory, publish: publishCategory})
            setCategoryMounted(true)
        }

    }, [categoryData])

    useEffect(()=>{
        if (data && data.length > 0 ) {
            setInfoBoxOpen(true)
            console.log(data)
          }
        else {setInfoBoxOpen(false)}
    }, [data])
    


   

    return(
        <>
            {infoBoxOpen && <Affix zIndex={2} style={{display: infoBoxOpen ? "default" : "hidden"}}>
                <Flex w="100vw" h="100vh" justify="center" align="center" className={classes.blur} pt={120}>
                    <Center w="70vw" h="70vh"  className={classes.paper}>
                    
                    <TypographyStylesProvider>
                        {data.map((post: typeof data, i:number) => (
                            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} key={i}/>
                        )
                        )}
                        {/* <div dangerouslySetInnerHTML={{ __html: data[0].content.rendered }}/> */}
                    </TypographyStylesProvider>
                    </Center>
                </Flex>
            </Affix>}
        </>
    );
}