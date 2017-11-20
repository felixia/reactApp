'use strict';

var webpack = require('webpack');
var path = require('path');
module.exports = {

    entry: {
        app: './client/src/app.js'
    },
    output: {
        filename: 'client/build/bundle.js',
        sourceMapFilename: 'client/build/bundle.map'
    },
    devtool: '#source-map',
    module: {
        loaders: [{
            test: /\.js?/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            loader: 'url-loader',
            options: {
                limit: 10000
            }
        }]
    }

};

//# sourceMappingURL=webpack.config-compiled.js.map