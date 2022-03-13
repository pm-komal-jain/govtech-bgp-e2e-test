/// <reference types="cypress" />

export class LoginPage {
  // All the locators used from Login Page are enlisted below
  loginPage_entityId = '#entityId'
  loginPage_userId = '#userId'
  loginPage_userRole = '#userRole'
  loginPage_userFullName = '#userFullName'
  login_button = 'form > .btn'

  //All the actions performed on Login Page are defined below
  enterEntityId(entityId) {
    cy.get(this.loginPage_entityId).type(entityId)
  }

  enterUserId(userId) {
    cy.get(this.loginPage_userId).type(userId)
  }

  enterUserRole(userRole) {
    cy.get(this.loginPage_userRole).type(userRole)
  }

  enterUserFullName(userFullName) {
    cy.get(this.loginPage_userFullName).type(userFullName)
  }

  clickLogin() {
    cy.get(this.login_button).click()
  }

  enterLoginDetails(entityID, userId, userRole, userFullName,) {
    this.enterEntityId(entityID)
    this.enterUserId(userId)
    this.enterUserRole(userRole)
    this.enterUserFullName(userFullName)
    this.clickLogin()
  }

}
