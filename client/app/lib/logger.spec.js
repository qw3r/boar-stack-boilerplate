'use strict';

var Logger = require('./logger');

describe('Logger', function() {

  it('should exists', function() {
    var logger = new Logger();
    logger.log('1111');
  });

});