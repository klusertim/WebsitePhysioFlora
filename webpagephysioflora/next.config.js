/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    unoptimized: true,
  },
  
  i18n: {
    locales: ['de', 'fr'],
    defaultLocale: 'de',
  },
  
}


module.exports = nextConfig


