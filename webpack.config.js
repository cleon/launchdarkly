const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',  
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};