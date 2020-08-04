# 功能：webpack 打包后 复制output文件夹中的文件内容到粘贴板

## Installation

`npm install --save-dev switers-webpackcluster`

## Usage

**webpack.config.js**

***webpack fileCopyPanelPlugin.js***
```js
var { webpackPlugins } = require('switers-webpackcluster');
var { FileCopyPanelPlugin } = webpackPlugins;
module.exports = {
  // ...
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new FileCopyPanelPlugin({
        filePath  /* 相对路径，相对打包出口文件夹目录*/
    })
  ]
}
```