function FileCopyPanelPlugin() {}

FileCopyPanelPlugin.prototype.apply = function(compiler) {
  // 指定一个挂载到 webpack 自身的事件钩子。
  compiler.plugin('done', function(compilation /* 处理 webpack 内部实例的特定数据。*/, callback) {
    const htmlContent = fs.readFileSync(compiler.options.output.path + '/index.html', 'utf8');
    // 功能完成后调用 webpack 提供的回调。
    clipboardy.writeSync(htmlContent);
    console.log('html内容已复制到粘贴板');
    if (callback) {
      callback();
    }
  });
};