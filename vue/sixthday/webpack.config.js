//名字必须是webpack.config.js
//webpack是基于node commonjs规范的
let path = require('path');
module.exports = {
    entry:'./src/main.js',//打包的入口
    output:{
        filename:'bundle.js', //打包后的文件名
        path:path.resolve('./dist'), //path必须是绝对路径
    },
    module:{ //模块
        rules:[ //给模块配置规则
            //匹配js 使用babel-loader但是不管node_modules文件,如果用到babel需要配置一个文件.babelrc 会自动查找其中预设进行解析
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            //将css文件匹配到先解析成css 再将css插入到style便签内,写法:从右往左写
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
        ]
    }
};