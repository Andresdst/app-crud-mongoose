const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin"); //para generar archivo css
// htmlWebpackPlugin genera un objeto

const devMode = process.env.NODE_ENV !== "production";

//configuraciones webpack
module.exports = {
  //webpack tomara el js de frontend/app.js y lo insertara en frontend/index.html
  entry: "./frontend/app.js",
  output: {
    path: path.join(__dirname, "backend/public"),
    filename: "js/bundle.js",
  },
  module: {
    rules: [
      {
        //reglas de comportamiento de determinados tipos de archivos
        test: /\.css/,
        use: [
          devMode ? "style-loader" : miniCssExtractPlugin.loader,
          "css-loader",
        ],
        //webpack carga el css dentro del JS y es utilizado en el backend/index.html
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./frontend/index.html",
      minify: {
        //configuracion de reducir y limpiar codigo html
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true, //remover atributo tipo en las script tags
        useShortDoctype: true,
      },
    }),
    new miniCssExtractPlugin({
      filename: "css/bundle.css",
    }),
  ],
  devtool: "source-map", //visualizar errores en desarrollo
};
