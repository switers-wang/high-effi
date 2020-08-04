const clipboardy = require('clipboardy');
const fs = require('fs');
const path = require('path');
function FileCopyPanelPlugin(options) {
  this.options = options || {};
}

FileCopyPanelPlugin.prototype.apply = function(compiler) {
  // 指定一个挂载到 webpack 自身的事件钩子。
  const { filePath = '/index.html'} = this.options;
  compiler.plugin('done', function(compilation /* 处理 webpack 内部实例的特定数据。*/, callback) {
    const fileContent = fs.readFileSync(path.join(compiler.options.output.path, filePath), 'utf8');
    // 功能完成后调用 webpack 提供的回调。
    clipboardy.writeSync(fileContent);
    console.log('文件内容已复制到粘贴板');
    if (callback) {
      callback();
    }
  });
};

exports.default = FileCopyPanelPlugin;
module.exports = exports.default;