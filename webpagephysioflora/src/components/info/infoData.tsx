import useSWR from 'swr'
import { TypographyStylesProvider } from '@mantine/core';
import {InfoBoxContext } from "@/contexts/infobox.context";
import { useContext, useEffect, useState } from 'react';


const fetcher = (args: string) => fetch(args).then((res) => res.json());

interface BlockData {
  content: {
    rendered: string
  }
}
interface CategoryData{
  name: string,
  id: number
}

export default function InfoData(){

  const {infoBoxOpen, setInfoBoxOpen} = useContext(InfoBoxContext)
  const [loadinig, setLoading] = useState(false)
  const [data, setData] = useState<BlockData[]>([])
  const [categoryData, setCategoryData] = useState<CategoryData[]>([])

  const isGerman:boolean = true

    // load categories
  // const {data:categoryData, error:categroyError} = useSWR("http://9d9gom4m.lx28.hoststar.website/wp-json/wp/v2/categories", fetcher)
  let germanCategory:number=-1, frenchCategory:number=-1, publishCategory:number = -1
  
  useEffect(() =>{
    setLoading(true)
    fetch('http://9d9gom4m.lx28.hoststar.website/wp-json/wp/v2/categories')
      .then((res) => res.json())
      .then((categoryData) => {
        setCategoryData(categoryData)
      })
    
    if (!categoryData){
      console.log("loading Category Data")
    }else{
      console.log(categoryData)
      germanCategory = categoryData.filter((cat) => cat.name == "german")[0].id
      frenchCategory = categoryData.filter((cat) => cat.name == "french")[0].id
      publishCategory = categoryData.filter((cat) => cat.name == "publish")[0].id
    }

    fetch(`http://9d9gom4m.lx28.hoststar.website/wp-json/wp/v2/posts?categories=${isGerman ? germanCategory : frenchCategory}&categories=${publishCategory}&_embed`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      console.log(data)
    
  }, [])

  // if (categroyError) console.log("couldn't load categories")
  // if (!categoryData){
  //   console.log("loading Category Data")
  // }else{
  //   germanCategory = categoryData.filter((cat: typeof categoryData) => cat.name == "german")[0].id
  //   frenchCategory = categoryData.filter((cat: typeof categoryData) => cat.name == "french")[0].id
  //   publishCategory = categoryData.filter((cat: typeof categoryData) => cat.name == "publish")[0].id
  // }

  // const {data, error} = useSWR(`http://9d9gom4m.lx28.hoststar.website/wp-json/wp/v2/posts?categories=${isGerman ? germanCategory : frenchCategory}&categories=${publishCategory}&_embed`, fetcher)

  // if (error) console.log(error)
  if (loadinig) return <div>Loading ...</div>
  else{
    if (data!.length > 0 ) {
      setInfoBoxOpen(true)
      console.log(data[0].content.rendered)
    }
    else {setInfoBoxOpen(false)}
  }

  
  return(
    <TypographyStylesProvider>
      {data.map((post) => {
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}/>
        }
      )}
    </TypographyStylesProvider>
  );
}


// export default function InfoData() {
//   const {data:categoryData, error:categroyError} = useSWR("http://9d9gom4m.lx28.hoststar.website/wp-json/wp/v2/categories", fetcher)

//   let germanCategory:number = -1
//   let frenchCategory:number = -1
//   let publishCategory:number = -1
//   if (categroyError) console.log("couldn't load categories")
//   if (!categoryData){
//     console.log("loading Category Data")
//   }else{
//     germanCategory = categoryData.filter((cat: typeof categoryData) => cat.name == "german")[0].id
//     frenchCategory = categoryData.filter((cat: typeof categoryData) => cat.name == "french")[0].id
//     publishCategory = categoryData.filter((cat: typeof categoryData) => cat.name == "publish")[0].id
//   }

//   const { data:germanData, error:germanError } = useSWR(`http://9d9gom4m.lx28.hoststar.website/wp-json/wp/v2/posts?categories=${germanCategory}&categories=${publishCategory}&_embed`, fetcher)
//   const { data:frenchData, error:frenchError } = useSWR(`http://9d9gom4m.lx28.hoststar.website/wp-json/wp/v2/posts?categories=${germanCategory}&categories=${publishCategory}&_embed`, fetcher)

//   let germanPosts = []
//   let frenchPosts = []

//   if (error) return <div>Failed to load</div>
//   if (!data) return <div>Loading...</div>
//   else{
//     data.map((post: typeof data) => console.log(post._embedded["wp:term"]["0"]["0"]["name"]))
//     console.log(data)
//     germanPosts = data.filter((post:typeof data) => post._embedded["wp:term"]["0"]["0"]["name"] == "german")
//     frenchPosts = data.filter((post:typeof data) => post._embedded["wp:term"]["0"]["0"]["name"] == "french")

//   }

//   return (
//     <TypographyStylesProvider>
//        {germanPosts.length && <div dangerouslySetInnerHTML={{ __html: germanPosts[0].content.rendered }}/>}
//        {frenchPosts.length && <div dangerouslySetInnerHTML={{ __html: frenchPosts[0].content.rendered }}/>}
//     </TypographyStylesProvider>
//   )
// }