var Config = {};

Config.build = {
  distPath: 'dist/',
  assetsPath: 'dist/assets/'
};

Config.server = {
  path: 'server/',
  runnable: Config.build.distPath + 'server.js',
  filePattern: ['server/**/*', 'package.json', '!**/*.spec.*', '!**/*.mock.*']
};

Config.client = {
  externalSourceMap: true,

  "static": {
    copyPattern: 'client/static/**/*',
    watchPattern: 'client/static/**/*',
    target: Config.build.assetsPath,
    vendors: ['bootstrap', 'angular']
  },
  app: {
    buildPattern: 'client/app/*.js',
    testPattern: 'client/app/**/*.spec.js',
    watchPattern: 'client/app/**/*.js',
    vendorPattern: 'client/vendors.js',
    target: Config.build.assetsPath + 'scripts/'
  },
  stylesheets: {
    buildPattern: 'client/stylesheets/*.styl',
    watchPattern: 'client/stylesheets/**/*.styl',
    target: Config.build.assetsPath + 'css/'
  },
  vendors: [
    'node_modules/angular/angular.js'
  ]
};

module.exports = Config;
