module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  webpackFinal: async (config, { configType, }) => {
    return config;
    config.module.rules.push({
      test: /\.css$/i,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
          },
        },
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [
                // require('postcss-import'),
                // require('tailwindcss'),
                // require('autoprefixer'),
                ["postcss-import", {}],
                ["tailwindcss", {}],
                ["autoprefix", {}],
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};
