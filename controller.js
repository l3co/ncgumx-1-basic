const fs = require('fs')

function message(req, res) {
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
    const body = []

    req.on('data', (chuck) => {
        body.push(chuck);
        console.log(chuck);
    });

    req.on('end', () => {
        const bodyParser = Buffer.concat(body).toString();
        const message = bodyParser.split('=')[1]
        fs.writeFile('message.txt', message, (err) => {
            console.log(`Error to write a file ${err.message}`)
        });
    })


    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
}

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

module.exports = {
    message: message,
    writeMessage: writeMessage,
    index: index,
    defaultWebPage: defaultWebPage
}