const { resolve, join } = require('path');
const DeclarationBundlerPlugin = require('declaration-bundler-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    main: join(__dirname, 'src', 'index.tsx'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  // plugins: [
  //   new DeclarationBundlerPlugin({
  //     moduleName: "serviceb",
  //     out: "./dist/main.d.ts",
  //   }),
  // ],
};
