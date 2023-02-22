import Head from 'next/head'


import Post from '../components/Post';
import { useState, useEffect } from 'react';
import Image from 'next/image';
export default function Home() {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch the list of blog posts from the WordPress REST API
    fetch('http://9d9gom4m.lx28.hoststar.website/wp-json/wp/v2/posts?_embed')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);
  console.log("It's here")
  console.log(posts)

  const jsxPosts = posts.map((post) => {
    return <Post post={post} key={post.id} />;
  });


  return (
    <>
      <Head>
        <title>Tech Blog</title>
        <meta
          name="description"
          content="Keep up to date with the latest trends in tech"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* You can add more metadata here, like open graph tags for social media, etc */}
      </Head>

      <div className="container pt-5">
        <h1 className="text-center pb-5">Tech Blog</h1>
        <div className="row">
          <div className="col-lg-8">
            <h2 className="pb-3">Our blog posts</h2>
            {jsxPosts}
            <Image
              src="https://i0.wp.com/www.surfer.com/wp-content/uploads/2016/12/LetThemLog_DevonHoward2_Full_Glaser.jpg?resize=1920%2C1080&ssl=1"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
}
