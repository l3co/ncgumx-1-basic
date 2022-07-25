const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/message') {
        res.write(`
            <html>
                <head>
                    <title>Node Js Course</title>
                </head>
                <body>
                    <form action="/message" method="POST">
                        <input type="text" name="message">
                        <input type="submit" value="Send" />
                    </form>
                </body>
            </html>
        `)
        return res.end();
    }

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
    return res.end();
})

server.listen('3000', () => {
    console.log('App running');
})