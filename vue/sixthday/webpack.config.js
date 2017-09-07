//名字必须是webpack.config.js
//webpack是基于node commonjs规范的
let path = require('path');
module.exports = {
    entry:'./src/main.js',//打包的入口
    output:{
        filename:'bundle.js', //打包后的文件名
        path:path.resolve('./dist'), //path必须是绝对路径
    }
};