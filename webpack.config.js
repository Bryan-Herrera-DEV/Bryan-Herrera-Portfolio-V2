const html_plugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/views/assets/app.dev.js',
    mode: 'production',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    /node_modules/
                ]
            },
            {
                test: /\.(gif|pdf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new html_plugin(
            {
                template: './src/views/index.html',
            }
        )
    ]
}