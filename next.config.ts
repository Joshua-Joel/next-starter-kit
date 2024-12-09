import { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Example: Hot-reloading for specific folders (optional)
      const chokidar = require('chokidar');
      const stylesFolder = path.resolve(__dirname, 'styles');

      chokidar.watch(stylesFolder).on('all', () => {
        Object.keys(require.cache).forEach((id) => {
          if (id.startsWith(stylesFolder)) {
            delete require.cache[id];
          }
        });
      });
    }
    return config;
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
};

export default nextConfig;
