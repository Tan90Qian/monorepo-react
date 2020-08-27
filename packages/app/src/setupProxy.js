const { createProxyMiddleware } = require("http-proxy-middleware");
const proxyPort = process.env.PROXY_PORT || 4000;
module.exports = function(app) {
  app.use(
    "/graphql",
    createProxyMiddleware({
      target: `http://localhost:${proxyPort}`,
      changeOrigin: true,
    })
  );
};
