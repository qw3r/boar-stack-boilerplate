var nodemon = require('nodemon'),
    colors = require('colors');


nodemon({
    script: 'server/server.js',
    ext: 'js',
    watch: 'server',
    delay: 1,
    env: { 'NODE_ENV': 'development' }
}).on('log', function(log) {
    console.log(log.message.cyan);
}).on('restart', function() {
    console.log('Restarting...'.yellow);
});