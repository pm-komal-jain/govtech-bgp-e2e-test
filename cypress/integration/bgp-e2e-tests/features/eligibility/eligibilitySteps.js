import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import 'cypress-wait-until';
import {HomePage} from "../../../../page-objects/HomePage"
import {LoginPage} from "../../../../page-objects/LoginPage"

const env = Cypress.env()
const homePage = new HomePage()
const loginPage = new LoginPage()

Given('User is on BGP home page', function (){
  cy.loadBasicAuth(env['bgp_uat_domain'], env['username'], env['password'] );
  cy.url().should('include', 'bgp')
})

When('User clicks on Login button', function (){
  console.log("Reached here")
  homePage.clickLoginOnHomePage()
})

And('User enters login details - EntityId as {string} UserId as {string} UserRole as {string} and name as {string}',
  function(entityID, userId, role, name){
  loginPage.enterLoginDetails(entityID, userId, role, name)
})

Then('User is successfully logged in', ()=>{
  cy.wait(2000)
  cy.title().should('include', 'Business Grants Portal')
  cy.url().should('include', 'dashboard')
})

Given('User is logged in on BGP', ()=>{})
When('User clicks on Get New Grant from Under My grants section', ()=>{})
And('User chooses sector as {string}, reason as {string} and grant plan as {string} and applies', (sector, reason, planType)=>{})
Then('An untitled draft is successfully created under MyApplications > Drafts', ()=>{})

When('User selects MRA application from Drafts', ()=>{})
And('clicks on Proceed button', ()=>{})
Then('Grants form should load and it has 6 sections to fill in', ()=>{})

Given('User is on MRA Grants form', ()=>{})
When('User clicks on Eligibility link from left panel', ()=>{})
Then('There are 5 questions with Yes-No radio buttons each', ()=>{})

Given('User is on MRA Grants form', ()=>{})
When('User choose {string} for First question and {string} for Second', (first, second)=>{})
Then('A warning strip appears on the form', ()=>{})
And('User reloads the form', ()=>{})
Then('All Yes or No answers are unset', ()=>{})

Given('User is on MRA Grants form', ()=>{})
When('User fills in all eligibility questions as {string}', (answer)=>{})
And('User click on Save button', ()=>{})
Then('Record is successfully updated under MyApplications > Drafts', ()=>{})
