const app = require('./app') // varsinainen Express-sovellus
const http = require('http')
const logger = require('./utils/logger')

const server = http.createServer(app)

server.listen(3001, () => {
  logger.info(`Server running on port ${3000}`)
})