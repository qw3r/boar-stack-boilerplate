js-boilerplate
==============

Technology
----------

We'll use the following technologies in JavaScript projects (other type of projects i.e. Ruby, can be differ from these recommendations):

- Client and server language: latest EcmaScript version (currently: `ES6`)
- Node.js version: we will trying to use [io.js](https://iojs.org) on Heroku
- Task framework: [Gulp](http://gulpjs.com)
- Module loader: [Browserify](http://browserify.org)
- CSS pre-processor: [Stylus](http://learnboost.github.io/stylus/) (compatible with SASS)
- Template system: [Jade](http://jade-lang.com)
- Server framework: [Koa](http://koajs.com)
- Client framework: [AngularJS](https://angularjs.org)
- UI framework: latest [Bootstrap](http://getbootstrap.com) (currently v3.3.x)
- Dropdown component: [Select2](https://select2.github.io)
- Client side dependency manager: we use [npm](https://www.npmjs.com) where possible
- Test framework: [Mocha](http://mochajs.org)
- End-to-end test framework: [Protractor](http://angular.github.io/protractor/)

**Please note:** 

- all project must be compatible with Node.js 0.11 with harmony mode
- we will use [6to5](https://6to5.org) to convert ES6 to browser compatible JavaScript



Prerequisites
-------------

To use this project, you'll have to have the following packages on your computer:

- Git or use GitHub Desktop ([Windows](https://windows.github.com) and [Mac](https://mac.github.com))
- Node.js (0.11.x) and NPM
- MongoDB


Setting up
----------

If you haven't done it yet, [set up your Github account to use an SSH key](https://help.github.com/articles/generating-ssh-keys).

When you're done and you have all the prerequisite software, clone the repo:

```
git clone git@github.com:emartech/js-boilerplate.git
```

If you don't have Node.js already, download and install from [here](http://blog.nodejs.org/2015/01/30/node-v0-11-16-unstable/).

To run the sample application, you'll have to install MongoDB for your system.

On Mac OSX (with [HomeBrew](http://brew.sh/)):

```
brew install mongodb --with-openssl
```

To use *gulp* from the command line, you have to install it globally using *npm*:

```
sudo npm install gulp -g
```

Now you can nstall all the required packages:

```
npm install
```

To start the application, simply run `gulp start` and open [http://localhost:3000](http://localhost:3000) in your browser.


Gulp tasks
----------

- start the project for developing: `gulp start`
- create a build for deployment: `gulp build`
- run all tests: `gulp test`
- run client side tests: `gulp client-test`
- run server side tests: `gulp server-test`


Configuring PHPStorm
--------------------

### How to run client side tests

1. Install NodeJS and Karma plugins
- Run / Edit configurations / Add karma
  1. set configuration file: `/js-boilerplate/karma.conf.js`
  -  set node interpreter: `~/.nvm/v0.11.14/bin/node`
  -  set karma package: `/js-boilerplate/node_modules/karma`

### How to run server side tests

1. Install NodeJS plugin
- Run / Edit configurations / Add mocha
  1. set node interpreter: `~/.nvm/v0.11.14/bin/node`
  -  set node options: `--harmony`
  -  set working directory: _main directory_ (`/js-boilerplate`)
  -  set mocha package: _main directory_ and _mocha module_ (`/js-boilerplate/node_modules/mocha`)
  -  set extra mocha options: `-r co-mocha`
  -  set test directory: _main directory_ and _server_ (`/js-boilerplate/server`)
