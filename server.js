var express = require('express'),
    app 	= express(),
    server 	= require('http').createServer(app);
var _ 			    = require('underscore'),
    path            = require('path'),
    logger          = require('morgan'),
    cookieParser    = require('cookie-parser'),
    bodyParser      = require('body-parser'),
    session         = require('express-session'),
    favicon 	    = require('serve-favicon'),
    debug           = require('debug')('noders:server');
var keys    	    = require('./secrets/keys.js');

var index           = require('./app/routes/index');

// View engine
app.set('view engine', 'jade');
app.set('views', './app/views');

// Add post, cookie and session support
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'),{ maxAge: keys.tiempo }));
app.use(favicon(path.join(__dirname,'public/imagenes/favicon.ico')));
app.use(session({
    secret: "EpicNoders",
    resave: false,
    saveUninitialized: false
}));

//Production Mode
app.set('env', 'production');

//Routes pages
app.use(index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    debugger;
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var port = normalizePort(keys.puerto);
app.set('port', port);

/**
 * Create HTTP server.
 */ 	
 
/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Puerto ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' require privilegios root');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' ya esta en uso');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}

