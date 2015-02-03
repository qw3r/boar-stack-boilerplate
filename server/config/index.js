var path = require('path');

module.exports = {

  root: path.normalize(__dirname + '/../'),
  env: process.env.NODE_ENV,
  ip: process.env.IP || undefined,
  port: process.env.PORT || 3000

};