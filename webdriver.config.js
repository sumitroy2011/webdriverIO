var specs = require('./specs');
var specArr = specs.getSpecs(process.argv);


var argsInfo = 'Page:: ' + specs.fnGetArgValue(process.argv, '-p')+ 
', Breakpoint:: ' + specs.fnGetArgValue(process.argv, '-b');

global.domainName = "https://www.google.com/";

var capabilities = {
    'firefox': [{
        name: 'Browser:: firefox, ' + argsInfo,
        browserName: 'firefox'
      }],
  
    'phantomjs' : [{
         name: 'Browser:: phantomjs, ' + argsInfo,
         browserName: 'phantomjs'
       }],
    
    'chrome': [{
        name: 'Browser:: Chrome, ' + argsInfo,
        browserName: 'chrome'
    }],    
}

exports.config = {

    host: 'localhost',
    port: 4444,

    specs: specArr,

    services: ['selenium-standalone','chromedriver'],

    //services: ['phantomjs'],

    // Patterns to exclude.
   exclude: [
        'spec/multibrowser/**',
        'spec/mobile/**'
    ],


    //Webdriver IO API related timeouts
    waitforTimeout: 15000,

    //Mocha related timeouts
    mochaOpts: {
        timeout: 30000
    },

    capabilities: capabilities[specs.fnGetArgValue(process.argv, '-b')],

    maxInstances: 3,

    sync: true,
    reporters: ['spec'],

    before: function() {
        var chai = require('chai');
        var chaiAsPromised = require('chai-as-promised');
        chai.use(chaiAsPromised);
        global.expect = chai.expect;
        chai.Should();
    }
}
