var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var path = require('path');

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    contentBase: './client',
    hot: true,
    filename: 'bundle.js',
    stats: {
        colors: true,
    },
});
server.listen(4000, 'localhost', function() {});
