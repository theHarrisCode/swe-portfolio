import { resolve as _resolve, join } from "path";
export const entry = "./src/index.js";
export const output = {
  filename: "bundle.js", // Output bundle file name
  path: _resolve(__dirname, "dist"), // Output directory
};
export const module = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
      },
    },
  ],
};
export const resolve = {
  extensions: [".js", ".jsx"],
  alias: {
    '@': _resolve(__dirname, 'src'),
    '@assets': _resolve(__dirname, 'src/assets'),
    '@components': _resolve(__dirname, 'src/components'),
  },
};
export const devServer = {
  contentBase: join(__dirname, "public"), // Serve files from this directory
  port: 3000, // Port for the development server
  open: true, // Open the default web browser when the server starts
};