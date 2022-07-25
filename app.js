const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write(`
    <html>
        <head>
            <title>Node Js Course</title>
        </head>
        <body>
            <h1>My first server with html</h1>
        </body>
    </html>
    `)
    res.end();
})

server.listen('3000', () => {
    console.log('App running');
})