var webpack = require('webpack')
var express = require('express')
var config = require('./webpack.config.hot')
var proxyMiddleware = require('http-proxy-middleware')
var localConfig = require('./.local.config')

var uri = {
    proxy: 8880,
    host: 'http://localhost',
    remoteApiHost: localConfig.remoteApiHost
}

var app = express();

var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    inline: true,
    progress: true,
    stats: {
        colors: true,
    }
}));

//代理服务器
var api = [
    '/api/*',
];
app.use(api, proxyMiddleware({
    target: uri.remoteApiHost,
    changeOrigin: true,
    ws: true,
    // onProxyReq: relayRequestHeaders,
    // onProxyRes: relayResponseHeaders
}))

app.use(require('webpack-hot-middleware')(compiler));


//将其他路由，全部返回index.html
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html')
});



app.listen(uri.proxy, function() {
    console.log('正常打开' + uri.proxy + '端口')
});

var child_process = require('child_process'),
    url = uri.host + ':' + uri.proxy,
    cmd;

child_process.exec('start ' + url)