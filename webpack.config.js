module.exports = {
    entry: [
        './src/app.js'
    ],
    output: {
        path: __dirname,
        filename: 'app.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel'
        }]
    }
};
