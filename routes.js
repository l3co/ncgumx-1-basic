const controllers = require('./controller')

const requestHandler = (req, res) => {
    const method = req.method;
    const url = req.url;

    if (url === '/') {
        return controllers.index(req, res);
    }

    if (url === '/message' && method === 'GET') {
        return controllers.message(req, res)
    }

    if (url === '/message' && method === 'POST') {
        return controllers.writeMessage(req, res)
    }

    return controllers.defaultWebPage(req, res);
}

module.exports = requestHandler