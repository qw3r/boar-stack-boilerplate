module.exports = {
  build: {
    distPath: 'dist/'
  },
  server:{
    path: 'server/',
    runnable: 'dist/server.js',
    filePattern: ['server/**/*', 'package.json', '!**/*.spec.*', '!**/*.mock.*']
  }
};