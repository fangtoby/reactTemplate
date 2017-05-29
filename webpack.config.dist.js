var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html

//定义地址
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src'); //__dirname 中的src目录，以此类推
var APP_FILE = path.resolve(APP_PATH, 'App'); //根目录文件app.jsx地址
var BUILD_PATH = path.resolve(ROOT_PATH, 'public/dist'); //发布文件所存放的目录/pxq/dist/前面加/报错？


module.exports = {
    entry: {
        app: APP_FILE,
        common: [
            "react",
            'react-dom',
            'react-router',
            'react-router-dom',
            'redux',
            'react-redux',
            'redux-thunk',
            'immutable'
        ]
    },
    output: {
        publicPath: '/public/dist/', //编译好的文件，在服务器的路径,域名会自动添加到前面
        path: BUILD_PATH, //编译到当前目录
        filename: '[name].js', //编译后的文件名字
        chunkFilename: '[name].[id].[chunkhash:8].min.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /^node_modules$/,
            loaders: ['babel-loader']
        }, {
            test: /\.css$/,
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) //['style-loader', 'css-loader', 'autoprefixer-loader']
        }, {
            test: /\.less$/,
            exclude: /^node_modules$/,
            loaders: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'autoprefixer-loader', 'less-loader'] })//['style-loader', 'css-loader', 'autoprefixer-loader', 'less-loader']
        }, {
            test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
            exclude: /^node_modules$/,
            loader: 'file-loader?name=[name].[ext]'
        }, {
            test: /\.(png|jpg|gif)$/,
            exclude: /^node_modules$/,
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
            //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
        }, {
            test: /\.jsx$/,
            exclude: /^node_modules$/,
            loaders: ['jsx-loader', 'babel-loader']
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production') //定义生产环境
            }
        }),
        new HtmlWebpackPlugin({  //根据模板插入css/js等生成最终HTML
            filename: '../index.html', //生成的html存放路径，相对于 path
            template: './src/template/index.html', //html模板路径
            inject: 'body',
            hash: true,
            minify:{    //压缩HTML文件
                  removeComments:true,    //移除HTML中的注释
                  collapseWhitespace:true    //删除空白符与换行符
            }  
        }),
        new ExtractTextPlugin('[name].[id].[chunkhash:8].min.css'),
        //提取出来的样式和common.js会自动添加进发布模式的html文件中，原来的html没有
        new webpack.optimize.CommonsChunkPlugin({ name: 'common', filename: 'common.common.js' }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false, // remove all comments
            },
            compress: {
                warnings: false
            }
        }),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
    }
};