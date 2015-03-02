var tasks = require('js-stack.tasks');

module.exports = function(config) {
  var configHash = tasks.getKarmaConfig({});
  config.set(configHash);
};
