/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Technologies',
    description: 'The official store for Kasm supported workspaces.',
    icon: 'https://enterprisium.github.com/kasm-registry/blob/1.0/site/public/emoji.png',
    listUrl: 'https://enterprisium.github.io/kasm-registry/',
    contactUrl: 'https://github.com/enterprisium/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
