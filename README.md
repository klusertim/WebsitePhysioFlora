# WebpagePhysioFlora

## Deployment
```shell
npm run build
```
https://nextjs.org/docs/deployment
### Deploy to Hoststar throug FTP

https://www.hoststar.ch/en/support/hosting/introduction/set-own-index-page

## Dynamically Fetch Data

There are several options (until now)
### Static: Fetch the API of wordpress via client

Use SWR:
https://nextjs.org/docs/basic-features/data-fetching/client-side
### Dynamic: Deploy on different server


https://academind.com/tutorials/nextjs-wordpress-headless-cms

### No dynamic fetching
Always build page new

## Mantine
Installed: npm install @mantine/core @mantine/hooks @mantine/next @emotion/server @emotion/react

## Google maps
npm i -D @types/google.maps

## React Scroll
```npm install react-scroll```
And then install the types to get rid of the errors: ```npm install --save @types/react-scroll``

## NPM

Kill process when vscode closed:

- Get process id (PID) running on port 3000 with `lsof -i :3000`
- Kill process with PID X: sudo kill -9 X

## Language Support

https://nextjs.org/docs/advanced-features/i18n-routing

- make sure to work with static site generation

## Static HTML Export

https://nextjs.org/docs/advanced-features/static-html-export

supports:

- Dynamic Routes when using getStaticPaths
- Prefetching with next/link
- Preloading JavaScript
- Dynamic Imports
- Any styling options (e.g. CSS Modules, styled-jsx)
- Client-side data fetching
- getStaticProps
- getStaticPaths
- Image Optimization using a custom loader
