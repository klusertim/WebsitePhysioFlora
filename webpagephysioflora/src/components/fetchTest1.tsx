import { useEffect, useState, useContext } from "react";
import {InfoBoxContext } from "@/contexts/infobox.context";
import useSWR from 'swr'
import { TypographyStylesProvider } from "@mantine/core";

const fetcher = (args: string) => fetch(args).then((res) => res.json());


interface Categories{
    german: number,
    french: number,
    publish: number
  }


export default function FetchTest1(){
    const {infoBoxOpen, setInfoBoxOpen} = useContext(InfoBoxContext);
    // const [categoryData, setCategoryData] = useState<CategoryData>();
    const [categoryMounted, setCategoryMounted] = useState(false);
    const [categoryId, setCategoryId] = useState<Categories>({german:-1, french: -1, publish: -1})
    const isGerman = true

    const {data: categoryData, error: categoryError} = useSWR("http://9d9gom4m.lx28.hoststar.website/wp-json/wp/v2/categories", fetcher)
    const {data, error} = useSWR(categoryMounted ? `http://9d9gom4m.lx28.hoststar.website/wp-json/wp/v2/posts?categories=${isGerman ? categoryId.german : categoryId.french}&categories=${categoryId.publish}&_embed`:null, fetcher)
    // useEffect(()=>{
    //     setInfoBoxOpen(true)

    // }, [])

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
            // console.log(data[0].content.rendered)
          }
        else {setInfoBoxOpen(false)}
    }, [data, setInfoBoxOpen])

    if(!data) return <div>Loading...</div>

    return(
        <>
        <div>{infoBoxOpen?"its open":"it's not open"}</div>
        <TypographyStylesProvider>
            {/* {data.map((post: typeof data) => {
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}/>
                }
            )} */}
            <div dangerouslySetInnerHTML={{ __html: data[0].content.rendered }}/>
        </TypographyStylesProvider>
        </>
    )
}