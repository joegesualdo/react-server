module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DevServer = __webpack_require__(1);

	var ReactServer = function () {
	  function ReactServer() {
	    _classCallCheck(this, ReactServer);
	  }

	  _createClass(ReactServer, null, [{
	    key: 'start',
	    value: function start(entryFile, outputFile) {
	      var host = arguments.length <= 2 || arguments[2] === undefined ? 'localhost' : arguments[2];
	      var port = arguments.length <= 3 || arguments[3] === undefined ? 8080 : arguments[3];

	      var server = new DevServer(entryFile, outputFile, host, port);
	      server.listen(port);
	    }
	  }]);

	  return ReactServer;
	}();

	module.exports = ReactServer;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'user strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var webpack = __webpack_require__(2);
	var WebpackDevServer = __webpack_require__(3);
	var webpackConfig = __webpack_require__(4);
	var webpackCompiler = __webpack_require__(13);
	var webpackDevServerConfig = __webpack_require__(14);

	var DevServer = function DevServer(entryFile, outputFile, host, port) {
	  _classCallCheck(this, DevServer);

	  var config = webpackConfig(entryFile, outputFile);
	  config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
	  var compiler = webpackCompiler(config);
	  var server = new WebpackDevServer(compiler, webpackDevServerConfig());
	  return server;
	};

	module.exports = DevServer;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-server");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var path = __webpack_require__(5);
	var webpack = __webpack_require__(2);
	var precss = __webpack_require__(6);
	var postcssCssnext = __webpack_require__(7);
	var StyleLintPlugin = __webpack_require__(8);

	function webpackConfig(entryFile, outputFile) {
	  var config = {
	    // the base path which will be used to resolve entry points
	    // context: process.cwd(),
	    // the main entry point for our application's frontend JS
	    entry: {
	      app: [
	      // process.cwd() + "/" +entryFile,
	      entryFile]
	    },
	    output: {
	      // this is our app/assets/javascripts directory, which is part of the Sprockets pipeline
	      path: process.cwd(),
	      // the filename of the compiled bundle, e.g. app/assets/javascripts/bundle.js
	      filename: outputFile || 'bundle.js'
	    },
	    module: {
	      loaders: [{
	        test: /.jsx?$/,
	        loader: 'babel-loader',
	        exclude: /(node_modules|bower_components)/,
	        query: {
	          presets: ['es2015', 'react', 'stage-0']
	        }
	      }, {
	        test: /\.css$/,
	        loaders: ['style',
	        // If we want to use the style.className syntax:
	        'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap',
	        // 'css?&sourceMap',
	        'postcss-loader']

	      }],
	      preLoaders: [{
	        test: /\.jsx?$/,
	        loaders: ['eslint'],
	        exclude: /(node_modules|bower_components)/
	      }, {
	        test: /\.css$/,
	        loader: 'stylelint'
	      }]
	    },
	    postcss: function postcss(webpack) {
	      return [__webpack_require__(9)({ addDependencyTo: webpack }), __webpack_require__(10)(), __webpack_require__(7)(), __webpack_require__(6)(), __webpack_require__(11)];
	    },
	    eslint: {
	      configFile: __dirname + '/eslintrc.json',
	      formatter: __webpack_require__(12)
	    },
	    stylelint: {
	      configFile: path.join(__dirname, './stylelintrc')
	    },
	    resolve: {
	      // tell webpack which extensions to auto search when it resolves modules. With this,
	      // you'll be able to do `require('./utils')` instead of `require('./utils.js')`
	      extensions: ['', '.js', '.jsx', '.scss', '.css']
	    },
	    plugins: [
	    // https://github.com/vieron/stylelint-webpack-plugin
	    // new StyleLintPlugin({
	    //   configFile: '.stylelintrc',
	    //   files: './src/stylesheets#<{(||)}>#*.css',
	    // }),
	    new webpack.HotModuleReplacementPlugin()]
	  };
	  return config;
	}

	module.exports = webpackConfig;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("precss");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("postcss-cssnext");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("stylelint-webpack-plugin");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("postcss-import");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("postcss-url");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("postcss-color-function");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("eslint-formatter-pretty");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var webpack = __webpack_require__(2);

	function webpackCompiler(webpackConfig) {
	  var compiler = webpack(webpackConfig);
	  return compiler;
	}

	module.exports = webpackCompiler;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var webpackConfig = __webpack_require__(4);

	function webpackDevServerConfig() {
	  return {
	    hot: true,
	    inline: true
	  };
	}

	module.exports = webpackDevServerConfig;

/***/ }
/******/ ]);