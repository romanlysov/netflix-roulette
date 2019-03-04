const path = require('path')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

const srcPath = path.join(__dirname, 'src')
const distPath = path.resolve(__dirname, 'dist')

module.exports = {
    context: srcPath,
    mode: 'development',
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx'],
        // alias: {
        //     components: path.join(srcPath, 'components')
        // }
    },

    entry: './index.jsx',
    output: {
        filename: 'main.js',
        path: distPath
    },
    devServer: {
        historyApiFallback: true,
        // content: srcPath
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
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.(ttf|eot|svg|woff|png|jpg)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name][hash].[ext]'
                }
            },
            {
                test: /\.(jsx?|js)$/,
                loaders: ['eslint-loader'],
                include: srcPath,
                exclude: /node_modules/
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
        new CleanWebpackPlugin(distPath),
        new StyleLintPlugin()
    ]
};