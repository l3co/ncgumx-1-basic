
const requestHandler = (req, res) => {
    if (req.url === '/') {
        res.write(`<h1>Users</h1>`)
        res.write(`<hr>`)
        res.write(`<ul>${global.users.map((value, index) => {
            return `<li> ${index} -- ${value} </li>`
        }).join('')}</ul>`)
        return res.end();
    }

    if (req.url === '/user') {
        res.write(`
        <html>
            <head>
                <title>User</title>
            </head>
            <body>
                <form action='/save' method='POST'>
                    <label>Nome : </label><input type='text' name='username' >
                    <input type='submit' value='Save' >
                </form>
            </body>
        </html>
        `)
    }

    if (req.url === '/save' && req.method === 'POST') {
        const body = []

        req.on('data', (part) => {
            body.push(part)
        });

        req.on('end', () => {
            const bodyParser = Buffer.concat(body).toString();
            const username = bodyParser.split('=')[1]
            console.log(username);
            global.users.push(username)
        });

        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
}

module.exports = requestHandler;