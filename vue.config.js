const path = require('path')

module.exports={
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    productionSourceMap: false,
    pages: {
        'index': {
                // page 的入口
            entry: 'examples/main.js',
            // 模板来源
            template: 'examples/index.html',
            // 在 dist/index.html 的输出
            filename: 'main.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'FloatUI'
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            //chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    },
    //扩展 webpack 配置， 使 packages 加入编译
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
            .add('/packages')
            .end()
            .use('babel')
            .loader('babel-loader');
    },
    pluginOptions: { // 第三方插件配置,使用less来解析文件
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, './packages/assets/gloabal.less'),
                path.resolve(__dirname, './packages/assets/theme/default.less')
            ]
        }
    },
    // configureWebpack: {
    //     resolve: {
    //         alias: {
    //             'vue$': 'vue/dist/vue.esm.js'
    //         }
    //     }
    // },
    devServer: {
        index: 'index', // 运行时
        openPage:'index',
        // // 告诉dev-server在服务器启动后打开浏览器，将其设置true为打开默认浏览器
        open: true,
        host: '192.168.101.37',
        port: 8900,
        https: false,
        hotOnly: false
    }
}
