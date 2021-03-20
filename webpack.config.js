const path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/online/index.js',
    output: {
        filename: 'online.js',
        path: path.resolve(__dirname, 'dist'),
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
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        hot: true,
    },
};