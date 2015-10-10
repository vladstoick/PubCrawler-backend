var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'pubcrawler'
    },
    port: 3000,
    db: 'mongodb://localhost/pubcrawler-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'pubcrawler'
    },
    port: 3000,
    db: 'mongodb://localhost/pubcrawler-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'pubcrawler'
    },
    port: 3000,
    db: 'mongodb://localhost/pubcrawler-production'
  }
};

module.exports = config[env];
