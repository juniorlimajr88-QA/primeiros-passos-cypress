import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

const selectorsList = {
  usernameField: '[name="username"]',
  passwordField: '[name="password"]',
  loginButton:   "[type='submit']",
  sectionTitle: '.oxd-topbar-header-breadcrumb-module',
  dashboardGrid: ".orangehrm-dashboard-grid",
  wrongCredentialAlert: '.oxd-alert',
  myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
  firstNameField: "[name='firstName']",
  middleNameFiedl: "[name='middleName']",
  lastNameField: "[name='lastName']",
  genericField: ".oxd-input--active",
  dateField:"[placeholder='yyyy-dd-mm']", 
  dateCloseButton: ".--close",
  submmitButton: "[type='submit']"


}
  

  it.only('Login - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('firstname')
    cy.get(selectorsList.middleNameFiedl).clear().type('middlename')
    cy.get(selectorsList.lastNameField).clear().type('lastname')
    cy.get(selectorsList.genericField).eq(3).clear().type('employeeId')
    cy.get(selectorsList.genericField).eq(4).clear().type('Otherid')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriverLicense')
    cy.get(selectorsList.dateField).eq(0).clear().type('2026-03-10')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submmitButton).eq(1).click()



  })
   it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get("[type='submit']").click()
    cy.get(selectorsList.wrongCredentialAlert)
})
})