# Node

## HTTPS

###### HTTPS server

```shell
/**
 * Module dependencies.
 */
var app = require("../app");

/**
 * Get port from environment and store in Express.
 */
var port = "443";
app.set("port", port);

/**
 * Create HTTPS server.
 */
var fs = require('fs');
var options = {
  key: fs.readFileSync('encryption/ancgis.dev.net.key'),
  cert: fs.readFileSync( 'encryption/ancgis.dev.net.crt' )
};
var https = require('https');
var https_server = https.createServer(options, app);

/**
 * Listen on provided port, on all network interfaces.
 */
https_server.listen(port);
https_server.on("error", onError);
https_server.on("listening", onListening);
```

Sources:
- [Creating an HTTPs server with Node.js and Express](https://contextneutral.com/story/creating-an-https-server-with-nodejs-and-express/?utm=medium),
- [Node.js https pem error: routines:PEM_read_bio:no start line](https://stackoverflow.com/questions/22584268/node-js-https-pem-error-routinespem-read-biono-start-line)

