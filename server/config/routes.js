'use strict';

module.exports = [
  { method: 'get', path: '/{param*}', config: require('../routes/general/static') },
  { method: 'get', path: '/', config: require('../routes/general/login') },
  { method: 'get', path: '/account', config: require('../routes/general/account') },
  { method: 'get', path: '/home', config: require('../routes/general/home') },

  { method: 'post', path: '/user', config: require('../routes/user/create') },
  { method: 'get', path: '/user/{userId}', config: require('../routes/user/show') },

  { method: 'get', path: '/events', config: require('../routes/event/index') },
  { method: 'get', path: '/event/{eventId}', config: require('../routes/event/show') },
  { method: 'post', path: '/event', config: require('../routes/event/create') },
  { method: 'get', path: '/myEvents', config: require('../routes/event/myEvents') }
];
