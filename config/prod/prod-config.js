import webpack from 'webpack';
import {config} from "../config";

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const prodConfig = {
    ...config,
    mode: 'production'
};

const cssProdOption = {
    test: /\.scss$/,
    use: [
        MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"
    ]
};

prodConfig.module.rules.push(cssProdOption);

const compiler = webpack(prodConfig);
compiler.run((err, stats) => {
    if (err) {
        console.log(err);
    }
    console.log(stats.toString({
        chunks: false,
        colors: true
    }));
});