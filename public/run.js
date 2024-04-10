const { Server } = require('hypertunnel-server')
const server = new Server({
    serverPort: 54321,
    serverToken: 'my-nogga-says-figga'
  })
await server.create()