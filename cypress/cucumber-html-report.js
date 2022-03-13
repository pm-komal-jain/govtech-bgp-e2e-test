var reporter = require('cucumber-html-reporter');
var options = {
  theme: 'bootstrap',
  jsonDir: './cypress/cucumber-json/',
  output: './cypress/reports/cucumber-htmlreport.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    "App Version":"0.3.2",
    "Test Environment": "STAGING",
    "Browser": "Chrome",
    "Platform": "Mac",
    "Parallel": "Scenarios",
    "Executed": "Remote"
  }
};

reporter.generate(options);
