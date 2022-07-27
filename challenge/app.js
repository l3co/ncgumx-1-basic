const http = require('http')
const routes = require('./routes')

global.users = ['Leandro', 'Bruno']

const server = http.createServer(routes)

server.listen(3000, () => {
    console.log('App is running on port 3000');
})