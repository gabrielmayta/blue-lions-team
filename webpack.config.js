/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

var Webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./app/structure/bootstrap.js",
    output: {
        filename: "bundle.js",
        path: "./dist"
    },
    module: {
        loaders: [
            {test: /\.js$/, loaders: ["react-hot", "babel"], exclude: /node_modules/},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract("css!sass"), exclude: /node_modules/},
            {test: /\.(jpg|png|gif|eot|woff|woff2|ttf|svg)$/, loader: "file", exclude: /node_modules/},
            {test: /\.json$/, loader: "json", exclude: /node_modules/}
        ]
    },
    resolve: {
        modulesDirectories: ["node_modules", "app"],
        alias: {
            "swiper": "swiper/dist/js/swiper.js"
        }
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
        new Webpack.ProvidePlugin({
            Swiper: "swiper"
        })
    ]
};