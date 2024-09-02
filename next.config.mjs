/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ydpxoqbyglrxyjpmeajg.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  // output: "export",
}

export default nextConfig
