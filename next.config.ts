import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@shared-components/typography'],
  compiler: {
    emotion: {
      sourceMap: true,
      autoLabel: 'dev-only',
      labelFormat: '[local]',
    },
  },
  webpack: (config, { isServer }) => {
    // Handle the shared-components submodule
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/shared-components': require.resolve('./shared-components/src'),
    };
    
    return config;
  },
};

export default nextConfig;
