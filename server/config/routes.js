'use strict';

module.exports = [
  { method: 'get', path: '/{param*}', config: require('../routes/general/static') },
  { method: 'get', path: '/', config: require('../routes/general/login') },
  { method: 'get', path: '/home', config: require('../routes/general/home') },

  { method: 'get', path: '/user/new', config: require('../routes/user/new') },
  { method: 'post', path: '/user', config: require('../routes/user/create') },
  { method: 'post', path: '/user/authenticate', config: require('../routes/user/authenticate') },
  { method: 'post', path: '/user/{userId}', config: require('../routes/user/update') },
  { method: 'get', path: '/user/{userId}', config: require('../routes/user/show') },

  { method: 'get', path: '/events', config: require('../routes/event/index') },
  { method: 'get', path: '/event/{eventId}', config: require('../routes/event/show') },
  { method: 'post', path: '/event', config: require('../routes/event/create') },
  { method: 'get', path: '/myEvents', config: require('../routes/event/myEvents') }
];
