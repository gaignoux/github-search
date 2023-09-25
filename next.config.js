/** @type {import('next').NextConfig} */
require("dotenv").config({
  path: `./.${process.env.NODE_ENV || "production"}.env`,
});
const nextConfig = {
  compress: true,
  swcMinify: true,
  compiler: {
    styledComponents: {
      minify: true,
      ssr: true,
    },
  },
  env: {
    GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN,
    GITHUB_API: process.env.GITHUB_API,
  },
};

module.exports = nextConfig;
