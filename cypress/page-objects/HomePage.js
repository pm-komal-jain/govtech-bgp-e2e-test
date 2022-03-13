/// <reference types="cypress" />

export class HomePage{
  // All the locators used from Home Page (landing page when the bgp domain is first loaded) are enlisted below
  basicAuth_modal = '.textDescription-customizable'
  basicAuth_username = '#signInFormUsername'
  basicAuth_password = '#signInFormPassword'
  basicAuth_submit = ':nth-child(2) > :nth-child(1) > :nth-child(1) > .cognito-asf > .btn'
  homePage_Login = '#login-button'

  //All the actions performed on Home Page are defined below
  checkBasicAuthScreen(user, password){
    cy.log("Logging url - " +cy.url())
    cy.get("body").then($body => {
      cy.log("Basic auth still there")
      if ($body.find(this.basicAuth_modal).length > 0) {
        this.enterBasicAuthDetails(user, password)
      }
    });
  }

  enterBasicAuthDetails(user, password) {
    cy.get(this.basicAuth_username)
      .type(user, {force: true})
    cy.get(this.basicAuth_password)
      .type(password, {force: true})
    cy.get(this.basicAuth_submit)
      .click()
    cy.log("Logging url - " + cy.url())
  }

  clickLoginOnHomePage() {
    cy.get(this.homePage_Login).click({force:true})
  }
}
