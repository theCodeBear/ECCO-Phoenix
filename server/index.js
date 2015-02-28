var Hapi = require('hapi');
var routes = require('./config/routes');
var plugins = require('./config/plugins');
var views = require('./config/views');
var mongoose = require('mongoose');
var server = new Hapi.Server();

mongoose.connect(process.env.MONGO_URL);
server.connection({ port: process.env.PORT});

mongoose.connection.once('open', function() {
  server.views(views);
  server.register(plugins, function() {
    server.route(routes);
    server.start(function() {
      console.log('Server running at: ', server.info.uri);
    });
  });
});
