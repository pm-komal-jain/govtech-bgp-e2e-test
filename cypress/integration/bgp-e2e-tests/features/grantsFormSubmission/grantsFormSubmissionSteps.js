import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";


When('User enters Eligibility and Contact details', ()=>{})
And('User Goes to Declare & Review section and clicks on Review', ()=>{})
Then('Incomplete sections should show error count in left side panel', ()=>{})

Given('User is on MRA Grants form', ()=>{})
When('User fills in all details in all 6 sections', ()=>{})
And('User Goes to Declare & Review section and clicks on Review', ()=>{})
Then('User is on readonly summary page and all details match', ()=>{})

When('I click on Consent and Acknowledge button', ()=>{})
And('Submit Application', ()=>{})
Then('Success message should be generated with a Reference Id and Agency details', ()=>{})
Then('My Grants dashboard should show the Application under the Processing tab', ()=>{})
