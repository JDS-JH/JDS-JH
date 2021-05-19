const webpack = require("webpack");


module.exports = {



/*    output: {
        publicPath: process.env.NODE_ENV === 'production'
            ? './' +config.build.assetsPublicPath
            : './' + config.dev.assetsPublicPath,
        // 上面是添加代码
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
    },*/
    devServer: {
        proxy: {
            '/api': {
                // 测试环境
                target: 'http://v.juhe.cn', // 接口域名
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/api': '' //需要rewrite重写的
                } 
            },
            '/api2': {
                // 测试环境
                target: 'http://apis.juhe.cn', // 接口域名
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/api2': '' //需要rewrite重写的
                } 
            }
        },
        disableHostCheck: false,
        host: "127.0.0.1",
        port: 8080,
        https: false,
        hotOnly: false,

    },
  
configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        ]
    },

    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/',
    assetsDir: "static",
    outputDir: 'dist',
};
