import { Center, createStyles, Overlay, Paper, Flex, Container, Affix, TypographyStylesProvider, ActionIcon, Group, Stack, ScrollArea } from "@mantine/core";
import useSWR from 'swr'
// import InfoData from "./InfoData";
import {InfoBoxContext } from "@/contexts/infobox.context";
import { useContext, useEffect, useMemo, useState } from 'react';
import FetchTest1 from "../fetchTest1";
import {RxCross1, RxInfoCircled} from "react-icons/rx";
import { useRouter } from "next/router";



const useStyles = createStyles((theme) => ({
    blur:{
        backdropFilter: "blur(5px)",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
    },
    paper:{
        // backgroundColor: "white",
        opacity: 1,
        padding: "3vh",
        overflow:"hidden",
        position: "relative",
        zIndex: 2,
        backdropFilter: "blur(5px)",
        backgroundColor: "rgba(202, 234, 250, 0.8)",
    },
    iconX: {
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 5
    },
    iconInfo:{
        color: theme.colors.blue,
        position: "absolute",
        top: 10,
        right: 10
      }
}))

const fetcher = (args: string) => fetch(args).then((res) => res.json());


interface Categories{
    german: number,
    french: number,
    publish: number
}



export default function Info2(){
    const {classes} = useStyles()
    const {infoBoxOpen, setInfoBoxOpen} = useContext(InfoBoxContext)

    // const [categoryData, setCategoryData] = useState<CategoryData>();
    const [categoryMounted, setCategoryMounted] = useState(false);
    const [categoryId, setCategoryId] = useState<Categories>({german:-1, french: -1, publish: -1})
    const {locale} : {locale?: string} = useRouter();
    const [isGerman, setIsGerman] = useState(locale=="de")

    

    const {data: categoryData, error: categoryError} = useSWR("http://9d9gom4m.lx28.hoststar.website/wp-json/wp/v2/categories", fetcher)
    const {data, error} = useSWR(categoryMounted ? `http://9d9gom4m.lx28.hoststar.website/wp-json/wp/v2/posts?categories=${categoryId.publish}&_embed`:null, fetcher)
    // const {data: germanData, error: germanError} = useSWR(categoryMounted ? `http://9d9gom4m.lx28.hoststar.website/wp-json/wp/v2/posts?categories=${categoryId.german}&categories=${categoryId.publish}&_embed`:null, fetcher)
    // const {data: frenchData, error: frenchError} = useSWR(categoryMounted ? `http://9d9gom4m.lx28.hoststar.website/wp-json/wp/v2/posts?categories=${categoryId.french}&categories=${categoryId.publish}&_embed`:null, fetcher)
    // let [localData, setLocalData]  = useState<typeof germanData>(null)
    // const [germanData, setGermanData] = useState<typeof data>(null)
    // const [frenchData, setFrenchData] = useState<typeof data>(null)


    // we have to use useMemo because the data loaded by useSWR is cached between reloads => useEffect isn't triggered (oder so)
    const frenchData:typeof data = useMemo(() =>{
            if (data){
                return data.filter((post: typeof data) => post.categories.includes(categoryId.french))
            }
            return null
        }
    , [data])

    const germanData:typeof data = useMemo(() =>{
        if (data){
            return data.filter((post: typeof data) => post.categories.includes(categoryId.german))
        }
        return null
    }
, [data])

    const localData:typeof data = useMemo(() =>{
        if (data){
            // return data.filter((post: typeof data) => post.categories.includes(categoryId.french))
            if (locale == "de"){
                return germanData
            }else{
                return frenchData
            }
        }
        return null
    }
    , [locale, frenchData, germanData])



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
        setIsGerman(locale=="de")
        if (localData && localData.length > 0){
            // console.log("it's open")
            setInfoBoxOpen(true)
        }else{
            setInfoBoxOpen(false)
        }
        
        // console.log(isGerman)
        // console.log(infoBoxOpen)
        // console.log("German: ", germanData)
        // console.log("French: ", frenchData)
        // console.log("Data: ", data)
        // console.log("localData: ", localData)
        // console.log("germanID: ", categoryId.german)

        
    }, [isGerman, localData])
    


    if (categoryError || error){
        console.log("Error with loading data")
        return <></>
    }
    

    if (!frenchData || !germanData){
        return <></>
    }

    return(
        <>
                        
        <Flex w="45vw" h="70vh" mt="5vh" pos="relative">

            {infoBoxOpen &&
                <Paper w="45vw" h="70vh" className={classes.paper} shadow="xs">
                    <ActionIcon variant="transparent" color="black" className={classes.iconX} onClick={()=>{setInfoBoxOpen(false)}}><RxCross1 size="1.5rem"/></ActionIcon>
                    <ScrollArea h="65vh" w="40vw" offsetScrollbars>
                        <TypographyStylesProvider>
                            {localData!.map((post: typeof germanData, i:number) => (
                                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} key={i}/>
                                )
                            )}
                        </TypographyStylesProvider>
                    </ScrollArea>
                </Paper>
            }
            
            <ActionIcon variant="transparent" color="black" size="xl" className={classes.iconInfo} onClick={() => setInfoBoxOpen(true)}>
                    <RxInfoCircled size={100}/>
            </ActionIcon>
        </Flex>
        </>
    );
}