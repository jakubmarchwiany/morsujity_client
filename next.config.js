/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,
        NEXT_PUBLIC_BACKEND_ENDPOINT: process.env.NEXT_PUBLIC_BACKEND_ENDPOINT,
    },
    distDir: "build",
};

module.exports = nextConfig;
