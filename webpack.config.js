const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: { main: "./src/main.js", },
    output: {
        path: path.resolve(__dirname, "build"),
    },

    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },

            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                    }
                }, ],
                //type: 'asset/resource',
            },
        ],
    },

    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
            favicon: "./public/favicon.ico",
        })
    ],
};