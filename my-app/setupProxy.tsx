import { createProxyMiddleware } from 'http-proxy-middleware';

export default function setupProxy(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:5145',  
            changeOrigin: true,
        })
    );
}
