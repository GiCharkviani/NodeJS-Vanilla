/**
 * Primary file for the API
 *
 */

// Dependencies
const server = require('./lib/server');
const workers = require('./lib/workers');
const cli = require('./lib/cli');
const cluster = require('cluster');
const os = require('os');

// Declare the app
const app = {};

// Init function
app.init = function () {
    if(cluster.isMaster) {
        // If we are on the master thread, start the background workers and the CLI
        workers.init();

        // Start the CLI, but make sure it starts last
        setTimeout(function () {
            cli.init()
        });

        // Fork the process
        for(let i = 0; i < os.cpus().length; i++) {
            cluster.fork()
        }
    } else {
        // If we are not on the master thread, Start the HTTP server
        server.init();
    }
};

// Execute
app.init();

// Export the app
module.exports = app;