## webpack
- 是一个打包工具,将所有的文件打包成一个

## 使用webpack
- 安装,如果安装全局可能会导致版本的差异,都安装到项目开发依赖中,可以使每个人的版本同一
```
npm install webpack --save-dev
```
- 在package.json中配置脚本
```
scripts:{
    "build":"webpack"
}
```
## 解析es6语法
- babel-core是babel的核心包,使用babel必须安装
- babel-loader 是babel的翻译官,用来翻译语法的,但是他不懂
- 配置预设让他懂es6 babel-preset-es2015
```
npm install babel-core babel-loader babel-preset-es2015 --save-dev
```

## 解析es7语法
- es2015 stage-3 stage-2 stage-1 stage-0(es7语法)
```
npm install babel-preset-stage-0 --save-dev
```

## 解析css 将css看成一个模块
```
npm install css-loader style-loader --save-dev
```

## 解析less
```
npm install less less-loader --save-dev
```
