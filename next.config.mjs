/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Required for GitHub Pages (static export)
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
