var Hapi = require('hapi');
var routes = require('./config/routes');
var plugins = require('./config/plugins');
var views = require('./config/views');

var server = new Hapi.Server();

server.connection({ port: process.env.PORT});
server.route(routes);
server.views(views);
server.register(plugins, function(err) { if (err) throw err});
server.start(function() {
  console.log('Server running at: ', server.info.uri);
});
