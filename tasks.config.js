module.exports = {
  server: {
    environmentVariables: {
      PORT: process.env.PORT || 9100,
      BASE_URL: process.env.BASE_URL || 'http://localhost:9100'
    }
  }
};