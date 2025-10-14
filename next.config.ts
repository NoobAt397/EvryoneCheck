import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // This suppresses hydration warnings caused by browser extensions.
  onRecoverableError: (error: unknown) => {
    // Check if the error is an object with a message property
    if (
      typeof error === 'object' &&
      error !== null &&
      'message' in error &&
      typeof (error as { message: unknown }).message === 'string'
    ) {
      if ((error as { message: string }).message.includes('Hydration failed')) {
        return;
      }
    }
  },
  devServer: {
    allowedDevOrigins: [
      "https://9000-firebase-studio-1758822742873.cluster-wurh6gchdjcjmwrw2tqtufvhss.cloudworkstations.dev"
    ]
  }
};
// Force server restart to clear cache
export default nextConfig;
