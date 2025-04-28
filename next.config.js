const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['he'],
    defaultLocale: 'he',
    localeDetection: false,
  },
  images: {
    domains: ['localhost'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    scrollRestoration: true,
  },
  // Enable SWC minification
  swcMinify: true,
  // Configure webpack
  webpack(config) {
    // Optimize SVG
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    
    return config;
  },
};

module.exports = nextConfig;
