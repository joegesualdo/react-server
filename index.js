const DevServer = require('./lib/devServer.js');

class ReactServer {
  static start(entryFile, outputFile, host = 'localhost', port = 8080) {
    const server = new DevServer(entryFile, outputFile, host, port);
    server.listen(port);
  }
}

module.exports = ReactServer;

