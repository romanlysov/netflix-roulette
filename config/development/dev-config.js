import webpack from 'webpack';
import {config} from "../config";

const devConfig = {
    ...config,
    mode: 'development',
    devtool: 'source-map',

};

const cssOption = {
    test: /\.scss$/,
    use: [
        "css-loader", "sass-loader"
        ]
};

devConfig.module.rules.push(cssOption);

const compiler = webpack(devConfig);
compiler.run((err, stats) => {
    if (err) {
        console.log(err);
    }
    console.log(stats.toString({
        chunks: false,
        colors: true
    }));
});