const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        online: './src/online/index.js',
        offline: './src/offline/index.js',
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/build',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    "postcss-loader"
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/template.html',
            chunks: ['online'],
        }),
        new HtmlWebpackPlugin({
            filename: 'offline.html',
            template: 'src/template.html',
            chunks: ['offline'],
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
    },
};