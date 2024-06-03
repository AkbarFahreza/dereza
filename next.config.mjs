/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "res.cloudinary.com" },
      { hostname: "pbs.twimg.com" },
    ],
  },
};

export default nextConfig;
