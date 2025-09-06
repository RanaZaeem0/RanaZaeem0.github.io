// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ensures static HTML export
  basePath: "/RanaZaeem0.github.io", // IMPORTANT if your repo is not <username>.github.io
  images: {
    unoptimized: true, // disable next/image optimization for static export
  },
};

module.exports = nextConfig;
