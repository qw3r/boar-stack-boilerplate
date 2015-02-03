module.exports = {
  build: {
    distPath: 'dist/'
  },
  server:{
    path: 'server/',
    runnable: 'dist/server.js',
    filePattern: ['server/**/*', 'package.json', '!**/*.spec.*', '!**/*.mock.*']
  },
  client: {
    path: 'assets/',
    filePattern: ['assets/**/*'],
    appPath: 'client/app',
    appPattern: 'client/app/*.js',
    appDistPath: 'dist/assets/scripts'
  }
};
