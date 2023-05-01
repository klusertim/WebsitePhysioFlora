import { Center, createStyles, Overlay, Paper, Flex, Container, Affix, TypographyStylesProvider, ActionIcon, Group, Stack, ScrollArea } from "@mantine/core";
import useSWR from 'swr'
import InfoData from "./InfoData";
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
    iconInfo:{
        color: theme.colors.blue,
        position: "absolute",
        top: 10,
        right: 10
      },
      provider: {
        fontSize: "4em",
        paddingLeft: 50,
        'h2':{
            fontSize: "2em",
        }
        
    },
    wrapper:{
        zIndex: 1,
        backgroundColor: "#E4F1FCB3",
    }
}))

const fetcher = (args: string) => fetch(args).then((res) => res.json());


interface Categories{
    german: number,
    french: number,
    publish: number
}



export default function Info4(){
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

    const InfoBlobSVG = () => {
        return(
            <svg width="1374" height="811" viewBox="0 0 1374 811" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="InfoBlob">
                    <path id="e3" d="M1373.61 312.978C1380.49 418.311 1298.32 884.992 1035.66 800.927C475.302 621.576 5.70759e-06 679.826 0 459.875C-1.27948e-05 -33.1967 548.868 142.168 698.872 57.9036C928.765 -87.8537 1356.94 57.9032 1373.61 312.978Z" fill="#C8D4F8" fillOpacity="0.8"/>
                    <path id="e2" d="M1287 253.168C1287 424.723 1177.3 691 861.23 691C545.163 691 170 572.938 170 401.383C170 229.828 357.316 154.928 434.885 136.754C709.539 72.4079 1287 81.6134 1287 253.168Z" fill="#C9B7E9" fillOpacity="0.85"/>
                    <path id="e1" d="M1152.86 347.368C1230.67 496.616 884.717 639 619.906 639C355.095 639 306 453.375 306 314.331C306 175.288 504.922 80.2979 687.172 175.351C948.185 311.484 1063.17 175.351 1152.86 347.368Z" fill="#D494C6" fillOpacity="0.9"/>
                </g>
            </svg>
        );
    }

    return(
        <>
                        
        <Flex w="100vw" h="100vh" mt="5vh" pos="absolute" className={classes.wrapper}>

            {infoBoxOpen &&
            <>
                <svg width="1374" height="811" viewBox="0 0 1374 811" fill="none" xmlns="http://www.w3.org/2000/svg" z={5}>
                    <g id="InfoBlob">
                        <path id="e3" d="M1373.61 312.978C1380.49 418.311 1298.32 884.992 1035.66 800.927C475.302 621.576 5.70759e-06 679.826 0 459.875C-1.27948e-05 -33.1967 548.868 142.168 698.872 57.9036C928.765 -87.8537 1356.94 57.9032 1373.61 312.978Z" fill="#C8D4F8" fillOpacity="0.8">
                        
                        </path>
                        <path id="e2" d="M1287 253.168C1287 424.723 1177.3 691 861.23 691C545.163 691 170 572.938 170 401.383C170 229.828 357.316 154.928 434.885 136.754C709.539 72.4079 1287 81.6134 1287 253.168Z" fill="#C9B7E9" fillOpacity="0.85"/>
                        <g>
                        <path id="e1" d="M1152.86 347.368C1230.67 496.616 884.717 639 619.906 639C355.095 639 306 453.375 306 314.331C306 175.288 504.922 80.2979 687.172 175.351C948.185 311.484 1063.17 175.351 1152.86 347.368Z" fill="#D494C6" fillOpacity="0.9"/>
                            <foreignObject x="0" y="0" width="600" height="600">
                                <ScrollArea  w="600" h="100%" offsetScrollbars>
                                        <TypographyStylesProvider>
                                            {localData!.map((post: typeof germanData, i:number) => (
                                            <div className={classes.provider} dangerouslySetInnerHTML={{ __html: post.content.rendered }} key={i}/>
                                            )
                                        )}
                                    </TypographyStylesProvider>
                                </ScrollArea>
                            </foreignObject>

                        </g>
                    </g>
                </svg>
                {/* <ScrollArea  w="600" h="100%" offsetScrollbars>
                <TypographyStylesProvider>
                    {localData!.map((post: typeof germanData, i:number) => (
                    <div className={classes.provider} dangerouslySetInnerHTML={{ __html: post.content.rendered }} key={i}/>
                    )
                )}
                    </TypographyStylesProvider>
                </ScrollArea> */}
            </>
                
            }
            
            <ActionIcon variant="transparent" color="black" size="xl" className={classes.iconInfo} onClick={() => setInfoBoxOpen(true)}>
                    <RxInfoCircled size={100}/>
            </ActionIcon>
        </Flex>
        </>
    );
}