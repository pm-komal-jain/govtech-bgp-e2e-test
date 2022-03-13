import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given('User is logged-in and on MRA form', ()=>{})
When('User clicks on Contact details section', ()=>{})
And('User fills in all Main Contact Person Details and saves', (dataTable)=>{})
Then('Contact details draft should be successfully saved', ()=>{})

Given('User is on Contact details section', ()=>{})
When('User Enters postal code as {string}', (postalcode)=>{})
Then('Mailing address should be auto-populated', (dataTable)=>{})
And('User reloads form', ()=>{})
Then('Postal code should be reset', ()=>{})

Given('User is on Contact details section', ()=>{})
When('User checks the Same as registered address in Company Profile checkbox', ()=>{})

Given('User is on Contact details section', ()=>{})
When('Enters Letter Of Offer Addressee details and hits Save', ()=>{})
Then('Letter Of Offer Addressee details should be successfully updated in Draft', ()=>{})

Given('User selects MRA application from Drafts', ()=>{})
And('Updates Same as main contact person checkbox and clicks Save', ()=>{})
Then('Letter Of Offer Addressee details should be updated as main contact person details', ()=>{})
