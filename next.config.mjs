/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? '/UI-UX-DESIGNER/' : '', // Adjust this to match your repo name
}

export default nextConfig;
