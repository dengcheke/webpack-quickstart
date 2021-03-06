const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode: "production",
    entry: path.resolve(__dirname,"../src/main.js"),
    output: {
        path: path.resolve(__dirname,"../dist"),
        filename: "[name].[contenthash:8].js",
        publicPath: "/",
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.jsx'],
        alias: {
            '@src': path.resolve(__dirname, '../src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false
                    }
                }
            },
            {
                test: /\.m?jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 4096,
                        name: path.posix.join('static', '[name].[hash:8].[ext]')
                    }
                }],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname,"../dist/index.html"),
            template: path.resolve(__dirname, '../static/index.html'),
            title: 'Output Management'
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
        })
    ]
}
