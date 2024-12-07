import path from 'path';
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config) {
    // Modify the webpack configuration to support Sass
    config.module?.rules.push({
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            api: 'modern-compiler',
            sassOptions: {
              includePaths: [path.join(__dirname, 'src/app/styles')],
            },
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
