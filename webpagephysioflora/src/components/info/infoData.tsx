import useSWR from 'swr'
import { TypographyStylesProvider } from '@mantine/core';


const fetcher = (args: string) => fetch(args).then((res) => res.json())



export default function InfoData() {
    // const {data as d, error as e} = useSWR("http://9d9gom4m.lx28.hoststar.website/wp-json/wp/v2/categories", fetcher)

  const { data, error } = useSWR('http://9d9gom4m.lx28.hoststar.website/wp-json/wp/v2/posts?_embed', fetcher)
  let germanPosts = []
  let frenchPosts = []

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  else{
    data.map((post: typeof data) => console.log(post._embedded["wp:term"]["0"]["0"]["name"]))
    console.log(data)
    germanPosts = data.filter((post:typeof data) => post._embedded["wp:term"]["0"]["0"]["name"] == "german")
    frenchPosts = data.filter((post:typeof data) => post._embedded["wp:term"]["0"]["0"]["name"] == "french")

  }

  return (
    <TypographyStylesProvider>
       {germanPosts.length && <div dangerouslySetInnerHTML={{ __html: germanPosts[0].content.rendered }}/>}

       {frenchPosts.length && <div dangerouslySetInnerHTML={{ __html: frenchPosts[0].content.rendered }}/>}
    </TypographyStylesProvider>
  )
}