const http = require('http');

function index(_, res) {
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
}

function message(_, res) {
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

function writeMessage(req, res) {

}

function defaultWebPage(req, res) {
    res.write(`
    <html>
        <head><title>Construction</title></head>
        <body>
            <h1>Sorry but we don't implement the page requested ${req.url} </h1>
        </body>
    </html>
    `)
    return res.end();
}

const server = http.createServer((req, res) => {

    const method = req.method;
    console.log(method)

    switch (req.url) {
        case "/":
            return index(req, res);
        case "/message":
            return message(req, res) ? method === 'GET' : writeMessage(req, res)
        default:
            return defaultWebPage(req, res);
    }

})

server.listen('3000', () => {
    console.log('App running');
})