# js-boilerplate

#How to run tests from command line
- only client side tests - 'gulp client-test'
- only server side tests - 'gulp server-test'
- every tests - 'gulp test'

# How to run client side tests on phpstorm
- run / edit configurations / add karma
- set configuration file (project's main directory and karma.conf.js (/js-boilerplate/karma.conf.js)
- set node interpreter (/.nvm/v0.11.14/bin/node)
- set karma package (project's main directory and node_modules/karma - /js-boilerplate/node_modules/karma)

# How to run server side tests on phpstorm
- run / edit configurations / add mocha
- set node interpreter (/.nvm/v0.11.14/bin/node) 
- set node options (--harmony)
- set working directory (project's main directory - /js-boilerplate)
- set mocha package (project's main directory and node_modules/mocha - /js-boilerplate/node_modules/mocha)
- set extra mocha options (-r co-mocha)
- set test directory (project's main directory and server - /js-boilerplate/server)