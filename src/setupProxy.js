const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy(
      '/api', //只有api开头的请求，才转发给后端服务器
      {
        target: 'http://localhost:5000', // 转发给谁
        changeOrigin: true, // 可写可不写，控制服务器收到的请求头的host字段，false就是客户端，true就和服务端一样
        pathRewrite: {'^/api': ''} // 去掉url中的/api,重写路径，去掉前缀
      }),

    proxy(
      '/api1', //只有api开头的请求，才转发给后端服务器
      {
        target: 'http://localhost:5001', // 转发给谁
        changeOrigin: true, // 可写可不写，控制服务器收到的请求头的host字段，false就是客户端，true就和服务端一样
        pathRewrite: {'^/api1': ''} // 去掉url中的/api,重写路径，去掉前缀
      })

  );
};