import {paths} from "../settings";

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const pathToClean = paths.dist;

export const config = {
    context: paths.src,
    resolve: {
        extensions: [".js", ".jsx"]
    },

    entry: './index.js',
    output: {
        filename: 'main.js',
        path: paths.dist
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(ttf|eot|svg|woff|png)$/,
                loader: "file-loader",
                options: {
                    name: "[path][name].[ext]?[hash]"
                }
            }

        ]
    },
    plugins: [
        new CaseSensitivePathsPlugin(),
        new HtmlWebpackPlugin({
            title: "Hello Roman",
            hash: true,
            template: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CleanWebpackPlugin(pathToClean)
    ]
};