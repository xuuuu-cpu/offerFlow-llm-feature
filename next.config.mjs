/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow the app to run in a subdirectory if needed
  // basePath: '',

  // Image configuration for public images
  images: {
    unoptimized: true,
  },

  // Enable React strict mode
  reactStrictMode: true,

  // Experimental features
  experimental: {
    // Enable Turbopack dev mode (already via --turbopack flag)
  },
}

export default nextConfig
