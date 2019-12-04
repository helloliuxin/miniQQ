// 这里是node的js语法,文件的引入不能使用es6 import
// 只能使用common.js  require
// 获取本地json文件
var data = require('./mockdata')
var self = data.self
var friends = data.friends

// 将需要修改webpack配置的对象通过module.exports公开出去
// TODO:如果真实开发请让你的api与公司的api保持一致,项目完成后打包上架时,不会打包此处的代码! 你项目中网络请求与公司提供的api不一致导致无法请求数据
module.exports = {
    devServer: {
        before(app) {
            // 在服务器开始创建时声明当前本地服务
            // app代表服务器,get当前api为get请求,
            app.get('/api/self', function (req, res) {
                res.json({data: self});
            });
            app.get('/api/friends', function (req, res) {
                res.json({data: friends});
                // res.json 后台向前端返回json数据
            });
        },
        proxy: {
            "/robot": {
                target: "http://www.tuling123.com/openapi/api",
                changeOrigin: true,
                pathRewrite: { // 路径重写
                    '^/robot': ''
                }
            }
        }
    }
}
