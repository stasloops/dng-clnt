const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

module.exports = {
    // entry: { myAppName: path.resolve(__dirname, ".src/index.js") },
    entry: ['@babel/polyfill', "./src/index.tsx"],
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: '[name].[contenthash].js',
        sourceMapFilename: '[name].[contenthash].map',
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-typescript',
                            '@babel/preset-react'
                        ]
                    }
                },
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /node_modules/,
                use: [production ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                exclude: /node_modules/,
                type: 'asset/resource'
            },
            // {
            //     test: /\.js$/i,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: [
            //                 '@babel/preset-env',
            //             ]
            //         }
            //     },
            // },
            // {
            //     test: /\.ts$/i,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: [
            //                 '@babel/preset-env',
            //                 '@babel/preset-typescript'
            //             ]
            //         }
            //     },
            // },
            // {
            //     test: /\.tsx$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: [
            //                 '@babel/preset-env',
            //                 '@babel/preset-react'
            //             ]
            //         },
            //     },
            // }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '...'],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: production ? '[name].[contenthash].css' : '[name].css',
        }),
    ],
    devServer: {
        // static: {
        //     directory: path.join(__dirname, 'src'),
        // },
        // compress: true,
        port: 3001,
        historyApiFallback: true
        // open: true,
    },
    mode: production ? 'production' : 'development'
};