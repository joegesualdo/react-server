const ReactServer = require('./../index.js');

let server = new ReactServer();

server.start("./examples/index.jsx", 'assets/bundle.js');
