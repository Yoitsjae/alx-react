const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        header: './modules/header/header.js',
        body: './modules/body/body.js',
        footer: './modules/footer/footer.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public',
        port: 8564,
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
};
