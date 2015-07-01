exports.config = {
    // A base URL for your application under test. Calls to protractor.get()
    // with relative paths will be prepended with this.
    baseUrl: 'http://localhost:' + (process.env.PORT || '9100'),


    // Spec patterns are relative to the location of this config.
    specs: [
        // gulp will handle specs by passing them in arguments
        "./e2e/*.spec.js"
    ],

    // Patterns to exclude.
    exclude: [],

    // Jasmine is fully supported as a test and assertion framework.
    // Mocha and Cucumber have limited beta support. You will need to include your
    // own assertion framework (such as Chai) if working with Mocha.
    framework: 'jasmine2',

    // Options to be passed to minijasminenode.
    //
    // See the full list at https://github.com/juliemr/minijasminenode/tree/jasmine1
    jasmineNodeOpts: {
        // If true, display spec names.
        isVerbose: false,
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 30000
    }
};