import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'res.cloudinary.com', protocol: 'https' },
      { hostname: 'avatars.githubusercontent.com', protocol: 'https' },
      { hostname: 'imgur.com', protocol: 'https' },
      { hostname: 'media2.dev.to', protocol: 'https' },
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if there are ESLint warnings or errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
