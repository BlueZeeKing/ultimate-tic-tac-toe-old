const path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        online: './src/online/index.js',
        offline: './src/offline/index.js',
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
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
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
    },
};