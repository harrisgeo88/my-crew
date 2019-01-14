const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: "html-loader"
                }
            ]
        },
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        },
        {
            test: /\.(js|mjs|jsx)$/,
            enforce: 'pre',
            use: [
                {
                options: {
                    formatter: require.resolve('react-dev-utils/eslintFormatter'),
                    eslintPath: require.resolve('eslint'),

                },
                loader: require.resolve('eslint-loader'),
                },
            ],
            // include: paths.appSrc,
        },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};