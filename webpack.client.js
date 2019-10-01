const path = require('path');

module.exports = {
    entry: './src/client/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modudle/,
                options: {
                    presets: [
                        '@babel/preset-react',
                        ['@babel/preset-env', { targets: { browsers: ['last 2 version'] } }]
                    ]
                }
            }
        ]
    }
}