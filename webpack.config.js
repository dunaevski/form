const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const p = require('./package.json');
const path = require('path');

const hashType = '[hash]';

let plugins = [
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: `[name].${ hashType }.css`,
            chunkFilename: `[id].${ hashType }.css`,
        }),
];


module.exports = {
    mode: 'production',
    entry: {
        vendor: Object.keys(p.dependencies),
        bundle: ['./src/index.jsx'],
    },
    output: {
        filename: `[name].${ hashType }.js`,
        path: __dirname + '/dist',
        publicPath: '/',
    },

    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },

    devServer: {
        host: '0.0.0.0',
        port: 3000,
        historyApiFallback: true,
        disableHostCheck: true,
        publicPath: '/',
        contentBase: path.join(__dirname, 'src'),
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    resolve: {
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.jsx',
            '.json',
        ],
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules'),
        ],
    },

    module: {
        rules: [
            {
                test: /\.module\.(c|sa|sc)ss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
                        },
                    },
                    'resolve-url-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(c|sa|sc)ss$/,
                exclude: /\.module\.(c|sa|sc)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'resolve-url-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.svg$/,
                use: ['raw-loader'],
            },
        ],
    },

    plugins: [
        ...plugins,
    ],
};
