import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import {getPosts } from '../utils/wordpress';

import Post from '../components/Post';

export default function Home({ posts }) {
  console.log("posts")
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
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getPosts();

  console.log(posts)
  return {
    props: {
      posts,
    },
    revalidate: 10, // In seconds
  };
}