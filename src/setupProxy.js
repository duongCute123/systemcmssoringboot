const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/_next/data/s4OlXy8jONoHVWAT5vg7b/tim-kiem.json',
        createProxyMiddleware({
            target: 'https://ophim9.cc',
            changeOrigin: true,
        })
    );
    app.use(
        '/_next/data/s4OlXy8jONoHVWAT5vg7b/the-loai/tinh-cam.json',
        createProxyMiddleware({
            target: 'https://ophim9.cc',
            changeOrigin: true,
        })
    );
    app.use(
        '/_next/data/s4OlXy8jONoHVWAT5vg7b/quoc-gia/trung-quoc.json?slug=trung-quoc',
        createProxyMiddleware({
            target: 'https://ophim9.cc',
            changeOrigin: true,
        })
    );
};