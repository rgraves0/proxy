const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
    console.log(`Request received: ${req.url}`);
    proxy.web(req, res, {
        target: 'https://youtube.com', // သင်လိုချင်တဲ့ target URL
    });
});

// PORT ကို Railway က ပေးတဲ့ env variable ကနေ ယူမယ်၊ မရရင် 80 ကို default ထားမယ်
const PORT = process.env.PORT || 80;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Proxy server running on port ${PORT}`);
});
