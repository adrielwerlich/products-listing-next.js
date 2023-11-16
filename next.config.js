/** @type {import('next').NextConfig} */
module.exports = {
    // Enable styled components
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
          module: false,
        };
      }
      return config;
    },
    compiler: {
      // Enable styled components
      styledComponents: true,
    },
    images: {
      domains: ['mks-sistemas.nyc3.digitaloceanspaces.com'],
    },
  };