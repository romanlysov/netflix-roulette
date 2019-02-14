const path = require('path')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const srcPath = path.join(__dirname, 'src')
const distPath = path.resolve(__dirname, 'dist')

module.exports = {
    context: srcPath,
    mode: 'production',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            components: path.join(srcPath, 'components')
        }
    },

    entry: './index.jsx',
    output: {
        filename: 'main.js',
        path: distPath
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'

            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'
                ]
            },
            {
                test: /\.(ttf|eot|svg|woff|png|jpg)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name][hash].[ext]'
                }
            }

        ]
    },

    plugins: [
        new CaseSensitivePathsPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hello Roman',
            hash: true,
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new CleanWebpackPlugin(distPath)
    ]
};