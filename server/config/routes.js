'use strict';

module.exports = [
  { method: 'get', path: '/{param*}', config: require('../routes/general/static') },
  { method: 'get', path: '/', config: require('../routes/general/login') },
  { method: 'get', path: '/account', config: require('../routes/general/account') },
  { method: 'get', path: '/home', config: require('../routes/general/home') }
];
