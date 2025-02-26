const http = require('http');
const httpProxy = require('http-proxy');

// Proxy server တစ်ခု ဖန်တီးတယ်
const proxy = httpProxy.createProxyServer({});

// HTTP server တစ်ခု စတင်တယ်
const server = http.createServer((req, res) => {
    console.log(`Request received: ${req.url}`);
    // Proxy ကနေ သတ်မှတ်ထားတဲ့ target ဆီ ပို့မယ်
    proxy.web(req, res, {
        target: 'https://example.com', // ဒီနေရာမှာ သင်လိုချင်တဲ့ website ကို ထည့်ပါ
    });
});

// Server ကို port 3000 မှာ စတင်တယ်
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});