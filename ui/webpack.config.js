const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// We import the environment variables from `.ports.env` so we know what port this will end up running on on the host
require("dotenv").config({ path: path.join(__dirname, "../.ports.env") });

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src/index.html"),
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8000,
        host: "0.0.0.0",
        hot: true,
        // Because we forward to a different port on the host, we need to tell Webpack where that is, otherwise HMR will immediately disconnect
        public: `http://localhost:${process.env.APP_PORT}`,
    },
};
