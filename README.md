# js-boilerplate


# How to start the project for developing
- gulp start

# How to create a build for deployment
- gulp build

# How to run tests from command line
- only client side tests - 'gulp client-test'
- only server side tests - 'gulp server-test'
- every tests - 'gulp test'

# How to run client side tests on phpstorm
- Install NodeJS and Karma plugins in PhpStorm
- run / edit configurations / add karma
- set configuration file (e.g.: /js-boilerplate/karma.conf.js)
- set node interpreter (e.g.: ~/.nvm/v0.11.14/bin/node)
- set karma package (e.g.: /js-boilerplate/node_modules/karma)

# How to run server side tests on phpstorm
- Install NodeJS plugin in PhpStorm
- run / edit configurations / add mocha
- set node interpreter (/.nvm/v0.11.14/bin/node) 
- set node options (--harmony)
- set working directory (project's main directory - /js-boilerplate)
- set mocha package (project's main directory and node_modules/mocha - /js-boilerplate/node_modules/mocha)
- set extra mocha options (-r co-mocha)
- set test directory (project's main directory and server - /js-boilerplate/server)
