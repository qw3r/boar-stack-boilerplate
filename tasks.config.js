module.exports = {
  server: {
    environmentVariables: {
      PORT: process.env.PORT || 9100,
      BASE_URL: process.env.BASE_URL || 'http://localhost:9100'
    }
  },
  client: {
    vendors: [
      'node_modules/angular/angular.js',
      'bower_components/jquery/dist/jquery.js',
      'bower_components/highcharts/highcharts.js',
      'bower_components/highcharts-ng/dist/highcharts-ng.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js'
    ],
    app: {
      testModules: [
        'node_modules/angular-mocks/angular-mocks.js',
        'node_modules/karma-chai-plugins/function-bind-polyfill.js'
      ]
    }
  }
};