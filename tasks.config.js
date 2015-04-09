module.exports = {
  server: {
    environmentVariables: {
      PORT: process.env.PORT || 9100,
      BASE_URL: process.env.BASE_URL || 'http://localhost:9100'
    }
  },
  client: {
    vendors: [
      'node_modules/angular/angular.js'
    ],
    app: {
      testModules: ['node_modules/angular-mocks/angular-mocks.js']
    }
  }
};