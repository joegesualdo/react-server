const DevServer = require('./lib/devServer.js');
const path = require('path')

class ReactServer {
  constructor() {
  }
  start(entryFilePath, outputFilePath, host = 'localhost', port = 8080) {
    let resolvedEntryPath = path.resolve(entryFilePath);
    console.log(resolvedEntryPath)
    const server = new DevServer(resolvedEntryPath, outputFilePath, host, port);
    server.listen(port);
  }
}

module.exports = ReactServer;

