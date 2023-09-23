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
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    GITHUB_API: process.env.GITHUB_API,
    GITHUB_AUTHORIZE_ENDPOINT: process.env.GITHUB_AUTHORIZE_ENDPOINT,
    GITHUB_GRANT_ENDPOINT: process.env.GITHUB_GRANT_ENDPOINT,
  },
};

module.exports = nextConfig;
