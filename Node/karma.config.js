// Karma configuration
// See https://medium.com/@rogeriopvl/automating-karma-and-headless-chrome-with-puppetteer-51ce8f6a78b0
// See https://github.com/karma-runner/karma-chrome-launcher
// See https://docs.travis-ci.com/user/chrome#Sandboxing

// Package.json configuration
/*
  "scripts": {
    "karma":"./node_modules/karma/bin/karma start --single-run --browsers ChromeHeadlessNoSandbox ./test/karma.config.js"
  },
  "devDependencies": {
    "karma": "^3.1.4",
    "karma-chai": "^0.1.0",
    "karma-chrome-launcher": "^2.2.0",
    "karma-coverage": "^1.1.2",
    "karma-firefox-launcher": "^1.1.0",
    "karma-mocha": "^1.3.0",
    "karma-ng-scenario": "^1.0.0",
    "karma-sourcemap-loader": "^0.3.7",
    "karma-webpack": "^3.0.5"
  }
*/

process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['ng-scenario', 'mocha', 'chai'],

    // list of files / patterns to load in the browser
    files: [
    //  'client/*.js',
      'test/**/*.test.js'
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    //port: 443,
    port:80,

    hostname: 'localhost',
    proxyValidateSSL: false,
    /*proxies: {
        '/': 'https://localhost/'
    },*/

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeHeadlessNoSandbox'],//, 'Firefox', 'IE'],

    // Define custom flags
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      },
      FirefoxHeadless: {
          base: 'Firefox',
          flags: ['-headless']
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    client: {
      useIframe: false,
      runInParent: true
    }
  })
}
