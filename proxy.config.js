const proxy = [
    {
      context: '/proxy',
      target: 'http://localhost:5000',
      pathRewrite: {'^/proxy' : ''}
    }
  ];
  module.exports = proxy;