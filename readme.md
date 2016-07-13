## react-server [![Build Status](https://travis-ci.org/joegesualdo/react-server.svg?branch=master)](https://travis-ci.org/joegesualdo/react-server)
> Quickly start react server.

## Install
```
$ npm install --save @joegesualdo/react-server
```

## Usage
```javascript
import ReactServer from "@joegesualdo/reactServer"
let server = new ReactServer();

server.start("./index.jsx", 'bundle.js');
```

## API
### `ReactServer()`
> Creates an instance of the server

```javascript
import ReactServer from "@joegesualdo/reactServer"
let server = new ReactServer();

server.start("./index.jsx", 'bundle.js');
```
### `reactServer.start(entryFilePath, ouputPath, host, port)`
> Starts the server

| Name | Type | Description |
|------|------|-------------|
| entryFilePath | `String` | Path to the entry file |
| outputPath| `String` | The path where you want the code to be rendered |
| host | `String` | The host that you want the server to run on (Default: `localhost`)|
| port| `Number` | The port you want the server to run on |

# Viewing in the browser
#### Create HTML file
```
$ touch index.html
```

#### Start Server
```javascript
import ReactServer from "@joegesualdo/reactServer"
let server = new ReactServer();

server.start("./index.jsx", 'assets/bundle.js');
```

#### Reference the server and output file in your HTML file
```html
<html>
  <body>
    ...
    <script src="http://localhost:8080/assets/bundle.js"></script>
  </body>
</html>
```
> NOTE: Make sure host, port, and outputFile match what was passed to `.createServer(...)`

#### Find and View the HTML file
Visit [http://localhost:8080](http://localhost:8080) 
> NOTE: Make sure host and port are the ones specified when creating the server

An interactive file system will appear. Navigate to the location of the .html file

## Test
```
$ npm test
```
## Build
```
$ npm run build
```

## License
MIT © [Joe Gesualdo]()
