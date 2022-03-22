# GovTech's BGP e2e tests using Cypress

![BGP](https:///BGP.gif)

This project aims at running UI tests on GovTech's Business Grants Portal. To achieve that automated tests are run using Cypress framework.
BDD Tests are defined using Cucumber tool. Underlying tests are implemented using Javascript.

## Follow below details to execute tests in this framework

### Pre-requisite
    macOS 10.9 and above(64 bit only)
    Windows 7 and above
    Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 (64 bit only)
    
    Node.js 10 or 12 and above
    
### Initial Setup
    
    ## clone this repo to a local directory
    git clone https://github.com/<your-username>/govtech-bgp-e2e-test.git

    ## cd into the cloned repo
    cd govtech-bgp-e2e-test

    ## install the node_modules
    npm install

### Running tests via Command Line and generate report
    ## Run below command in terminal to run all tests and generate collated html report
    npm run cy:compelete

### Running tests via TestRunner
    ## Below command will start the Cypress testrunner 
    cypress open
    ## After testrunner has started double click on any .feature file to run tests

### About Project structure
    1. The Basic structure is auto created by Cypress.
    This project is designed to follow Page Object Model. So all the Page Objects can be found in -
    https://github.com/pm-komal-jain/govtech-bgp-e2e-test/tree/master/cypress/page-objects

    2. Tests are defined in BDD format into feature files -
    https://github.com/pm-komal-jain/govtech-bgp-e2e-test/tree/master/cypress/integration/bgp-e2e-tests/features
    
    3. The Steps are defined into folder with same name as Feature files.
    Example Steps for - eligibility.feature are defined under `eligibility >> eligibilitySteps.js`
    https://github.com/pm-komal-jain/govtech-bgp-e2e-test/tree/master/cypress/integration/bgp-e2e-tests/features/eligibility    

    4. Videos are recorded and are placed under `cypress >> videos`
    https://github.com/pm-komal-jain/govtech-bgp-e2e-test/tree/master/cypress/videos

    5. The screenshots are taken on failure and recorded under `cypress >> screenshots`
    https://github.com/pm-komal-jain/govtech-bgp-e2e-test/tree/master/cypress/screenshots
    
    6. Generated html report can be found under `cypress >> reports`
    https://github.com/pm-komal-jain/govtech-bgp-e2e-test/tree/master/cypress/reports


    
    
### Possible enhancements
    1. Typescript can also be used for writing Cypress tests this will keep Testing tech stack nearly same a development tech stack for BGP project.
    2. All tests are not implemented.
    3. Sample CI / CD integration to trigger tests directly

### Caveats
    The code is only tested on macOS 10.15
