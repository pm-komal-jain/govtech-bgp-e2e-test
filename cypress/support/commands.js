// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
import {HomePage} from "../page-objects/HomePage"
// -- This is a parent command --
 Cypress.Commands.add('loadBasicAuth', (domain, user, password) => {
   const homePage = new HomePage()
   cy.visit("https://"+user+":"+password+"@"+domain)
   homePage.checkBasicAuthScreen(user, password)
 })

// Cypress.Commands.overwrite('AfterEach', ()=>{
//   cy.log('I run After every test in every spec file!!!!!!')
// })

// Cypress.Commands.overwrite('visit', (orig, url, options) => {
//   const URL = Cypress.env('baseURL') + url;
//   const auth = {
//     username : 'user',
//     password : 'pass'
//   }
//
//   if (options) {
//     options.auth = auth;
//   } else {
//     options = {
//       auth
//     }
//   }
//
//   return orig(URL, options);
// })

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
