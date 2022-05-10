const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: ['./src/index.tsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist',
        filename: '[name].[hash].js',
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: '[name].css' }),
    ],
    module: {
        rules: [
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpg|jpeg|png|svg)/,
                use: ['file-loader'],
            },
            {
                rules: [
                    {
                        test: /\.m?tsx$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    '@babel/preset-env',
                                    '@babel/preset-react',
                                    [
                                        '@babel/preset-typescript',
                                        {
                                            isTSX: true,
                                            allExtensions: true,
                                            allowNamespaces: true,
                                            allowDeclareFields: true,

                                        },
                                    ],
                                ],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },

        ],
    },
    resolve: { extensions: ['.tsx', '.ts', '.js', '.json'] },
    devServer: {
        port: 3100,
        devMiddleware: { writeToDisk: true },
        static: { directory: path.join(__dirname, 'dist') },
        allowedHosts: 'all',
        open: true,
        client: { overlay: true },
        historyApiFallback: true,
    },
};
